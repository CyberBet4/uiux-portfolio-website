import { createSlice } from "@reduxjs/toolkit";
export const overlaySlice = createSlice ({
    name: "overlay", 
    
    initialState: {
        display: false,
        link: ""
    }, 
    
    reducers: {
        toggleOverlay: (state, action) => {
            state.display = !state.display //toggle the overlay
            state.link = action.payload //payload to input a value in the 'link' variable
        },
    }
});

export const { toggleOverlay } = overlaySlice.actions
export default overlaySlice.reducer;