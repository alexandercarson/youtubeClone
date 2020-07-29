import React from 'react';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ViewComfySharpIcon from '@material-ui/icons/ViewComfySharp';
// import Avatar from '@material-ui/icons/Avatar';
import AccountCircleSharpIcon from '@material-ui/icons/AccountCircleSharp';
import '../css/Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <MenuSharpIcon />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_YouTube_%282005-2011%29.svg/800px-Logo_of_YouTube_%282005-2011%29.svg.png"
          alt="logo"
        />
      </div>

      <div className="header__input">
        <input placeholder="Search" type="text" />
        <SearchSharpIcon className="header_inputButton" />
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icons" />
        <ViewComfySharpIcon className="header__icons" />
        <NotificationsSharpIcon className="header__icons" />
        <AccountCircleSharpIcon className="header__icons" />
      </div>
    </div>
  );
};

export default Header;
