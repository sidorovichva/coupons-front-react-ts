import React from 'react';
import ThemeSwitch from "../../components/header/ThemeSwitch";
import './ThemeSwitchArea.css';

const ThemeSwitchArea = (): JSX.Element => {


    return (
        <div className="ThemeSwitchArea">
            <ThemeSwitch />
        </div>
    );
}

export default ThemeSwitchArea;