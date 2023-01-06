import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

const BookingList = () =>{

    const {isLightTheme, light, dark} = React.useContext(ThemeContext);
    console.log(isLightTheme);
    console.log(light);
    console.log(dark);

    const theme = isLightTheme ? light : dark;

    return(
        <div className='book-list' style={{background:theme.bg, color:theme.syntax}}>
            <ul>
                <li style={{background:theme.ui}}>Book1</li>
                <li style={{background:theme.ui}}>Book2</li>
                <li style={{background:theme.ui}}>Book3</li>
            </ul>
        </div>
    )
}

export default BookingList;