import React from 'react';
import { ThemeContext } from '../context/ThemeContext';



const Navbar = () => {

    const {isLightTheme, light, dark} = React.useContext(ThemeContext);
    console.log(isLightTheme);
    console.log(light);
    console.log(dark);

    const theme = isLightTheme ? light : dark;


    return(
        <nav style={{background:theme.ui, color:theme.syntax}}>
            <h1>Library</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
            </ul>
        </nav>
    )
}

export default Navbar;