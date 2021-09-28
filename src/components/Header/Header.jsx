import classes from './Header.module.css';
import logo from '../../svg/logo.svg';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    const {login, isAuth, logout} = props;
    return (
        <header className={classes.header}>
            <img src={logo} width="48px" height="48px" alt="Логотип соц сети"/>
            <div className={classes.flexSpacer}></div>
            {
                isAuth
                    ? <div className={classes.user}>
                        <NavLink to='/profile' className={classes.authName}>{login}</NavLink>
                    <span className={classes.auth} onClick={() => logout()}>Выход</span>
                </div>
                    : <NavLink to={'/login'} className={classes.auth}>Вход</NavLink>
            }
        </header>
    );
};

export default Header;