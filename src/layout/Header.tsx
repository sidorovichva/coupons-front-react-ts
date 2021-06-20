import React, {useContext} from 'react';
import LogoArea from "./header/LogoArea";
import DropDownMenuArea from "./header/DropDownMenuArea";
import LoginArea from "./header/LoginArea";
import ThemeSwitchArea from "./header/ThemeSwitchArea";
import {ThemeContext} from "../contexts/ThemeContext";
import './Header.css'

const Header = (): JSX.Element => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Header" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>
            <LogoArea />
            <DropDownMenuArea />
            <ThemeSwitchArea />
            <LoginArea />
        </div>
    );
}

export default Header;