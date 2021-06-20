import { createSlice } from "@reduxjs/toolkit";

export const DropDownMenuSliceSlice = createSlice({
    name: "DropDownMenuSlice",
    initialState: {
        title: 'coupons',
        link: 'https://coupons-back-mysql-jwt.herokuapp.com',
    },
    reducers: {
        categories: (state) => {
                state.title = 'categories';
                state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/categories';},
        companies: (state) => {
            state.title = 'companies';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/companies';},
        customers: (state) => {
            state.title = 'customers';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/customers';},
        coupons: (state) => {
            state.title = 'coupons';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com';},
        purchases: (state) => {
            state.title = 'purchases';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/purchases';},
    }
});

export const {
    categories,
    companies,
    customers,
    coupons,
    purchases
} = DropDownMenuSliceSlice.actions;

export default DropDownMenuSliceSlice.reducer;

// coupons: (state) => { state.title = 'coupons'; },