import React from 'react';
import { MenuIcon} from '@shopify/polaris-icons';
import { Icon } from '@shopify/polaris';

import './Navbar.css';


const Navbar= () => {


   
    return (
        <div className="navbar-container">
            <div className="container">
                <div className='menu-icon'>
                    <div
                        style={{ height: 'auto', width: 'auto' }}
                      
                    >
                        <Icon
                            source={MenuIcon}
                            tone="base"
                        />
                    </div>
                </div>
                <div className="items-link">
                    <ul className="left-nav-links">
                        <li className="nav-link-item">
                            <a href="/" className="nav-link active">Home</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">Orders</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">Integrations</a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">Tracking Page
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71967 8.46967C6.01256 8.17678 6.48744 8.17678 6.78033 8.46967L10.25 11.9393L13.7197 8.46967C14.0126 8.17678 14.4874 8.17678 14.7803 8.46967C15.0732 8.76256 15.0732 9.23744 14.7803 9.53033L10.7803 13.5303C10.4874 13.8232 10.0126 13.8232 9.71967 13.5303L5.71967 9.53033C5.42678 9.23744 5.42678 8.76256 5.71967 8.46967Z" fill="/4A4A4A" />
                                </svg>

                            </a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">Partner with Us</a>
                        </li>
                    </ul>
                    <ul className="right-nav-links">
                        <li className="nav-link-item">
                        <img src='/images/Search.png'  alt='search'/>

                            <input type="text" placeholder='search' />
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">
                            <img src='/images/Icon3.png' alt='icon3' />

                                Account
                            </a>
                        </li>
                        <li className="nav-link-item">
                            <a href="/" className="nav-link">
                              <img src='/images/Settings.png' alt='settings' />
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Navbar;
