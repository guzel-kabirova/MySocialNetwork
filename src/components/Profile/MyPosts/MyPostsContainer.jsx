import React from 'react';
import {addPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {getNewPostText, getPosts} from '../../../redux/profile-selectors';

const mapStateToProps = (state) => {
    return {
        posts: getPosts(state),
        newPostText: getNewPostText(state)
    };
};

export default connect(mapStateToProps, {addPost})(MyPosts);