import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import VideoDetails from "./components/VideoDetails";
import VideoList from "./components/VideoList";
import youtube from "./apis/youtube";
function App() {
  const [videos, setVideos] = useState([]);
  const [videoSelected, setVideo] = useState(null);
  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    setVideos(response.data.items);
    console.log("this is resp", response);
  };
  const handleVideoSelect = (video) => {
    setVideo(video);
  };

  return (
    <div className="ui container" style={{ marginTop: "1em" }}>
      <Searchbar handleFormSubmit={handleSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetails video={videoSelected} />
          </div>
          <div className="five wide column">
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
