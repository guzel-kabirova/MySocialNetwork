import classes from './Description.module.css';
import editIcon from '../../../svg/edit.svg';
import {useState} from 'react';
import {ProfileDescriptionForm} from './ProfileDescriptionForm/ProfileDescriptionForm';
import {ProfileDescription} from './ProfileDescription/ProfileDescription';

const Description = (props) => {
    const {profile, photo, updateProfilePhoto} = props;
    const [editMode, setEditMode] = useState(false);
    const activateEditMode = () => {
        setEditMode(true);
    };

    const onSetPhotoFile = (e) => {
        if (e.target.files.length) {
            updateProfilePhoto(e.target.files[0]);
        }
    };

    return (
        <div className={classes.info}>
            <div className={classes.avaGroup}>
                <img src={!profile.photos.large ? photo : profile.photos.large}
                     alt="Аватар"
                     className={classes.ava}
                     width="100"
                     height="100"
                />
                {props.isOwner &&
                <div>
                    <label htmlFor="fileInput">
                        <img src={editIcon}
                             height={'24'}
                             width={'24'}
                             className={classes.editIcon}/>
                    </label>
                    <input type={'file'}
                           id="fileInput"
                           className={classes.fileInput}
                           onChange={onSetPhotoFile}
                    />
                </div>
                }

            </div>
                {editMode
                    ? <ProfileDescriptionForm profile={props.profile}
                                              setEditMode={setEditMode}
                                              updateProfileDescription={props.updateProfileDescription}
                                              isOwner={props.isOwner}
                                              editMode={editMode}
                                              activateEditMode={activateEditMode}

                    />
                    : <ProfileDescription profile={props.profile}
                                          isOwner={props.isOwner}
                                          editMode={editMode}
                                          activateEditMode={activateEditMode}
                                          status={props.status}
                                          updateMyStatus={props.updateMyStatus}
                    />
                }

        </div>
    );
};

export default Description;