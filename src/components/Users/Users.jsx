import classes from './Users.module.css';
import photo from '../../jpg/male.svg';
import React from 'react';
import Pagination from './Pagination/Pagination';
import Preloader from '../Preloader/Preloader';
import {NavLink} from 'react-router-dom';


const Users = (props) => {
    const {
        users,
        disabledUntilStopFetching,
        follow,
        unfollow,
        isFetching
    } = props;

    const btn = (user) => {
        const style = user.followed ? 'btnUnfollow' : 'btnFollow';
        const clickCb = user.followed ? () => unfollow(user.id) : () => follow(user.id);
        const btnText = user.followed ? 'Отписаться' : 'Подписаться';
        return <button className={`${classes.btn} ${classes[style]}`}
                       onClick={clickCb}
                       disabled={disabledUntilStopFetching.some(id => id === user.id)}
        >
            {btnText}
        </button>
    };

    return (
        <div className={classes.container}>
            <h1 className={classes.pageName}>Все пользователи</h1>
            {
                isFetching ? <Preloader/> :
                    users.map(user => <div className={classes.personCard} key={user.id}>
                        <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small : photo}
                                 className={classes.photo}
                                 width="90"
                                 height="90"/>
                        </NavLink>
                        <div className={classes.personCardInfo}>
                            <div>
                                <div className={classes.wrapperTop}>
                                    <h2 className={classes.personCardName}>{user.name}</h2>
                                </div>
                                <div className={classes.table}>
                                    <p className={classes.status}>{user.status}</p>
                                </div>
                            </div>

                            {btn(user)}
                        </div>
                    </div>)

            }
            <Pagination totalItemsCount={props.totalUsersCount}
                        pageSize={props.pageSize}
                        currentPage={props.currentPage}
                        onCurrentPage={props.onCurrentPage}
            />
        </div>
    );
};

export default Users;