import React from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import VideoSingleCard from "./VideoSingleCard";
import useHome from "./useHome";

const Home = () => {
  const {
    isVideoSidebarOpen,
    toggleVideoSidebar,
    isVideoSearchOpen,
    toggleVideoSearch,
  } = useHome();

  console.log("home page -> ", isVideoSidebarOpen);

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
                    <a className="active" href="#">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#">Latest</a>
                  </li>
                  <li>
                    <a href="#">Old</a>
                  </li>
                  <li>
                    <a href="#">Colorful</a>
                  </li>
                  <li>
                    <a href="#">Nautral</a>
                  </li>
                  <li>
                    <a href="#">Top most</a>
                  </li>
                </ul>
              </div>
              <hr className="hr_line video_gall_hr_line" />
            </div>
            <div className="video_gall_main">
              <div className="row">
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
                <VideoSingleCard />
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

export default Home;
