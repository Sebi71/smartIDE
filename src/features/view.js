import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    view: true
}

export const view = createSlice({
    name: "view",
    initialState,
    reducers: {
        toggleView: (state) => {
            state.view = !state.view
        },
        hideView: (state) => {
            state.view = false
        }
    }
})

export const { toggleView, hideView } = view.actions;
export default view.reducer