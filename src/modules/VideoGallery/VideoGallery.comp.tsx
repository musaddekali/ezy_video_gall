import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import VideoSingleCard from "./components/VideoSingleCard";
import useHome from "./useHome";

const VideoGallery = () => {
  const {
    isVideoSidebarOpen,
    toggleVideoSidebar,
    isVideoSearchOpen,
    toggleVideoSearch,
    videos,
  } = useHome();
  const [filterText, setFilterText] = useState("all");
  const [filteredVideos, setFilteredVideos] = useState([]);

  const handleFilterText = (e: any, cat: any) => {
    e.preventDefault();
    setFilterText(cat);
  };

  useEffect(() => {
    if (videos) {
      if (filterText === "all") {
        setFilteredVideos(videos);
      }

      if (filterText && filterText !== "all") {
        setFilteredVideos(
          videos.filter((item: any) => item.category === filterText)
        );
      }
    }
  }, [filterText, videos]);

  console.log("filtered videos -> ", filteredVideos, videos);

  return (
    <div className="video_gall_wrap">
      <div className="demo_spacer my-5"></div>
      <div className="">
        <div className="video_gall d-flex justify-content-stretch">
          <Topbar
            isVideoSidebarOpen={isVideoSidebarOpen}
            toggleVideoSidebar={toggleVideoSidebar}
            isVideoSearchOpen={isVideoSearchOpen}
            toggleVideoSearch={toggleVideoSearch}
          />
          <Sidebar
            isVideoSidebarOpen={isVideoSidebarOpen}
            toggleVideoSidebar={toggleVideoSidebar}
          />
          <div className="video_gall_right">
            <div className="video_gall_right_top">
              <div className="video_gall_right_top_nav">
                <ul className="video_gall_right_top_ul">
                  <li>
                    <a
                      className={`${filterText === "all" ? "active" : ""}`}
                      onClick={(e) => {
                        handleFilterText(e, "all");
                      }}
                      href="#"
                    >
                      All
                    </a>
                  </li>
                  {videos?.length > 0 &&
                    videos?.map((item: any) => (
                      <li key={item.id}>
                        <a
                          className={`${
                            filterText === item.category ? "active" : ""
                          }`}
                          onClick={(e) => {
                            handleFilterText(e, item.category);
                          }}
                          href="#"
                        >
                          {item.category}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              <hr className="hr_line video_gall_hr_line" />
            </div>
            <div className="video_gall_main">
              <div className="row">
                {videos?.length > 0 && filteredVideos ? (
                  filteredVideos?.map((video: any) => (
                    <VideoSingleCard key={video.id} video={video} />
                  ))
                ) : (
                  <h3>Loading...</h3>
                )}
              </div>
              <div className="text-center _pad_t20 border-pill">
                <button type="button" className="_btn1 rounded-pill">
                  <span>Load more +</span>
                </button>
              </div>
            </div>
          </div>
          {/* End Right bar */}
        </div>
      </div>
    </div>
  );
};

export default VideoGallery;
