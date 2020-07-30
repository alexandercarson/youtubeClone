import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuSharpIcon from '@material-ui/icons/MenuSharp';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import VideoCallSharpIcon from '@material-ui/icons/VideoCallSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import ViewComfySharpIcon from '@material-ui/icons/ViewComfySharp';
import Avatar from '@material-ui/core/Avatar';
import '../css/Header.css';

const Header = () => {
  const [searchInput, setsSearchInput] = useState('');

  const handleSearch = (e) => {
    const { value } = e.target;
    setsSearchInput(value);
  };

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
        <input
          onChange={handleSearch}
          value={searchInput}
          placeholder="Search"
          type="text"
        />
        <Link to={`/search/${searchInput}`}>
          <SearchSharpIcon className="header_inputButton" />
        </Link>
      </div>

      <div className="header__icons">
        <VideoCallSharpIcon className="header__icons" />
        <ViewComfySharpIcon className="header__icons" />
        <NotificationsSharpIcon className="header__icons" />
        <Avatar className="header__icons" />
      </div>
    </div>
  );
};

export default Header;
