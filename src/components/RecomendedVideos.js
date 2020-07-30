import React from 'react';
import VideoCard from './VideoCard';
import '../css/RecomendedVideos.css';

//

const RecomendedVideos = () => {
  return (
    <div className="recomended__videos">
      <h2 className="recomendedVideos__text">Recomended</h2>
      <div className="recomendedVideos__videos">
        <VideoCard
          title="Become a web dev"
          views="2.3M Views"
          timestamp="3 Days Ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Sh7HGXn6MEAjN3UTnAIYsgHaEK%26pid%3DApi&f=1"
          channel="A Cool Channel"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/2560px-YouTube_Kids_LogoVector.svg.png"
        />
        <VideoCard
          title="Become a web dev"
          views="2.3M Views"
          timestamp="3 Days Ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Sh7HGXn6MEAjN3UTnAIYsgHaEK%26pid%3DApi&f=1"
          channel="A Cool Channel"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/2560px-YouTube_Kids_LogoVector.svg.png"
        />{' '}
        <VideoCard
          title="Become a web dev"
          views="2.3M Views"
          timestamp="3 Days Ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Sh7HGXn6MEAjN3UTnAIYsgHaEK%26pid%3DApi&f=1"
          channel="A Cool Channel"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/2560px-YouTube_Kids_LogoVector.svg.png"
        />{' '}
        <VideoCard
          title="Become a web dev"
          views="2.3M Views"
          timestamp="3 Days Ago"
          channelImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Sh7HGXn6MEAjN3UTnAIYsgHaEK%26pid%3DApi&f=1"
          channel="A Cool Channel"
          image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/YouTube_Kids_LogoVector.svg/2560px-YouTube_Kids_LogoVector.svg.png"
        />
      </div>
    </div>
  );
};

export default RecomendedVideos;
