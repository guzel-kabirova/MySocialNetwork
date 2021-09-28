import classes from './ProfileDescriptionForm.module.css';
import {Field, Form, Formik} from 'formik';

const ContactField = (name) => {
    return (
        <div className={classes.inputWrapper}>
            <label htmlFor={name}
                   className={classes.label}
            >{name}</label>
            <Field type="text" id={name} name={`contacts.` + name}/>
        </div>
    );
};

export const ProfileDescriptionForm = (props) => {
    const initialValues = props.profile;
    const onSubmit = (values) => {
        props.setEditMode(false);
        props.updateProfileDescription(values);
        console.log(values);
    };
    return (
        <div className={classes.infoText}>
            <Formik initialValues={initialValues}
                    onSubmit={onSubmit}>
                <Form>
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
                            <Field as="textarea" id="lookingForAJobDescription" name="lookingForAJobDescription"/>
                        </div>
                    </div>
                    <div className={classes.contacts}>
                        <span className={classes.sectionName}>Контакты</span>
                        {/*{Object.keys(initialValues.contac).map(key => <ContactField key={key}*/}
                        {/*                                                              name={key}/>)}*/}
                        <div className={classes.inputWrapper}>
                            <label htmlFor="facebook"
                                   className={classes.label}
                            >Фейсбук:</label>
                            <Field type="text" id="facebook" name="contacts.facebook"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="website"
                                   className={classes.label}
                            >Сайт:</label>
                            <Field type="text" id="website" name="contacts.website"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="vk"
                                   className={classes.label}
                            >Вконтакте:</label>
                            <Field type="text" id="vk" name="contacts.vk"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="twitter"
                                   className={classes.label}
                            >Твиттер:</label>
                            <Field type="text" id="twitter" name="contacts.twitter"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="instagram"
                                   className={classes.label}
                            >Инстаграм:</label>
                            <Field type="text" id="instagram" name="contacts.instagram"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="youtube"
                                   className={classes.label}
                            >Ютуб:</label>
                            <Field type="text" id="youtube" name="contacts.youtube"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="github"
                                   className={classes.label}
                            >Гитхаб:</label>
                            <Field type="text" id="github" name="contacts.github"/>
                        </div>
                        <div className={classes.inputWrapper}>
                            <label htmlFor="mainLink"
                                   className={classes.label}
                            >Основная ссылка:</label>
                            <Field type="text" id="mainLink" name="contacts.mainLink"/>
                        </div>
                    </div>
                    <button type="submit" className={classes.btn}>Сохранить</button>
                </Form>
            </Formik>
        </div>
    );
};