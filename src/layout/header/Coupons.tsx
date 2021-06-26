import React from 'react';
import './Coupons.css';
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import {companyCoupons, coupons, customerCoupons} from "../../redux/MainScreenSlicer";

const Coupons = (): JSX.Element => {

    //const { addCoupon } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    //const {  } = useSelector((state) => ConfigureStore.getState().MainScreenSlicer);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(openWindow({stateName: 'addCoupon'}))
    }

    const handleMyCoupons = () => {
        dispatch(customerCoupons())
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
                {role === 'COMPANY' && <li onClick={handleIssuedCoupons}>My coupons</li>}
                <li onClick={handleAllCoupons}>All coupons</li>
            </ul>
            {/*{addCoupon && <AddCoupon />}*/}
            {/*{addCustomer && <AddCompany />}*/}
            {/*{deleteCompany && <DeleteCompany />}*/}
        </div>
    );
}

export default Coupons;