import { createSlice } from '@reduxjs/toolkit'

const musicSlice = createSlice({
    name: 'music',
    initialState: {
        musics: {
            isFetching: false,
            songs: [],
            error: false,
        }
    },
    reducers: {
        getMusicStart: (state) => {
            state.musics.isFetching = true;
        },
        getMusicSuccess: (state, action) => {
            state.musics.isFetching = false;
            state.musics.songs = action.payload;
            state.musics.failed = false;
        },
        getMusicFailed: (state) => {
            state.musics.isFetching = false;
            state.musics.failed = true;
        }
    }
})

export const {
    getMusicSuccess,
    getMusicFailed,
    getMusicStart
} = musicSlice.actions;

export default musicSlice.reducer;