import React from 'react';
import { Link } from 'react-router-dom';

const Button =()=>{
return (
    <>
    {/* <button className='nav-links'>Log Out</button> */}
    <Link to='/Auth' className="nav-links"> Log Out</Link>
    </>
)
}
 export default Button;