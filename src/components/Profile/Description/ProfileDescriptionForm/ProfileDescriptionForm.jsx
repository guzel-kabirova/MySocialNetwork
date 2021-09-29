import classes from './ProfileDescriptionForm.module.css';
import {Field, Form, Formik} from 'formik';
import React from 'react';

const ContactField = (props) => {
    return (
        <div className={classes.inputWrapper}>
            <label htmlFor={props.name}
                   className={classes.label}
            >{props.name}</label>
            <Field type="text" id={props.name} name={`contacts.` + props.name}/>
        </div>
    );
};

export const ProfileDescriptionForm = (props) => {
    const initialValues = props.profile;
    const onSubmit = (values, onSubmitProps) => {
        const {setSubmitting, setStatus} = onSubmitProps;
        const promise = props.updateProfileDescription(values, setSubmitting, setStatus);
        promise.then(() => props.setEditMode(false));
    };
    return (
        <div className={classes.infoText}>
            <Formik initialValues={initialValues}
                    onSubmit={onSubmit}>
                {
                    formik => {
                        return (<Form>
                            <div className={classes.inputWrapper}>
                                <label htmlFor="fullName"
                                       className={classes.sectionName}
                                >Имя:</label>
                                <Field type="text"
                                       id="fullName"
                                       name="fullName"
                                       className={classes.input}
                                />
                            </div>
                            <div className={classes.about}>
                                <span className={classes.sectionName}>Общая информация</span>
                                <div className={classes.inputWrapper}>
                                    <label htmlFor="aboutMe"
                                           className={classes.label}
                                    >Немного обо мне:</label>
                                    <Field as="textarea"
                                           id="aboutMe"
                                           name="aboutMe"
                                    />
                                </div>
                                <div className={classes.inputWrapper}>
                                    <label htmlFor="lookingForAJob"
                                           className={classes.label}
                                    >Ищу работу:</label>
                                    <div className={classes.checkboxWrapper}>
                                        <Field type="checkbox" id="lookingForAJob" name="lookingForAJob"
                                               className={classes.checkbox}/>
                                    </div>
                                </div>
                                <div className={classes.inputWrapper}>
                                    <label htmlFor="lookingForAJobDescription"
                                           className={classes.label}
                                    >Описание статуса:</label>
                                    <Field as="textarea" id="lookingForAJobDescription"
                                           name="lookingForAJobDescription"/>
                                </div>
                            </div>
                            <div className={classes.contacts}>
                                <span className={classes.sectionName}>Контакты</span>
                                {
                                    Object.keys(props.profile.contacts).map(key => {
                                        return (
                                            <ContactField key={key}
                                                          name={key}/>);
                                    })
                                }
                            </div>
                            {formik.status && <div className={classes.commonErrorBlock}>{formik.status}</div>}
                            <button type="submit" className={classes.btn}>Сохранить</button>
                        </Form>);
                    }
                }
            </Formik>
        </div>
    );
};