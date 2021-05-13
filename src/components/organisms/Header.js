import React from 'react';
import {useHistory,Link} from 'react-router-dom';
import {Cookies, useCookies} from 'react-cookie';
import * as Setting from './../../components/constants/setting' ;
import * as ApiCaller from './../../helpers/index';
function Header(props) {
    let history = useHistory();
    const [cookies, removeCookie]= useCookies([""]);
    const token = cookies.access_token;
    function logout()
    {  

        if(window.confirm("Do you want to logout?")){
            try
            {
                ApiCaller.handleGet("api/auuth/logout",token)
                .then((res) => {
                    removeCookie('access_token');
                    removeCookie('user_info');
                    history.push('/login');
                })
                .catch((err) => {
                    console.log(err);
                });
            }
            catch(err)
            {
                alert(err);
            };
        }
    }
    return (
        <div>
            <header className="c-header c-header-light c-header-fixed c-header-with-subheader">
                        <button className="c-header-toggler c-class-toggler d-lg-none mfe-auto" type="button" data-target="#sidebar" data-class="c-sidebar-show">
                            <svg className="c-icon c-icon-lg">
                                <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
                            </svg>
                        </button><a className="c-header-brand d-lg-none" href="#">
                            <svg width={118} height={46} alt="CoreUI Logo">
                                <use xlinkHref="assets/brand/coreui.svg#full" />
                            </svg></a>
                        <button className="c-header-toggler c-class-toggler mfs-3 d-md-down-none" type="button" data-target="#sidebar" data-class="c-sidebar-lg-show" responsive="true">
                            <svg className="c-icon c-icon-lg">
                                <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-menu" />
                            </svg>
                        </button>
                        <ul className="c-header-nav d-md-down-none">
                            <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Dashboard</a></li>
                            <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Users</a></li>
                            <li className="c-header-nav-item px-3"><a className="c-header-nav-link" href="#">Settings</a></li>
                        </ul>
                        <ul className="c-header-nav ml-auto mr-4">
                            <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                                <svg className="c-icon">
                                    <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-bell" />
                                </svg></a></li>
                            <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                                <svg className="c-icon">
                                    <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-list-rich" />
                                </svg></a></li>
                            <li className="c-header-nav-item d-md-down-none mx-2"><a className="c-header-nav-link" href="#">
                                <svg className="c-icon">
                                    <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                                </svg></a></li>
                            <li className="c-header-nav-item dropdown"><a className="c-header-nav-link" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                <div className="c-avatar" onClick={logout}> <p>{cookies.name_user}</p></div>
                            </a>
                                <div className="dropdown-menu dropdown-menu-right pt-0">
                                    <div className="dropdown-header bg-light py-2"><strong>Account</strong></div><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-bell" />
                                        </svg> Updates<span className="badge badge-info ml-auto">42</span></a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-envelope-open" />
                                        </svg> Messages<span className="badge badge-success ml-auto">42</span></a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-task" />
                                        </svg> Tasks<span className="badge badge-danger ml-auto">42</span></a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-comment-square" />
                                        </svg> Comments<span className="badge badge-warning ml-auto">42</span></a>
                                    <div className="dropdown-header bg-light py-2"><strong>Settings</strong></div><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-user" />
                                        </svg> Profile</a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-settings" />
                                        </svg> Settings</a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-credit-card" />
                                        </svg> Payments<span className="badge badge-secondary ml-auto">42</span></a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-file" />
                                        </svg> Projects<span className="badge badge-primary ml-auto">42</span></a>
                                    <div className="dropdown-divider" /><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-lock-locked" />
                                        </svg> Lock Account</a><a className="dropdown-item" href="#">
                                        <svg className="c-icon mr-2">
                                            <use xlinkHref="node_modules/@coreui/icons/sprites/free.svg#cil-account-logout" />
                                        </svg> Logout</a>
                                </div>
                            </li>
                        </ul>
                        <div className="c-subheader px-3">
                            {/* Breadcrumb*/}
                            <ol className="breadcrumb border-0 m-0">
                                <li className="breadcrumb-item">Home</li>
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                                {/* Breadcrumb Menu*/}
                            </ol>
                        </div>
                    </header>
        </div>
    );
}

export default Header;