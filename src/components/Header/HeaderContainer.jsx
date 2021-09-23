import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {compose} from 'redux';
import {getIsAuth, getLogin} from '../../redux/auth-selectors';

class HeaderContainer extends React.Component {
    render() {
        return (
            <Header login={this.props.login}
                    isAuth={this.props.isAuth}
                    logout={this.props.logout}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    login: getLogin(state),
    isAuth: getIsAuth(state),
});

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer)