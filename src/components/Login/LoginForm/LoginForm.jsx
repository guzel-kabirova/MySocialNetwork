import * as Yup from 'yup';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import classes from './LoginForm.module.css';
import {TextError} from '../TextError/TextError';
import React from 'react';

export const LoginForm = (props) => {
    const initialValues = {
        email: '',
        password: '',
        isRemembered: false,
        captcha: ''
    };
    const onSubmit = (values, onSubmitProps) => {
        const {setSubmitting, setStatus} = onSubmitProps;
        props.login(values, setSubmitting, setStatus);
    };
    // const validate = values => {
    //     const errors = {}
    //     if(!values.email) {
    //         errors.email = 'Обязательное поле!'
    //     } else if (
    //         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    //     ) {
    //         errors.email = 'Электронная почта введена неправильно';
    //     }
    //
    //     if(!values.password) {
    //         errors.password = 'Обязательное поле!'
    //     }
    //
    //     return errors;
    // };
    const validationSchema = Yup.object({
        email: Yup.string().email('Проверьте корректность ввода почты').required('Обязательное поле'),
        password: Yup.string().required('Обязательное поле')
    });

    return <Formik initialValues={initialValues}
                   onSubmit={onSubmit}
                   validationSchema={validationSchema}>
        {
            formik => {
                return (
                    <Form>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="email"
                                   className={classes.label}
                            >
                                Электронная почта
                            </label>
                            <Field type="email"
                                   id="email"
                                   name="email"
                                   className={classes.input}
                            />
                            <ErrorMessage name="email"
                                          component={TextError}/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="password"
                                   className={classes.label}
                            >
                                Пароль
                            </label>
                            <Field type="password"
                                   id="password"
                                   name="password"
                                   className={classes.input}
                            />
                            <ErrorMessage name="password"
                                          component={TextError}/>

                        </div>
                        <div className={classes.isRememberedWrapper}>
                            <Field type="checkbox"
                                   id="isRemembered"
                                   name="isRemembered"
                                   className={classes.checkbox}
                            />
                            <label htmlFor="isRemembered"
                                   className={classes.label}
                            >
                                Запомнить меня
                            </label>
                        </div>
                        {formik.status ? <div className={classes.commonErrorBlock}>{formik.status}</div> : null}
                        {
                            props.captcha
                                ? <div className={classes.captcha}>
                                    <img src={props.captcha} />
                                    <Field name='captcha'
                                           className={classes.inputCaptcha}
                                    />
                                </div>
                                : null
                        }
                        <button type="submit"
                                className={classes.btn}
                                disabled={!formik.isValid || formik.isSubmitting}
                        >Отправить</button>
                    </Form>
                );
            }
        }
    </Formik>;
};