import React from 'react';
import './Customers.css';
import {useDispatch} from "react-redux";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import {customers} from "../../redux/MainScreenSlicer";

const Customers = (): JSX.Element => {

    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(openWindow({stateName: 'addCustomer'}))
    }

    const handleDel = () => {
        dispatch(openWindow({stateName: 'deleteCustomer'}))
    }

    const handleFind = () => {
        dispatch(customers())
    }

    return (
        <div className="Customers">
            Customers
            <ul className="dropdown">
                <li onClick={ handleAdd }>Add</li>
                <li onClick={ handleDel }>Delete</li>
                <li onClick={ handleFind }>Find</li>
            </ul>
        </div>
    );
}

export default Customers;