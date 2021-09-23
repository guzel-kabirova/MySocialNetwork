import classes from './Message.module.css';

const Message = (props) => {
    return (
        <div className={classes.wrapper}>
            <p>{props.text}</p>
            <div>{props.date}</div>
        </div>
    );
}

export default Message;