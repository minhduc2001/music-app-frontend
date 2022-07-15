import React, { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { Card, Box, Typography, TextField, Button, Backdrop, Dialog, Avatar } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { createAxios } from '../createIntance'
import { loginSuccess } from '../redux/authSlice'
import { updateUser, setAvatar } from '../redux/requestApi'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import CircularProgress from '@mui/material/CircularProgress';

function PersonalPage({ onSetCurrentView }) {
  const reduxResponse = useSelector(state => state.auth.login)
  const user = reduxResponse.currentUser;
  const [image, setImage] = useState(null)
  const [dialog, setDialog] = useState(false);
  const [editable, setEditable] = useState(false)
  const [values, setValues] = useState({})
  const [isSetPassword, setIsSetPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  let axiosJWT = createAxios(user, reduxResponse.accessToken, dispatch, loginSuccess);

  console.log(reduxResponse.accessToken);
  const toastOption = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  const handleClick = async (e) => {
    e.preventDefault()
    setEditable(true)
    if (editable) {
      updateUser(reduxResponse.accessToken, user._id, dispatch, axiosJWT, values)
      setDialog(true);
      setEditable(false);
    }
  }
  const handleClickAvatar = (e) => {
    const newImage = e.target?.files?.[0];

    if (newImage) {
      const reader = new FileReader();
      reader.readAsDataURL(newImage);

      reader.onloadend = () => {
        setImage(reader.result);
      }
    }
  }

  useEffect(() => {
    if (image) {
      setIsLoading(true);
      setAvatar(reduxResponse.accessToken, user._id, dispatch, axiosJWT, image)
        .then(() => {
          setIsLoading(false);
          toast.success('Set avatar successfully!', toastOption)
        })
        .catch(() => {
          setIsLoading(false);
          toast.error('Failed to load avatar!', toastOption)
        });
      setImage(null)
    }
  }, [image])


  return (
    <>
      <form onSubmit={handleClick}>

        <Box sx={{
          position: 'relative',
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundImage: `url('https://phanexpress.com/WebLauPhan/order/bg-order.png')`,
          backgroundRepeat: 'no-repeat',
        }}>
          <Button
            sx={{
              width: 90,
              height: 30,
              color: 'white',
              backgroundColor: 'orange',
              position: 'absolute',
              top: 80,
              left: 30,
            }}
            onClick={() => onSetCurrentView('Body')}
          >
            BACK
          </Button>


          <Typography
            fontFamily={'Roboto Slab'}
            fontWeight={900}
            color="white"
            fontSize={25}
            paddingBottom={5}
            paddingTop={10}>
            THONG TIN TAI KHOAN
          </Typography>
          <div>

            <input
              // ref={inputFileRef}
              // className={classes.input}
              id="contained-button-file"
              type='file'
              accept="image/*"
              hidden onChange={handleClickAvatar}
            />
            <label htmlFor="contained-button-file">
              <Avatar
                alt="Avatar"
                sx={{ width: 150, height: 150, marginBottom: 5 }}
                src={image || user.avatar.url}
              />
            </label>
          </div>
          <Card
            sx={{
              width: 1150,
              height: 400,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: 3
            }}>
            <Box
              className='info_user'
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
              }}
            >
              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Họ tên
                </Typography>
                {editable == true ?
                  <TextField
                    fullWidth
                    variant="standard"
                    name='name'
                    required={true}
                    defaultValue={user.name}
                    onChange={handleChange} /> :
                  <Typography
                    fontFamily={'Roboto Slab'}
                    paddingTop={1}
                    fontSize={18}>
                    {user.name}
                  </Typography>}
              </div>

              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Số điện thoại
                </Typography>

                <Typography
                  fontFamily={'Roboto Slab'}
                  paddingTop={1}
                  fontSize={18}>
                  {user.phone}
                </Typography>
              </div>
              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Mật khẩu
                </Typography>
                {isSetPassword ?
                  <TextField
                    fullWidth
                    variant="standard"
                    name='password'
                    type='password'
                    onChange={handleChange} /> :
                  <Typography
                    fontFamily={'Roboto Slab'}
                    paddingTop={1}
                    fontSize={18}
                    onClick={() => { setIsSetPassword(true); setEditable(true) }}
                  >
                    Click me if you want to change password!
                  </Typography>}
              </div>
              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Avatar
                </Typography>

                <Typography
                  fontFamily={'Roboto Slab'}
                  paddingTop={1}
                  fontSize={18}>
                  ...
                </Typography>
              </div>
              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Username
                </Typography>

                <Typography
                  fontFamily={'Roboto Slab'}
                  paddingTop={1}
                  fontSize={18}>
                  {user.username}
                </Typography>
              </div>
              <div style={{ width: 350, padding: 15, marginBottom: 50 }}>
                <Typography
                  fontFamily={'Roboto Slab'}
                  fontSize={20}
                  fontWeight={900} >
                  Active
                </Typography>

                <Typography
                  fontFamily={'Roboto Slab'}
                  paddingTop={1}
                  fontSize={18}>
                  {`${user.isActive}`}
                </Typography>
              </div>
              <div style={{ width: 350, padding: 15, }}>
                <Button
                  type="submit"
                  sx={{
                    width: 300,
                    height: 50,
                    border: 1,
                    backgroundColor: 'rgb(255,114,22)',
                    borderColor: 'white',
                    borderRadius: 6,
                    color: 'white',
                  }}>
                  {!editable ? 'Sửa thông tin' : 'Lưu thông tin'}
                </Button>
              </div>

            </Box>
          </Card>
          <Dialog
            open={dialog}
            onClose={() => {
              setDialog(false);
            }}>
            <Box sx={{
              width: 500,

              backgroundColor: 'white',
              padding: 5
            }}>
              <Typography
                fontFamily={'Roboto Slab'}
                fontSize={20}
                textAlign={'center'}
                textTransform={'uppercase'}
                paddingBottom={5}
                paragraph>
                {!reduxResponse.error ? 'Cập nhật thành công. Xin cảm ơn!'
                  : 'Cập nhật thất bại. Vui lòng sửa đổi thông tin hợp lệ để tiếp tục!'}
              </Typography>
              <Typography textAlign={'center'}>
                {!reduxResponse.error ?
                  <CheckCircleOutlineIcon sx={{
                    color: 'rgb(35,188,35)',
                    fontSize: 200
                  }} /> :
                  <SentimentVeryDissatisfiedIcon sx={{
                    color: 'red',
                    fontSize: 200
                  }} />}
              </Typography>
            </Box>
          </Dialog>
        </Box>

      </form>
      <ToastContainer />
      <Backdrop
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}
const Container = styled.div`
    margin-top: 70px;

    background-color: #231B2E;
    height: 800px;
    span{
        color: white;
        
    }
`;
export default PersonalPage