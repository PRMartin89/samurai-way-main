import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import { ProfilePagesType } from '../../Redux/State';

type typePropsProfile={
    state:ProfilePagesType
}

const Profile = (props:typePropsProfile)  => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}


export default Profile;