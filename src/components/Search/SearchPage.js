import React from "react";
import PropTypes from "prop-types";
import ChannelRow from "../ChannelRow";
import VideoRow from "../VideoRow";
import TuneSharpIcon from "@material-ui/icons/TuneSharp";
import "../../css/SearchPage.css";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneSharpIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fi2.cdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F141216183300-simpsons-25-anniversary-image-4-horizontal-large-gallery.jpg&f=1&nofb=1"
        channel="Wild Programmers"
        verified
        subs="660k"
        numOfVideos={389}
        description="You can find awesome programming skills with me today!"
      />
      <hr />
      <VideoRow
        views="1.4 Mil"
        subs="756K"
        description="Some Video Description"
        timestamp="59 Seconds Ago"
        channel="Some Programmers"
        title="Check out this YouTube clone!"
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.iDrqzctqpLbEj9goc58aDgHaEK%26pid%3DApi&f=1"
      />
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
