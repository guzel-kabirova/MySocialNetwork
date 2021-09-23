import classes from './Navbar-item.module.css';
import {NavLink} from 'react-router-dom';

const NavbarItem = (props) => {
    return (
        <div className={classes.item}>
            <NavLink to={props.linkto} activeClassName={classes.activeLink}>
                    <img src={props.icon} className={classes.icon}/>
                {props.name}
            </NavLink>
        </div>
    );
};

export default NavbarItem;