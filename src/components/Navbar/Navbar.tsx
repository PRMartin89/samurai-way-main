import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navbar.module.css';

type NavLinkClassName = {
    isActive: boolean

}

const Navbar = () => {

    const ActivatorLink = ({isActive}: NavLinkClassName) => (isActive ? s.activeLink : undefined);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" className={ActivatorLink}>Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" className={ActivatorLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/MyPosts" className={ActivatorLink}>News</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to="/post" className={ActivatorLink}>Music</NavLink>

            </div>
            <div className={s.item}>
                <NavLink to="/Setting" className={ActivatorLink}>Settings</NavLink>

            </div>
        </nav>
    )
}

export default Navbar