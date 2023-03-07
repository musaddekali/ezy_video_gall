const Sidebar = ({ isVideoSidebarOpen, toggleVideoSidebar }: any) => {
  return (
    <>
      <div
        className={`video_gall_left ${
          isVideoSidebarOpen ? "is_sidebar_open" : ""
        }`}
      >
        <div className="video_gall_sidebar_wrapper">
          <div className="video_gall_sidebar">
            <div className="video_gall_sidebar_title">
              <h3>All Gallery</h3>
            </div>
            <ul className="video_gall_sidebar_ul">
              <li>
                <a onClick={toggleVideoSidebar} href="#">
                  Gallery 1
                </a>
              </li>
              <li>
                <a onClick={toggleVideoSidebar} className="active" href="#">
                  Gallery 2
                </a>
              </li>
              <li>
                <a onClick={toggleVideoSidebar} href="#">
                  <div>
                    <span>Gallery 3</span>
                    <sup title="Primium" className="video_gall_sidebar_tag">
                      <img src="./pro_logo_hat.png" alt="" />
                    </sup>
                  </div>
                </a>
              </li>
              <li>
                <a onClick={toggleVideoSidebar} href="#">
                  Gallery 4
                </a>
              </li>
              <li>
                <a onClick={toggleVideoSidebar} href="#">
                  Gallery 5
                </a>
              </li>
              <li>
                <a onClick={toggleVideoSidebar} href="#">
                  My Videos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        onClick={toggleVideoSidebar}
        className={`video_gall_sidebar_overlay ${
          isVideoSidebarOpen ? "is_sidebar_open" : ""
        }`}
      ></div>
    </>
  );
};

export default Sidebar;
