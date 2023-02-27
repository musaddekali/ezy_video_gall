import { useEffect, useState } from "react";
import axios from "axios";

const useHome = () => {
  const [isVideoSidebarOpen, setIsVideoSidebarOpen] = useState(false);
  const [isVideoSearchOpen, setIsVideoSearchOpen] = useState(false);
  const [videos, setVideos] = useState([]);

  const toggleVideoSidebar = () => {
    setIsVideoSidebarOpen(!isVideoSidebarOpen);
  };

  const toggleVideoSearch = () => {
    setIsVideoSearchOpen(!isVideoSearchOpen);
  };

  async function getVideosData() {
    try {
      const res = await axios.get("api/videos");
      setVideos(res.data);
    } catch (error) {
      console.log("data error -> ", error);
    }
  }

  useEffect(() => {
    getVideosData();
  }, []);

  return {
    isVideoSidebarOpen,
    toggleVideoSidebar,
    isVideoSearchOpen,
    toggleVideoSearch,
    videos,
  };
};

export default useHome;
