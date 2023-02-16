import Message from "../components/Dialogs/Message/Message";

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
export default state