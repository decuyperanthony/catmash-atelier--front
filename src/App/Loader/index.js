
import React from 'react';

import './styles.css';

import logo from '../../assets/img/catmashbig.png';

const Loader = () => {
    return (
        <img id="loader" className="rotating" src={logo} alt="logo" />
    )
};

export default Loader;