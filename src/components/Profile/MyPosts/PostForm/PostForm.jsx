import {Field, Form, Formik} from 'formik';
import classes from './PostForm.module.css';
import React from 'react';

export const PostsForm = (props) => {
    const initialValues = {
        newPostText: ''
    };
    const onSubmit = (values, onSubmitProps) => {
        props.addPost(values.newPostText);
        onSubmitProps.resetForm();
    };

    return <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
            <div className={classes.inputBtn}>
                <Field as='textarea'
                       name='newPostText'
                       placeholder="Расскажите, что нового?"
                       className={classes.textarea}/>
                <button className={classes.btn} type='submit'>
                    Отправить
                </button>
            </div>
        </Form>
    </Formik>
};