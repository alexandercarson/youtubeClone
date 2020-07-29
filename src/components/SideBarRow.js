import React from 'react';

import '../css/SideBarRow.css';

const SideBarRow = ({ Icon, title }) => {
  return (
    <div className="sideBarRow">
      <Icon className="sideBarRow__icon" />
      <h2 className="sideBarRow__title">{title}</h2>
    </div>
  );
};

export default SideBarRow;
