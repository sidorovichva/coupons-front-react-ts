import { createSlice } from "@reduxjs/toolkit";

export const MainScreenSlicer = createSlice({
    name: "MainScreenSlicer",
    initialState: {
        title: 'Coupons',
        link: 'https://coupons-back-mysql-jwt.herokuapp.com',
        //link: 'http://localhost:8080',
    },
    reducers: {
        categories: (state) => {
            state.title = 'Categories';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/categories';},
            //state.link = 'http://localhost:8080/categories';},
        companies: (state) => {
            state.title = 'Companies';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/companies';},
            //state.link = 'http://localhost:8080/companies';},
        customers: (state) => {
            state.title = 'Customers';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/customers';},
            //state.link = 'http://localhost:8080/customers';},
        coupons: (state) => {
            state.title = 'Coupons';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com';},
            //state.link = 'http://localhost:8080';},
        customerCoupons: (state) => {
            state.title = 'My coupons';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/purchases';},
            //state.link = 'http://localhost:8080/purchases';},
        companyCoupons: (state) => {
            state.title = 'Issued coupons';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/coupons';},
            //state.link = 'http://localhost:8080/coupons';},
        purchases: (state) => {
            state.title = 'Purchases';
            state.link = 'https://coupons-back-mysql-jwt.herokuapp.com/purchases';},
            //state.link = 'http://localhost:8080/purchases';},
    }
});

export const {
    categories,
    companies,
    customers,
    coupons,
    purchases,
    customerCoupons,
    companyCoupons
} = MainScreenSlicer.actions;

export default MainScreenSlicer.reducer;