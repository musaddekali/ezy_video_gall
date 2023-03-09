import React from "react";

const VideoView = () => {
  return (
    <div className="video_gall_dtl_wrap">
      <div>
        <div className="row">
          <div className="col-lg-8">
            <div className="video_gall_dtl_left">
              <div className="video_gall_dtl_content">
                <div className="video_gall_dtl_vdo">
                  <div className="video_gall_dtl_vdo_frame position-relative">
                    <div style={{ position: "relative", paddingTop: "56.25%" }}>
                      {/* Video pro overlay */}
                      <div className="video_gall_dtl_pro_overlay">
                        <div className="video_gall_dtl_pro_overlay_content text-center">
                          <div className="video_gall_dtl_pro_lock_icon">
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              strokeWidth={0}
                              viewBox="0 0 1024 1024"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M832 464h-68V240c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32zM540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0zm152-237H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v224z" />
                            </svg>
                          </div>
                          <h2 className="text-white mx-auto">
                            You need to purchase the video library{" "}
                            {"library name"} in order to watch this video.
                          </h2>
                          <a href="#" className="_btn1">
                            Buy a plan
                          </a>
                        </div>
                      </div>
                      {/* End Video pro overlay */}
                      <iframe
                        src="https://iframe.mediadelivery.net/embed/29280/40c4c336-6273-4354-a3d9-c7b3a7a1c045?autoplay=true"
                        loading="lazy"
                        style={{
                          border: "none",
                          position: "absolute",
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          height: "100%",
                          width: "100%",
                        }}
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                        allowFullScreen
                      ></iframe>
                    </div>
                  </div>
                  <div className="video_gall_dtl_vdo_title my-3">
                    <h3>Learn how to make a online video in 3 months</h3>
                  </div>
                </div>

                <div className="video_gall_dtl_user d-flex gap-2 align-items-center">
                  <div className="video_gall_dtl_user_img">
                    <img
                      src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                      alt="user"
                    />
                  </div>
                  <div>
                    <h6>Kamal Alom</h6>
                    <small>10 month ago</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="video_gall_dtl_right  mt-4 mt-lg-0">
              <div className="video_gall_dtl_rltd_items_wrap">
                <ul className="video_gall_dtl_rltd_items">
                  <li>
                    <div
                      title=" Learn how to make a online video in just within
                          this"
                      className="video_gall_dtl_rltd_item"
                    >
                      <div className="video_gall_dtl_rltd_item_left">
                        <div className="video_gall_dtl_rltd_item_thumb position-relative">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png"
                            alt="video_title"
                          />
                          <span className="video_gall_dtl_rltd_item_duration">
                            22:30
                          </span>
                        </div>
                      </div>
                      <div className="video_gall_dtl_rltd_item_right">
                        <div className="video_gall_dtl_rltd_item_content">
                          <h6>
                            Learn how to make a online video in just within
                            this...
                          </h6>
                          <small>Kamal ALom</small>
                          <p className="">
                            <small>300k Views - 2 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      title=" Learn how to make a online video in just within
                          this"
                      className="video_gall_dtl_rltd_item"
                    >
                      <div className="video_gall_dtl_rltd_item_left">
                        <div className="video_gall_dtl_rltd_item_thumb position-relative">
                          <img
                            src="https://static-cse.canva.com/blob/1015210/1600w-wK95f3XNRaM.jpg"
                            alt="video_title"
                          />
                          <span className="video_gall_dtl_rltd_item_duration">
                            20:30
                          </span>
                        </div>
                      </div>
                      <div className="video_gall_dtl_rltd_item_right">
                        <div className="video_gall_dtl_rltd_item_content">
                          <h6>
                            How to make a online video in just within this...
                          </h6>
                          <small>Jamal ALom</small>
                          <p className="">
                            <small>30k Views - 1 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      title=" Learn how to make a online video in just within
                          this"
                      className="video_gall_dtl_rltd_item"
                    >
                      <div className="video_gall_dtl_rltd_item_left">
                        <div className="video_gall_dtl_rltd_item_thumb position-relative">
                          <img
                            src="https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp"
                            alt="video_title"
                          />
                          <span className="video_gall_dtl_rltd_item_duration">
                            1:40:30
                          </span>
                        </div>
                      </div>
                      <div className="video_gall_dtl_rltd_item_right">
                        <div className="video_gall_dtl_rltd_item_content">
                          <h6>
                            This is how to make a online video in just within
                            this...
                          </h6>
                          <small>Karim Hossian</small>
                          <p className="">
                            <small>1M Views - 1 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      title=" Learn how to make a online video in just within
                          this"
                      className="video_gall_dtl_rltd_item"
                    >
                      <div className="video_gall_dtl_rltd_item_left">
                        <div className="video_gall_dtl_rltd_item_thumb position-relative">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Big_Buck_Bunny_thumbnail_vlc.png/1200px-Big_Buck_Bunny_thumbnail_vlc.png" />
                          <span className="video_gall_dtl_rltd_item_duration">
                            1:40:30
                          </span>
                        </div>
                      </div>
                      <div className="video_gall_dtl_rltd_item_right">
                        <div className="video_gall_dtl_rltd_item_content">
                          <h6>
                            This is how to make a online video in just within
                            this...
                          </h6>
                          <small>Karim Hossian</small>
                          <p className="">
                            <small>1M Views - 1 hours ago</small>
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoView;
