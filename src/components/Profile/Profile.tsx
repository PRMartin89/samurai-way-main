import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { ProfilePagesType } from '../../Redux/State';

type typePropsProfile={
    state:ProfilePagesType
    addPostCallback: (postText: string) => void
    changeNewTextCallback: (newText: string) => void
    messageForNewPost: string
}

const Profile = (props:typePropsProfile)  => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                posts={props.state.posts}
                messageForNewPost={props.messageForNewPost}
                changeNewTextCallback={props.changeNewTextCallback}
                addPost={props.addPostCallback}/>
        </div>
    )
}


export default Profile;