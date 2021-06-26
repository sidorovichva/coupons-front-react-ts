import React from 'react';
import './Companies.css';
import AddCompany from "../../components/AddCompany";
import {useDispatch, useSelector} from "react-redux";
import ConfigureStore from "../../redux/StoreConfig";
import {openWindow} from "../../redux/PopUpWindowsSlicer";
import {companies} from "../../redux/MainScreenSlicer";

const Companies = (): JSX.Element => {

    const { role } = useSelector((state) => ConfigureStore.getState().LoginSlice);
    const { addCompany } = useSelector((state) => ConfigureStore.getState().PopUpWindowsSlicer);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(openWindow({stateName: 'addCompany'}))
    }

    const handleDel = () => {
        dispatch(openWindow({stateName: 'deleteCompany'}))
    }

    const handleFind = () => {
        dispatch(companies())
    }

    return (
        <div className="Companies">
            Companies
            <ul className="dropdown">
                {role === 'ADMINISTRATOR' && <li onClick={ handleAdd }>Add</li>}
                {role === 'ADMINISTRATOR' && <li onClick={ handleDel }>Delete</li>}
                <li onClick={ handleFind }>Find</li>

            </ul>
            {addCompany && <AddCompany />}
            {/*{deleteCompany && <DeleteCompany />}*/}
        </div>
    );
}

export default Companies;