import React, {useContext} from 'react';
import {ThemeContext} from "../contexts/ThemeContext";
import './Footer.css'

interface Props {

}

const Footer: React.FC<Props> = () => {

    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const currentTheme = isLightTheme ? light : dark;

    return (
        <div className="Footer" style={{backgroundColor: currentTheme.bg, color: currentTheme.syntax}}>

        </div>
    );
}

export default Footer;