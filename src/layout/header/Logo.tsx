import './Logo.css';
import React from "react";
import {useDispatch} from "react-redux";
import {about} from "../../redux/MainScreenSlicer";

function Logo():JSX.Element {

    const dispatch = useDispatch();

    const handleHome = () => {
    }

    const handleAbout = () => {
        dispatch(about());
    }

    return (
        <div className="Logo">
            <div className="Home" onClick={ handleHome }>CMS</div>
            <ul className="dropdown">
                <li onClick={handleAbout}>About</li>
            </ul>
        </div>
    );
}

export default Logo;