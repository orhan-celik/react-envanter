import { createSlice } from "@reduxjs/toolkit";

const siteSlice = createSlice({
    name : "site",
    initialState : {
        isLoading : false
    },
    reducers : {
        toggleLoading: (state,action) => {
            state.isLoading = !state.isLoading
        }
    }
})

export const {toggleLoading} = siteSlice.actions;

export default siteSlice.reducer;