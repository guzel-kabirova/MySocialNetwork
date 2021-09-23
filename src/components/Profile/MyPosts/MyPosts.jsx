import classes from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import {PostsForm} from './PostForm/PostForm';

const MyPosts = (props) => {
    const postsElements = [...props.posts]
        .reverse()
        .map(post => <Post name={post.name}
                           date={post.date}
                           message={post.postText}
                           like={post.likeCount}
                           comment={post.comment}
                           key={post.id}/>);
    return (
        <div className={classes.wrapper}>
            <PostsForm addPost={props.addPost}/>
            <div>
                <h2 className={classes.title}>Мои посты</h2>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;