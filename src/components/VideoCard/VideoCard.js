import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';

import '../css/VideoCard.css';

const VideoCard = ({
  image,
  title,
  timestamp,
  views,
  channel,
  channelImage,
}) => {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt="" />
      <div className="videoCard__info">
        <Avatar
          className="videoCard__avatar"
          alt={channel}
          src={channelImage}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} · {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  timestamp: PropTypes.string,
  views: PropTypes.string,
  channel: PropTypes.string,
  channelImage: PropTypes.string,
};

export default VideoCard;
