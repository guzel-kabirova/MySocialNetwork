import classes from './Login.module.css';
import React from 'react';
import {LoginForm} from './LoginForm/LoginForm';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {Redirect} from 'react-router-dom';
import {getCaptcha, getIsAuth} from '../../redux/auth-selectors';



const Login = (props) => {
    if(props.isAuth) return <Redirect to='/profile' />

    return <div className={classes.container}>
        <h1 className={classes.pageName}>Вход</h1>
        <LoginForm login={props.login} captcha={props.captcha}/>
    </div>;
};

const mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    captcha: getCaptcha(state)
})

export default connect(mapStateToProps, {login})(Login);