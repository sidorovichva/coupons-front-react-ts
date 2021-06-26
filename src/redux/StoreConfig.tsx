import { configureStore } from "@reduxjs/toolkit";
import DropDownMenuReducer from "./DropDownMenuSlice";
import LoginReducer from "./LoginSlice";
import PopUpWindowsReducer from "./PopUpWindowsSlicer";
import MainScreenReducer from "./MainScreenSlicer";

export default configureStore({
    reducer: {
        DropDownMenuSlice: DropDownMenuReducer,
        LoginSlice: LoginReducer,
        PopUpWindowsSlicer: PopUpWindowsReducer,
        MainScreenSlicer: MainScreenReducer,
    }
});