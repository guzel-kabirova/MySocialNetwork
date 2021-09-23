import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import {Formik, Form, Field} from 'formik';
import sendIcon from '../../svg/send.svg'

const MessageSendForm = (props) => {
    const initialValues = {
        newMessage: ''
    }
    const onSubmit = (values, onSubmitProps) => {
        props.addMessage(values.newMessage)
        onSubmitProps.resetForm();
    }
    return <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
    <div className={classes.inputBtn}>
        <Field placeholder="Напишите сообщение..."
               className={classes.textarea}
               name='newMessage'
        />

        <button className={classes.btn} type='submit'>
            <img src={sendIcon} width={'16'} height={'16'}/>
        </button>
    </div>
        </Form>
    </Formik>
}

const Dialogs = (props) => {
    const messagesElement = props.messages.map(message => <Message text={message.text}
                                                                   date={message.date}
                                                                   key={message.id}/>);
    const personsElement = props.persons.map(person => <DialogItem name={person.name}
                                                                   date={person.date}
                                                                   text={person.text}
                                                                   id={person.id}
                                                                   key={person.id}/>);
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsMessages}>
                <div className={classes.messagesWrapper}>
                    {messagesElement}
                </div>
                <MessageSendForm addMessage={props.addMessage}/>
            </div>
            <div className={classes.dialogsPersons}>
                <div className={classes.input}>
                    <input type="search"/>
                </div>
                {personsElement}
            </div>
        </div>
    );
};

export default Dialogs;