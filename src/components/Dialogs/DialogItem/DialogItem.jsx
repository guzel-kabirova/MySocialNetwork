import classes from './DialogItem.module.css';
import photo from '../../../jpg/profile-photo.jpg';
import {NavLink} from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <NavLink to={'/dialogs/' + props.id}>
            <div className={classes.wrapper}>
                <img src={photo} width="50" height="50" alt="Аватар пользователя" className={classes.ava}/>
                <div className={classes.message}>
                    <div className={classes.messageInfo}>
                        <div>{props.name}</div>
                        <div>{props.date}</div>
                    </div>
                    <p className={classes.messageText}>{props.text}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default DialogItem;