import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuth} from '../redux/auth-selectors';

const mapStateToProps = (state) => {
    return {
            isAuth: getIsAuth(state)
        }
};

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
      render() {
          if (!this.props.isAuth) return <Redirect to='/login'/>;
          return <Component {...this.props}/>;
      }
    }
    const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}