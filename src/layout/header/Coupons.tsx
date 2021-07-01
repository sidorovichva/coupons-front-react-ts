import React from 'react';
import './Coupons.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import {companyCoupons, coupons, customerCoupons, nonCustomerCoupons} from "../../redux/MainScreenSlicer";
import AddCoupon from "../../components/AddCoupon";

const Coupons = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { addCoupon } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(openWindow({stateName: 'addCoupon'}))
    }

    const handleMyCoupons = () => {
        dispatch(customerCoupons())
    }

    const handleShopCoupons = () => {
        dispatch(nonCustomerCoupons())
    }

    const handleIssuedCoupons = () => {
        dispatch(companyCoupons())
    }

    const handleAllCoupons = () => {

        dispatch(coupons())
    }

    return (
        <div className="Coupons">
            Coupons
            <ul className="dropdown">
                {role === 'COMPANY' && <li onClick={handleAdd}>Add</li>}
                {role === 'CUSTOMER' && <li onClick={handleMyCoupons}>My coupons</li>}
                {role === 'COMPANY' && <li onClick={handleIssuedCoupons}>Issued coupons</li>}
                {role === 'CUSTOMER' && <li onClick={handleShopCoupons}>Go Shopping</li>}
                <li onClick={handleAllCoupons}>All coupons</li>
            </ul>
            {addCoupon && <AddCoupon />}
        </div>
    );
}

export default Coupons;