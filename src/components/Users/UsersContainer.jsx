import React from 'react';
import {getAccessUsers, follow, unfollow} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import {compose} from 'redux';
import {
    getCurrentPage,
    getDisabledUntilStopFetching,
    getIsFetching, getPageSize,
    getTotalUsersCount, getUsers
} from '../../redux/users-selectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getAccessUsers(this.props.currentPage, this.props.pageSize);
    }

    onCurrentPage = (page) => {
        this.props.getAccessUsers(page, this.props.pageSize);
    };

    render() {
        return <Users users={this.props.users}
                      disabledUntilStopFetching={this.props.disabledUntilStopFetching}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      isFetching={this.props.isFetching}
                      currentPage={this.props.currentPage}
                      onCurrentPage={this.onCurrentPage}
                      totalUsersCount={this.props.totalUsersCount}
                      pageSize={this.props.pageSize}
        />;
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        disabledUntilStopFetching: getDisabledUntilStopFetching(state)
    };
};

export default compose(
    connect(mapStateToProps, {getAccessUsers, follow, unfollow}),
)(UsersContainer);