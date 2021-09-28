import DescriptionItem from '../Description-item/Description-item';
import classes from './ProfileDescription.module.css';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

export const ProfileDescription = (props) => {
    const {profile, isOwner, editMode, activateEditMode} = props;
    return (
        <div className={classes.infoText}>
            <div className={classes.topWrapper}>
                <h1 className={classes.name}>{profile.fullName}</h1>
                {isOwner &&
                <button className={classes.btn}
                        onClick={activateEditMode}
                >Редактировать</button>}
            </div>
            <ProfileStatus status={props.status}
                           updateMyStatus={props.updateMyStatus}
                           isOwner={isOwner}
            />
            <div className={classes.wrapper}>
                <div>
                    <span className={classes.sectionName}>Общая информация</span>
                    <DescriptionItem name="Немного обо мне:"
                                     value={profile.aboutMe}/>
                    <DescriptionItem name="Ищу работу:"
                                     value={profile.lookingForAJob ? 'да' : 'нет'}
                    />
                    <DescriptionItem name="Описание статуса:"
                                     value={profile.lookingForAJobDescription}/>
                </div>
                <div>
                    <span className={classes.sectionName}>Контакты</span>
                    {Object.keys(profile.contacts).map(key => <DescriptionItem key={key}
                                                                               name={key}
                                                                               value={profile.contacts[key]}/>)}
                </div>
            </div>
        </div>
    );
};