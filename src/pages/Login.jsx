import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { PWResetRoute, registerRoute, activeRoute, passwordRoute } from '../utils/APIRoutes'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios';
import { loginUser } from '../redux/requestApi';
import { authentication } from '../configs/firebase.config'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { configPhoneNumber } from '../configs/user.config'
import { Dialog, Typography, Box, TextField, Card, Button, Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';

function Login() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const reduxResponse = useSelector((state) => state.auth.login);
  const user = reduxResponse.currentUser;
  const [currentView, setCurrentView] = useState('login');
  const [values, setValues] = useState({ username: '', password: '', phone: '' })
  const [dialog, setDialog] = useState(false);
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toastOption = {
    position: 'top-right',
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: 'dark'
  }

  const getCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      'size': 'invisible',
      'callback': (response) => {
        console.log(response);
      }
    }, authentication);
  }

  const sendOTP = (phone) => {
    getCaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, configPhoneNumber(phone) + '', appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setDialog(true)
        // ...
      }).catch((error) => {
        console.log(error.message);
      });
  }
  const otpSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(otp).then((result) => {
      console.log(result);
      if (currentView === 'signup') axios.post(activeRoute, { phone: values.phone }).then(() => {
        toast.success('Regiterated user successfully. Please log in again!');
        changeView('login')
      })
      else axios.post(passwordRoute, { phone: values.phone }).then((result) => {
        toast.success(`New Password : ${result.data.msg}`, {
          position: 'top-right',
          autoClose: 20000,
          pauseOnHover: true,
          draggable: true,
          theme: 'dark'
        })
      })
      setDialog(false)
    }).then(() => {
      changeView('login');
    })
      .catch((error) => {
        toast.error('OTP is not available. Please try again!', toastOption);
        // User couldn't sign in (bad verification code?)
        // ...
      });

  }

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const changeView = (view) => {
    setCurrentView(view)
  }

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const userData = {
      username: values.username,
      password: values.password,
      phone: values.phone
    }
    if (otp) {
      toast.error('Please reload application!', toastOption);
      return;
    }
    try {
      const data = await axios.post(registerRoute, userData);
      sendOTP(userData.phone)
    } catch (error) {
      toast.error(error.response.data.msg, toastOption)
    }

  }

  const handleSubmitLogin = async (e) => {
    setIsLoading(true)
    e.preventDefault();
    const userData = {
      username: values.username,
      password: values.password
    }
    const data = await loginUser(userData, dispatch, navigate);
    if (data) {
      toast.error(data.msg, toastOption)
      setIsLoading(false)
    }
  }

  const handleSubmitPWReset = async (e) => {
    e.preventDefault();
    const data = await axios.post(PWResetRoute, {
      phone: values.phone
    })
    if (!data.data.status) {
      toast.error(data.data.msg, toastOption);
    }
    console.log(data.data);
    sendOTP(values.phone);
  }

  useEffect(() => {
    if (user) navigate('/')
  }, [])
  const view = () => {
    switch (currentView) {
      case "signup":
        return (
          <form onSubmit={(e) => { handleSubmitRegister(e) }}>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" required onChange={(e) => handleChange(e)} />
                </li>
                <li>
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required onChange={(e) => handleChange(e)} />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" required onChange={(e) => handleChange(e)} />
                </li>
              </ul>
            </fieldset>
            <button type="submit">Submit</button>
            <button type="button" onClick={() => changeView("login")}>Have an Account?</button>
          </form>
        )
        break
      case "login":
        return (
          <form onSubmit={(e) => handleSubmitLogin(e)}>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" name="username" required onChange={(e) => handleChange(e)} />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" name="password" required onChange={(e) => handleChange(e)} />
                </li>
                <li>
                  <i />
                  <a onClick={() => changeView("PWReset")} href="#">Forgot Password?</a>
                </li>
              </ul>
            </fieldset>
            <button type="submit">Login</button>
            <button type="button" onClick={() => changeView("signup")}>Create an Account</button>
          </form>
        )
        break
      case "PWReset":
        return (
          <form onSubmit={(e) => handleSubmitPWReset(e)}>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required onChange={(e) => handleChange(e)} />
                </li>
              </ul>
            </fieldset>
            <button type="submit">Send Reset Link</button>
            <button type="button" onClick={() => changeView("login")}>Go Back</button>
          </form>
        )
      default:
        break
    }
  }
  return (
    <>
      <Container>
        <div className="body">
          {view()}
        </div>
        <div id='sign-in-button'></div>
      </Container>
      <Dialog
        open={dialog}
      >
        <form onSubmit={(e) => otpSubmit(e)}>
          <Card sx={{
            width: 400,
            padding: 5,
          }}>
            <Typography fontSize={20} fontFamily={'Roboto Slab'} fontWeight={900} paddingBottom={3}>
              VERIFY OTP
            </Typography>
            <Typography fontSize={15} fontFamily={'Roboto Slab'} paddingBottom={1}>
              OTP CODE
            </Typography>
            <TextField
              fullWidth
              name='password'
              id='password'
              value={otp}
              required
              type={'number'}
              onChange={(e) => { setOtp(e.target.value) }}
              size='small'
              sx={{
                marginBottom: 1
              }} />
            <Box sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <Button
                type='submit'
                sx={{
                  width: 200,
                  height: 50,
                  border: 1,
                  backgroundColor: 'rgb(22,41,56)',
                  borderColor: 'white',
                  borderRadius: 6,
                  color: 'white',
                  marginTop: 3
                }}>
                Xác thực
              </Button>
            </Box>

          </Card>
        </form>
      </Dialog>
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
    .body {
    display: grid;
    grid-template-columns: 1fr minmax(200px,400px) 1fr;
    grid-template-rows: 1fr minmax(auto,1fr) 1fr;
    grid-gap: 10px;
    width: 100%;
    height: 100vh;
    background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    box-sizing: border-box;
    form {
      grid-column: 2;
      grid-row: 2;
      display: grid;
      grid-gap: 10px;
      margin: auto 0;
      padding: 20px;
      background-color: rgba(255,255,255,0.9);
      border-radius: 10px;
      box-shadow: 0 32px 64px rgba(0,0,0,0.2);
      h2 {
        margin-bottom: 5px;
        text-align: center;
        text-shadow: 0 4px 16px #fff;
        font-size: 30px;
        font-weight: 100;
      }
      fieldset {
        margin: 0;
        background-color: #fff;
        border: none;
        border-radius: 5px;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        legend {
          padding: 5px;
          background-color: #fff;
          border-radius: 5px;
        }
        ul {
          margin: 0;
          padding: 0;
          li {
            display: grid;
            align-items: center;
            margin: 10px;
            a {
              color: #02c;
            }
            em {
              grid-column: span 2;
              text-align: center;
              padding: 5px;
            }
            label {
              text-align: left;
              padding-bottom: 2px;
            }
            input {
              padding: 5px;
              border: 1px solid #ddd;
              border-radius: 5px;
              &:hover {
                border: 1px solid #aaf;
              }
            }
          }
        }
      }
      button {
        padding: 10px;
        border:1px solid rgba(0,0,0,0);
        border-radius: 5px;
        background: #fff;
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
        &:hover {
          background-color: #eef;
          border: 1px solid #aaf;
        }
      }
    }
  }
  @media only screen and (min-width: 420px) {
    form {
      h2 {
        font-size: 40px;
      }
      fieldset {
        ul {
          li {
            grid-template-columns: 100px 1fr;
            label {
              padding-right: 10px;
              padding-bottom: 0;
              text-align: right !important;
            }
          }
        }
      }
    }
  }
  
  @keyframes Gradient {
    0% {
      background-position: 0% 50%
    }
    50% {
      background-position: 100% 50%
    }
    100% {
      background-position: 0% 50%
    }
  }
`;
export default Login