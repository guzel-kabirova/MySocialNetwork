import classes from './Post.module.css';
import photo from '../../../../jpg/profile-photo.jpg';

const Post = (props) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.person}>
                <img src={photo}
                     alt="Аватар пользователя"
                     className={classes.ava}/>
                <div className={classes.text}>
                    <div className={classes.name}>{props.name}</div>
                    <div className={classes.date}>{props.date}</div>
                </div>
            </div>
            <div className={classes.text}>
                <p>{props.message}</p>
                <div className={classes.icons}>
                <div className={classes.peopleAction}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.7999 2.38191C14.0145 1.49076 12.925 1 11.732 1C10.0542 1 8.99201 2.00205 8.39638 2.8427C8.24184 3.06083 8.11038 3.27956 8.00001 3.48539C7.88963 3.27956 7.7582 3.06083 7.60363 2.8427C7.008 2.00205 5.94577 1 4.26796 1C3.07502 1 1.98548 1.49079 1.20007 2.38194C0.450923 3.23204 0.0383148 4.37056 0.0383148 5.58777C0.0383148 6.91274 0.555607 8.14509 1.66626 9.46598C2.65889 10.6466 4.08693 11.8634 5.74057 13.2726C6.35676 13.7977 6.99397 14.3407 7.67236 14.9342L7.69273 14.9521C7.78069 15.0291 7.89035 15.0676 8.00001 15.0676C8.10967 15.0676 8.21933 15.0291 8.30728 14.9521L8.32765 14.9342C9.00604 14.3407 9.64326 13.7977 10.2595 13.2725C11.9131 11.8635 13.3411 10.6466 14.3337 9.46598C15.4444 8.14506 15.9617 6.91274 15.9617 5.58777C15.9617 4.37056 15.5491 3.23204 14.7999 2.38191ZM9.65433 12.5624C9.12313 13.0151 8.57645 13.4809 8.00001 13.982C7.42359 13.481 6.87688 13.0151 6.34559 12.5624C3.10932 9.8046 0.971326 7.98271 0.971326 5.58777C0.971326 4.59784 1.30114 3.67839 1.90004 2.99882C2.50582 2.31153 3.34674 1.93301 4.26796 1.93301C5.54709 1.93301 6.37396 2.72103 6.84233 3.3821C7.26246 3.975 7.48169 4.57268 7.55645 4.80211C7.619 4.99416 7.79804 5.12412 8.00001 5.12412C8.20197 5.12412 8.38102 4.99416 8.44356 4.80211C8.51832 4.57268 8.73755 3.975 9.15769 3.38207C9.62606 2.72103 10.4529 1.93301 11.732 1.93301C12.6533 1.93301 13.4942 2.31153 14.0999 2.99882C14.6989 3.67839 15.0287 4.59784 15.0287 5.58777C15.0287 7.98271 12.8907 9.8046 9.65433 12.5624Z"
                            fill="#150E08"/>
                    </svg>
                    <span>{props.like}</span>
                </div>
                <div className={classes.peopleAction}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.5312 1H0.46875C0.209875 1 0 1.18364 0 1.41016V11.9539C0 12.1804 0.209875 12.3641 0.46875 12.3641H3.0125V14.5898C3.0125 14.7557 3.12672 14.9053 3.30188 14.9688C3.35988 14.9898 3.42078 15 3.48116 15C3.60316 15 3.72306 14.9583 3.81272 14.8799L6.68791 12.3641H15.5312C15.7901 12.3641 16 12.1804 16 11.9539V1.41016C16 1.18364 15.7901 1 15.5312 1ZM15.0625 11.5438H6.49375C6.36944 11.5438 6.25019 11.587 6.16231 11.6639L3.95003 13.5996V11.9539C3.95003 11.7274 3.74016 11.5438 3.48128 11.5438H0.9375V1.82031H15.0625V11.5438Z"
                            fill="#150E08"/>
                    </svg>
                    <span>{props.comment}</span>
                </div>
                </div>
            </div>
        </div>

    );
};

export default Post;