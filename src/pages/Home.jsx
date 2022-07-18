import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Musics from '../components/Musics';
import Content from '../components/Content';
import Control from '../components/Control';
import { Songs } from '../Context';
import { useSelector, useDispatch } from 'react-redux'
import { getAllMusics, logout } from '../redux/requestApi'
import { useNavigate } from 'react-router-dom'

import { loginSuccess } from '../redux/authSlice';
import { createAxios } from '../createIntance'
import { Backdrop } from '@mui/material'
import CircularProgress from '@mui/material/CircularProgress';
import loading from '../public/Ripple-1s-200px.gif'


function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(true);

    const reduxResponse = useSelector((state) => state.auth.login);
    const user = reduxResponse.currentUser;

    let axiosJWT = createAxios(user, reduxResponse.accessToken, dispatch, loginSuccess);

    const dataSong = useSelector(state => state.music.musics?.songs)
    const [song, setSong] = useState(dataSong?.[0])

    const handleSetSong = (idSong) => {
        const music = dataSong.find(song => song.id === idSong);
        setSong(music);
    }

    useEffect(() => {
        if (!user) navigate('/login')
        if (reduxResponse?.accessToken) {
            getAllMusics(reduxResponse.accessToken, dispatch, axiosJWT)
        };
    }, [])

    useEffect(() => { if(dataSong.length > 0) setIsLoading(false) }, [dataSong])

    const handleLogout = () => {
        logout(reduxResponse?.accessToken, dispatch, navigate, axiosJWT);
    }

    return (
        <Songs.Provider value={{ dataSong, song, handleSetSong, user, handleLogout }}>
            <Container>
                <Navbar />
                <Content />
                <Musics />
                <Control />
            </Container>
            <Backdrop
                open={isLoading}
            >
                 <img src={loading} alt="loading" className="loading" style={{width: '50px'}}/>
            </Backdrop>
        </Songs.Provider>
    )
}
const Container = styled.div`
    display: grid;
    grid-template-columns: 15% 65% 20%;
`;
export default Home