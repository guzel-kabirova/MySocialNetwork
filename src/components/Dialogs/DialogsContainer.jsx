import React from 'react';
import {addMessage} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getMessages, getNewMessageText, getPersons} from '../../redux/dialogs-selectors';

const mapStateToProps = (state) => {
    return {
        messages: getMessages(state),
        persons: getPersons(state),
        newMessageText: getNewMessageText(state)
    };
};

export default compose(
    connect(mapStateToProps, {addMessage}),
    withAuthRedirect
)(Dialogs);
