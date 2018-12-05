import React from 'react';
import Chip from '../../images/chip.png';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    return (
        <nav className="Nav">
            <div className="Nav__logo">
                <div className="Nav__logo-img">
                    <img src={Chip} alt="logo-showing-a-chip"/>
                </div>
                <div className="Nav__logo-text">
                    <span>SmartBrain</span>
                </div>
            </div>
        { isSignedIn === true 
        ?   <p onClick = {() => onRouteChange('signout') } className="Nav__login"> Sign Out </p>
        :   <div>
            <p onClick = {() => onRouteChange('signin') } className="Nav__login"> Sign In </p>
            <p onClick = {() => onRouteChange('register') } className="Nav__login">  Register </p>
            </div>
        }
        </nav>
    )
}

export default Navigation;