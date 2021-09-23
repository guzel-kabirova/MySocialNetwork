import classes from './Description.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import DescriptionItem from './Description-item/Description-item';

const Description = (props) => {
    const {profile, photo} = props;
    return (
        <div className={classes.info}>
            <img src={!profile.photos.large ? photo : profile.photos.large}
                 alt='Аватар'
                 className={classes.ava}
                 width='100'
                 height='100'/>
            <div>
                <h1 className={classes.name}>{profile.fullName}</h1>
                <ProfileStatus status={props.status}
                               updateMyStatus={props.updateMyStatus}
                />
                <div className={classes.wrapper}>
                    <div>
                        <DescriptionItem name='Немного обо мне:'
                                         value={profile.aboutMe}/>
                        <DescriptionItem name='Статус работы:'
                                         value={profile.lookingForAJob ? 'в поисках работы' : 'не ищу работу'}
                                         />
                        <DescriptionItem name='Описание статуса:'
                                         value={profile.lookingForAJobDescription}/>
                    </div>
                    <div>
                        <DescriptionItem name='Фейсбук:'
                                         value={profile.contacts.facebook}/>
                        <DescriptionItem name='Сайт:'
                                         value={profile.contacts.website}/>
                        <DescriptionItem name='Вконтакте:'
                                         value={profile.contacts.vk}/>
                        <DescriptionItem name='Твиттер:'
                                         value={profile.contacts.twitter}/>
                        <DescriptionItem name='Инстаграм:'
                                         value={profile.contacts.instagram}/>
                        <DescriptionItem name='Ютуб:'
                                         value={profile.contacts.youtube}/>
                        <DescriptionItem name='Гитхаб:'
                                         value={profile.contacts.github}/>
                        <DescriptionItem name='Основная ссылка:'
                                         value={profile.contacts.mainLink}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Description;