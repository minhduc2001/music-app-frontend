import { loginRoute, registerRoute, getAllMusicsRoute, logoutRoute, updateRoute, setAvatarRoute } from '../utils/APIRoutes';
import { loginStart, loginSuccess, loginFailed } from './authSlice';
import {
    logoutStart, logoutSuccess, logoutFailed,
    updateStart, updateSuccess, updateFailed,
    setAvatarStart, setAvatarSuccess, setAvatarFailed
} from './authSlice';

import { getMusicStart, getMusicSuccess, getMusicFailed } from './musicSlice';

import axios from 'axios';
axios.defaults.withCredentials = true;

export const loginUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const data = await axios.post(loginRoute, user);
        await dispatch(loginSuccess(data.data));
        navigate('/')
    } catch (error) {
        await dispatch(loginFailed(error.response.data));
        return error.response.data;
        
    }
}

export const getAllMusics = async (accessToken, dispatch, axiosJwt) => {
    dispatch(getMusicStart())
    try {
        const data = await axiosJwt.get(getAllMusicsRoute,
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            }
        )
        dispatch(getMusicSuccess(data.data))
    } catch (error) {
        dispatch(getMusicFailed())
    }
}

export const logout = async (accessToken, dispatch, navigate, axiosJwt) => {
    dispatch(logoutStart())
    try {
        await axiosJwt.post(logoutRoute, {
            headers: {
                token: `Bearer ${accessToken}`
            }
        })

        dispatch(logoutSuccess());
        navigate('/login')

    }
    catch (error) {
        dispatch(logoutFailed());
    }
}
export const updateUser = async (accessToken, id, dispatch, axiosJwt, values) => {
    dispatch(updateStart())
    try {
        const data = await axiosJwt.put(`${updateRoute}/${id}`,
            values,
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            })
        dispatch(updateSuccess(data.data));
    }
    catch (error) {
        dispatch(updateFailed(error))
    }
}

export const setAvatar = async (accessToken, id, dispatch, axiosJwt, avatar) => {
    dispatch(setAvatarStart())
    try {
        const data = await axiosJwt.post(`${setAvatarRoute}/${id}`,
            { avatar: avatar },
            {
                headers: {
                    token: `Bearer ${accessToken}`
                }
            })

        dispatch(setAvatarSuccess(data.data));
    }
    catch (error) {
        dispatch(setAvatarFailed(error))
    }
}

