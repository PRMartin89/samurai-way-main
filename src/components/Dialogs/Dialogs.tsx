import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../Redux/State";

type DialogPropsType={
    state:DialogPageType
}

const Dialogs = (props:DialogPropsType) => {
            let dialogsElements = props.state.dialogs.map( (d) => <DialogItem name={d.name} id={d.id}/>);
            let messageElements = props.state.messages.map( (m) => <Message message={m.message}/>);
      return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
        {dialogsElements}
                    </div>

            <div className={s.messages}>
        {messageElements}</div>
        </div>
     )
}

export default Dialogs;