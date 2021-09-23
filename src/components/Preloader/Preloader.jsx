import React from 'react';
import preloader from '../../svg/preloader.svg';
import classes from './Preloader.module.css';

const Preloader = () => {
    return <div className={classes.wrapperImg}>
        <img src={preloader} height={'64'} width={'64'} alt={'Preloader'}/>
    </div>;
};

export default Preloader;