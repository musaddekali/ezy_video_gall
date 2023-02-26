import { useState } from "react";

const useHome = () => {
  const [isVideoSidebarOpen, setIsVideoSidebarOpen] = useState(false);
  const [isVideoSearchOpen, setIsVideoSearchOpen] = useState(false);

  const toggleVideoSidebar = () => {
    setIsVideoSidebarOpen(!isVideoSidebarOpen);
  };

  const toggleVideoSearch = () => {
    setIsVideoSearchOpen(!isVideoSearchOpen);
  };
  return {
    isVideoSidebarOpen,
    toggleVideoSidebar,
    isVideoSearchOpen,
    toggleVideoSearch,
  };
};

export default useHome;
