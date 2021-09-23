import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateMyStatus} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getAuthUserId, getIsAuth} from '../../redux/auth-selectors';
import {getProfile, getStatus} from '../../redux/profile-selectors';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateMyStatus={this.props.updateMyStatus}
        />;
    }
}

const mapStateToProps = (state) => ({
        profile: getProfile(state),
        authUserId: getAuthUserId(state),
        status: getStatus(state),
        isAuth: getIsAuth(state)
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateMyStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);