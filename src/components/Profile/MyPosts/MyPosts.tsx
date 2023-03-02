import React, {MouseEventHandler, RefObject} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {PostType} from "../../../Redux/State";

type propsTypeMyPosts={
    posts:Array<PostType>
    messageForNewPost: string
    changeNewTextCallback: (newText: string)=> void
    addPost: (newPost: string) => void
}

const MyPosts = (props:propsTypeMyPosts) => {
    let postsElements =
        props.posts.map((p:PostType) => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement: RefObject<any> = React.createRef()

    let addPost = (e: React.MouseEvent<HTMLElement>) => {
        props.addPost(props.messageForNewPost);

    }
    let onPostChange = () => {
         let text = newPostElement.current.value
         props.changeNewTextCallback(text)
    }

    // @ts-ignore
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={props.messageForNewPost}
                ></textarea>
            </div>
                <div>
                <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}





export default MyPosts;