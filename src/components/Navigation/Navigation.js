import React from 'react';
import Chip from '../../images/chip.png';

const Navigation = () => {
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
            <p className="Nav__login"> Sign Out </p>
        </nav>
    )
}

export default Navigation;