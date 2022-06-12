import React, { useEffect, useState } from "react";
import styles from "./App.module.css";
import Search from "./components/Search/Search";
import VideoList from "./components/VideoList/VideoList";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);

  const search = (query) => {
    youtube
      .search(query) //
      .then((videos) => setVideos(videos));
  };
  return (
    <div className={styles.app}>
      <Search onSearch={search} />
      <VideoList videos={videos} />
    </div>
  );
}

export default App;
