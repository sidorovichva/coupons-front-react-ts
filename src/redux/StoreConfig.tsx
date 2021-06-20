import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter";
import DropDownMenuReducer from "./DropDownMenuSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        DropDownMenuSlice: DropDownMenuReducer
    }
});