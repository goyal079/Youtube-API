import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ handleVideoSelect, videos }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });
  return (
    <div className="ui relaxed divided list" style={{ color: "white" }}>
      {renderedVideos}
    </div>
  );
};

export default VideoList;
