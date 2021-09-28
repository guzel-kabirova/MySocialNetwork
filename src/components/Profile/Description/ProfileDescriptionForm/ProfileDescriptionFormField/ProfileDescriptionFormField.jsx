import classes from './ProfileDescriptionFormField.module.css';
import {Field} from 'formik';

const ProfileDescriptionFormField = () => {
    return(
        <div className={classes.inputWrapper}>
            <label htmlFor="aboutMe"
                   className={classes.label}
            >Немного обо мне:</label>
            <Field as="textarea"
                   id="aboutMe"
                   name="aboutMe"
            />
        </div>
    )
}