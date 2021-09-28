import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {
    getUserProfile,
    getUserStatus,
    updateMyStatus,
    updateProfileDescription,
    updateProfilePhoto
} from '../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {getAuthUserId, getIsAuth} from '../../redux/auth-selectors';
import {getProfile, getStatus} from '../../redux/profile-selectors';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {
    updateProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authUserId;
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return <Profile profile={this.props.profile}
                        status={this.props.status}
                        updateMyStatus={this.props.updateMyStatus}
                        isOwner={!this.props.match.params.userId}
                        updateProfilePhoto={this.props.updateProfilePhoto}
                        updateProfileDescription={this.props.updateProfileDescription}
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
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateMyStatus, updateProfilePhoto, updateProfileDescription}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);