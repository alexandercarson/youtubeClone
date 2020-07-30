import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import VerifiedIcon from "@material-ui/icons/CheckCircleOutlineSharp";
import "../css/ChannelRow.css";

const ChannelRow = ({
  image,
  channel,
  verified,
  subs,
  numOfVideos,
  description,
}) => {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div className="channelRow__text">
        <h4>
          {channel}
          {verified && <VerifiedIcon />}
        </h4>
        <p>
          {subs} subscribers · {numOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
};

ChannelRow.propTypes = {};
ChannelRow.defaultProps = {
  verified: true,
};

export default ChannelRow;
