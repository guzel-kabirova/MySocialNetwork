import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Description from './Description/Description';
import Preloader from '../Preloader/Preloader';
import photo from '../../jpg/male.svg'

const Profile = (props) => {
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div className={classes.background}>
                <Description profile={props.profile}
                             photo={photo}
                             status={props.status}
                             updateMyStatus={props.updateMyStatus}
                             isOwner={props.isOwner}
                             updateProfilePhoto={props.updateProfilePhoto }
                             updateProfileDescription={props.updateProfileDescription}
                />
            </div>
            <MyPostsContainer/>
        </div>
    );
};

export default Profile;