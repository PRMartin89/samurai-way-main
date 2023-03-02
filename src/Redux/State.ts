import Message from "../components/Dialogs/Message/Message";
import {stat} from "fs";
import {rerenderEntireTree} from "../index";
type TypeOnChange = () => void;

type MessageType = {
    id:number
    message:string
}
export type DialogType = {
    id: number
    name: string
}
export type PostType = {
    id:number
    name?:string
    likesCount:number
    message?:string
}
export type ProfilePagesType = {
    messageForNewPost: string
    posts: Array<PostType>
}
export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
// type SidebarType = {
//     profilePage: ProfilePagesType
//     dialogPage: DialogPageType
//     sidebar: SidebarType
// }
export type RootStateType = {
    profilePage: ProfilePagesType
    dialogPage: DialogPageType
    sidebar: any
}


let state: RootStateType = {
    profilePage:{
        messageForNewPost: "",
        posts:[
                {id: 1, message: 'Привет, как ты?', likesCount: 12},
                {id: 2, message: 'Это моя первая публикация', likesCount: 34}
            ],
        },
    dialogPage:{
            dialogs:[
            {id: 1, name: 'Martin'},
            {id: 2, name: 'Patrick'},
            {id: 3, name: 'Ilya'},
            {id: 4, name: 'Sledak'},
            {id: 5, name: 'Sasha'},
            {id: 6, name: 'Mark'}
        ],
            messages:[
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra'},
            {id: 3, message: 'yo'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ]
    },
    sidebar: {}
}

let onChange: TypeOnChange

export const subscribe = (callback: () => void) => {
    onChange = callback
}

export const addPost = (postText: string) => {
    const newPost: PostType = {
        id: new Date().getTime(),
        message: postText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    onChange()
}

export const changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    onChange()
}

export default state