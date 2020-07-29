import React from 'react';
import HomeSharpIcon from '@material-ui/icons/HomeSharp';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import SubscriptionsSharpIcon from '@material-ui/icons/SubscriptionsSharp';
import SideBarRow from './SideBarRow';

import '../css/Sidebar.css';

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>SideBar</h2>
      <SideBarRow Icon={HomeSharpIcon} title="Home" />
      <SideBarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsSharpIcon} title="Descrtiption" />
    </div>
  );
};

export default SideBar;
