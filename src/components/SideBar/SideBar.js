import React from "react";
import HomeSharpIcon from "@material-ui/icons/HomeSharp";
import WhatshotSharpIcon from "@material-ui/icons/WhatshotSharp";
import SubscriptionsSharpIcon from "@material-ui/icons/SubscriptionsSharp";
import VideoLibrarySharpIcon from "@material-ui/icons/VideoLibrarySharp";
import HistorySharpIcon from "@material-ui/icons/HistorySharp";
import OndemandVideoSharpIcon from "@material-ui/icons/OndemandVideoSharp";
import WatchLaterSharpIcon from "@material-ui/icons/WatchLaterSharp";
import ThumbUpSharpIcon from "@material-ui/icons/ThumbUpSharp";
import ExpandMoreSharpIcon from "@material-ui/icons/ExpandMoreSharp";
import SideBarRow from "../SideBar/SideBarRow";
import "../../css/Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>SideBar</h2>
      <SideBarRow selected Icon={HomeSharpIcon} title="Home" />
      <SideBarRow Icon={WhatshotSharpIcon} title="Trending" />
      <SideBarRow Icon={SubscriptionsSharpIcon} title="Descrtiption" />
      <hr />
      <SideBarRow Icon={VideoLibrarySharpIcon} title="Library" />
      <SideBarRow Icon={HistorySharpIcon} title="History" />
      <SideBarRow Icon={OndemandVideoSharpIcon} title="Your Videos" />
      <SideBarRow Icon={WatchLaterSharpIcon} title="Watch Later" />
      <SideBarRow Icon={ThumbUpSharpIcon} title="Liked Videos" />
      <SideBarRow Icon={ExpandMoreSharpIcon} title="Show More" />
      <hr />
    </div>
  );
};

export default SideBar;
