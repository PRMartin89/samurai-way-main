import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahA4pAkIyJ-jQ-8neX65XHHePbyqARN65Kw&usqp=CAU'/>
        </header>
    );
}

export default Header;