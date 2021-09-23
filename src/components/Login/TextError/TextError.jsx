import classes from './TextError.module.css'

export const TextError = (props) => {
    return <div className={classes.error}>
        {props.children}
    </div>
}