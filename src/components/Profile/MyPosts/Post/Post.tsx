import React from 'react';
import s from './Post.module.css';

type propsType={
    message:string|undefined
    likesCount:number|undefined
}

const Post = (props: propsType) => {
    return (
        <div className={s.item}>
            <img src='http://rusnat.com/wp-content/uploads/2014/04/subnordidf.jpg'></img>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}


export default Post;