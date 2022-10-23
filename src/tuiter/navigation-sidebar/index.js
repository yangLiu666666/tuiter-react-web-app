import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
    // {
    //     active = 'explore'
    // }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-twitter"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-door-fill"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Explore</span>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-bag"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Labs</span>
            </Link>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Notifications</span>
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope d-inline-block"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Messages</span>
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark d-inline-block"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Bookmarks</span>
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list"></i>
                <span className="d-none d-xl-inline d-lg-none p-2">Lists</span>
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill"></i>
                <span className="d-none d-xl-inline d-lg-none p-2"> Profile</span>
            </a>
            <a className={`list-group-item ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots"></i>
                <span className="d-none d-xl-inline d-lg-none p-2"> More</span>
            </a>
        </div>
);

};
export default NavigationSidebar;

