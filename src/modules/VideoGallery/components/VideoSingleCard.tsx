import React from "react";
import moment from "moment";

const VideoSingleCard = ({ video }: any) => {
  const {
    id,
    title,
    thumbnailUrl,
    duration,
    author,
    description,
    uploadTime,
    category,
  } = video;

  return (
    <div className="col-xxl-3 col-xl-4 col-md-6">
      <div className="video_gall_card_item">
        <div className="video_gall_card">
          <div className="video_gall_card_media">
            <img src={thumbnailUrl} alt="" />
            <div className="video_gall_card_play_btn">
              <img src="./play_logo.png" alt="" />
            </div>
            <span className="video_gall_card_media_length">{duration}</span>
          </div>
          <div className="video_gall_card_body">
            <h4 className="video_gall_card_title">{title}</h4>
            <div className="_mar_t20 d-flex justify-content-between">
              <div className="video_gall_card_user d-flex align-items-center">
                <div className="video_gall_card_user_img _mar_r12">
                  <img
                    src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                    alt=""
                  />
                </div>
                <div className="">
                  <p className="video_gall_card_txt _mar_b4">{author}</p>
                  <p className="video_gall_card_txt_sm">
                    {moment(uploadTime).fromNow()}
                  </p>
                </div>
              </div>
              <div className="video_gall_card_cat">
                <span>{category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSingleCard;
