import { configureStore } from "@reduxjs/toolkit";
import overlayReducer from './overlay'

export default configureStore({
    reducer: {
        overlay: overlayReducer
    }
});