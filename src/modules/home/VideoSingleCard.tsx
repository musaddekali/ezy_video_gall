import React from "react";

const VideoSingleCard = () => {
  return (
    <div className="col-xxl-3 col-xl-4 col-md-6">
      <div className="video_gall_card_item">
        <div className="video_gall_card">
          <div className="video_gall_card_media">
            <img
              src="https://img.freepik.com/free-photo/talking-audience_1098-14094.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
              alt=""
            />
            <div className="video_gall_card_play_btn">
              <img src="./play_logo.png" alt="" />
            </div>
            <span className="video_gall_card_media_length">10:20</span>
          </div>
          <div className="video_gall_card_body">
            <h4 className="video_gall_card_title">
              Learn how to make a online video in 3 months...
            </h4>
            <div className="_mar_t20 d-flex justify-content-between">
              <div className="video_gall_card_user d-flex align-items-center">
                <div className="video_gall_card_user_img _mar_r12">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="video_gall_card_txt _mar_b4">Sadakur Alom...</p>
                  <p className="video_gall_card_txt_sm">2 hours ago</p>
                </div>
              </div>
              <div className="video_gall_card_cat">
                <span>Technology</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSingleCard;
