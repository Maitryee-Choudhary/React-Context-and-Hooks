import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle  = () => {
    const {toggleTheme} = React.useContext(ThemeContext);
    console.log(toggleTheme);

    return(
        <button onClick={toggleTheme}>Toogle the theme</button>
    )
}

export default ThemeToggle;