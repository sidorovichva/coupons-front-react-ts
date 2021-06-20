import React, {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext";

const ThemeSwitch = () => {

    const { toggleTheme } = useContext(ThemeContext);

    return(
        <button className="ThemeSwitch" onClick={toggleTheme}>
            Theme
        </button>
    );
}

export default ThemeSwitch;