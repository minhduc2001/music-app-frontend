import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        login: {
            currentUser: null,
            isFetching: false,
            accessToken: null,
            error: null,
        }
    },
    reducers: {
        loginStart: (state) => {
            state.login.isFetching = true;
        },
        loginSuccess: (state, action) => {
            console.log(action.payload);
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.accessToken = action.payload.accessToken;
            state.login.error = null;
        },
        loginFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = action.payload;
        },
        logoutStart: (state) => {
            state.login.isFetching = true;
        },
        logoutSuccess: (state) => {
            state.login.isFetching = false;
            state.login.currentUser = null;
            state.login.accessToken = null;
            state.login.error = null;
        },
        logoutFailed: (state) => {
            state.login.isFetching = false;
            state.login.error = null;
            state.login.success = false;
        },
        updateStart: (state) => {
            state.login.isFetching = true;
        },
        updateSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = null;
        },
        updateFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = action.payload;
        },
        setAvatarStart: (state) => {
            state.login.isFetching = true;
        },
        setAvatarSuccess: (state, action) => {
            state.login.isFetching = false;
            state.login.currentUser = action.payload;
            state.login.error = null;
        },
        setAvatarFailed: (state, action) => {
            state.login.isFetching = false;
            state.login.error = action.payload;
        },

    }
})

export const {
    loginStart,
    loginSuccess,
    loginFailed,
    logoutStart,
    logoutSuccess,
    logoutFailed,
    updateStart,
    updateSuccess,
    updateFailed,
    setAvatarStart,
    setAvatarSuccess,
    setAvatarFailed

} = authSlice.actions;
export default authSlice.reducer;