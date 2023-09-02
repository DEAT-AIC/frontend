import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "SET_USER",
    initialState: null,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        },
    },
});

const loadingSlice = createSlice({
    name: "SET_LOADING",
    initialState: false,
    reducers: {
        setLoading: (state, action) => {
            return action.payload;
        },
    },
});


const setUser = userSlice.actions;
const setLoading = loadingSlice.actions;
const userReducer = userSlice.reducer;
const loadingReducer = loadingSlice.reducer;

export { userSlice, loadingSlice, setUser, setLoading, userReducer, loadingReducer }