import React from "react";
import PropTypes from "prop-types";

import "../../css/SideBarRow.css";

const SideBarRow = ({ selected, Icon, title }) => {
  return (
    <div className={`sideBarRow ${selected && "selected"}`}>
      <Icon className="sideBarRow__icon" />
      <h2 className="sideBarRow__title">{title}</h2>
    </div>
  );
};

SideBarRow.propTypes = {
  selected: PropTypes.bool,
  Icon: PropTypes.shape({}).isRequired,
  title: PropTypes.string.isRequired,
};

SideBarRow.defaultProps = {
  selected: false,
};

export default SideBarRow;
