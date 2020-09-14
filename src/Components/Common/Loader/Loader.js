import React from 'react';
import LoaderIMG from '../../../assets/Loader.gif'
import './Loader.css'

const Loader = () => {
    return <div className='loader-container'>
        <img src={LoaderIMG} alt="Loading" />
    </div>
}

export default Loader;