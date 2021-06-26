import { createSlice } from "@reduxjs/toolkit";

export const PopUpWindowsSlicer = createSlice({
    name: "PopUpWindowsSlicer",
    initialState: {
        addCompany: false,
        deleteCompany: false,
        findCompany: false,
        addCustomer: false,
        deleteCustomer: false,
        findCustomer: false,
        addCoupon: false,
        deleteCoupon: false,
        findCoupon: false,
        buyCoupon: false,
    },
    reducers: {
        openWindow: (state, action) => {
            const { stateName } = action.payload;
            state.addCompany = stateName === 'addCompany';
            state.deleteCompany = stateName === 'deleteCompany';
            state.findCompany = stateName === 'findCompany';
            state.addCustomer = stateName === 'addCustomer';
            state.deleteCustomer = stateName === 'deleteCustomer';
            state.findCustomer = stateName === 'findCustomer';
            state.addCoupon = stateName === 'addCoupon';
            state.deleteCoupon = stateName === 'deleteCoupon';
            state.findCoupon = stateName === 'findCoupon';
            state.buyCoupon = stateName === 'buyCoupon';
        },
        closeWindow: (state) => {
            state.addCompany = false;
            state.deleteCompany = false;
            state.findCompany = false;
            state.addCustomer = false;
            state.deleteCustomer = false;
            state.findCustomer = false;
            state.addCoupon = false;
            state.deleteCoupon = false;
            state.findCoupon = false;
            state.buyCoupon = false;
        }
    }
});

export const {
    openWindow,
    closeWindow
} = PopUpWindowsSlicer.actions;

export default PopUpWindowsSlicer.reducer;