import React, {ChangeEvent} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {Routes, Route} from 'react-router-dom';
import state, {changeNewText, PostType, addPost} from "./Redux/State";

type appPropsType = {}

const App = (props: appPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs state={state.dialogPage}/>}/>
                    <Route path='/profile' element={
                        <Profile
                            state={state.profilePage}
                            addPostCallback={addPost}
                            messageForNewPost={state.profilePage.messageForNewPost}
                            changeNewTextCallback={changeNewText}
                        />}/>
                </Routes>
            </div>
        </div>)
}

// type MessageType = {
//     message: string
//     posts: Array<PostType>
//     addPostCallback: (postText: string) => void
//     changeNewTextCallback: (newText: string) => void
// }

// function HelloMessage(props: MessageType) {
//     const addPost = () => {
//         props.addPostCallback(props.message)
//     }
//     const newTextChangeHandler =
//         (e: ChangeEvent<HTMLTextAreaElement>) => {
//             props.changeNewTextCallback(e.currentTarget.value)
//         }
//     return (
//         <div>
//             {props.message}
//             <hr/>
//             {props.posts.map(p => <div key={p.id}><b>{p.message}</b></div>)}
//             <hr/>
//             <textarea value={props.message} onChange={newTextChangeHandler}></textarea>
//             <button onClick={addPost}>add post</button>
//         </div>
//     )
// }
//
// const ByeMessage: React.FC<MessageType> = (props) => {
//     return <h1>{props.message}</h1>
// }

export default App;

