import classes from './Description-item.module.css';

const DescriptionItem = (props) => {
    return (
        <div className={classes.descriptionItem}>
            <span>{props.name}</span>
            <span>{props.value}</span>
        </div>
    );
};

export default DescriptionItem;