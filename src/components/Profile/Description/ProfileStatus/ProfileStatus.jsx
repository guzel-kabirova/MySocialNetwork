import React, {useEffect, useState} from 'react';
import classes from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateMyStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
            setStatus(props.status);
        }, [props.status]
    );
    return <div className={classes.stateWrapper}>
        {!editMode && <div onDoubleClick={props.isOwner && activateEditMode}>
            {props.status || '----------'}
        </div>}
        {editMode && <input onChange={onStatusChange}
                            onBlur={deactivateEditMode}
                            value={status}
                            autoFocus
        />}
    </div>;
};


export default ProfileStatus;