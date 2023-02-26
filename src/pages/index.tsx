export default function Home() {
  return (
    <div className="video_gall_wrap">
      <div className="demo_spacer my-5"></div>
      <div className="">
        <div className="video_gall d-flex justify-content-stretch">
          {/* <!-- main topbar  --> */}
          <div className="video_gall_topbar d-flex align-items-center justify-content-between justify-content-md-start fixed-top w-100">
            <div className="video_gall_topbar_left d-flex align-items-center">
              <button className="video_gall_sidebar_toggler">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
              <div className="video_gall_title">
                <h3>Video Gallery</h3>
              </div>
            </div>

            <div className="video_gall_topbar_right">
              {/* <!-- add "open" class in 'video_gall_search' for toggle search input on mobile  --> */}
              <div className="video_gall_search d-md-inline-flex">
                <span className="d-inline-flex video_gall_search_icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </span>
                <input
                  className="video_gall_search_inpt"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              {/* <!-- mobile search icon  --> */}
              <div className="video_gall_search_mobile d-inline-flex d-md-none">
                <button className="d-inline-flex video_gall_search_mobile_icon">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* <!-- end main topbar  --> */}

          {/* <!-- Left sidebar. (Don't wrap this section with anything!)-->
        <!-- ("is_sidebar_open" -> for active sidebar with 'video_gall_left' and 'video_gall_sidebar_overlay' classes) --> */}

          <div className="video_gall_left">
            <div className="video_gall_sidebar_wrapper">
              <div className="video_gall_sidebar">
                <div className="video_gall_sidebar_title">
                  <h3>All Category</h3>
                </div>
                <ul className="video_gall_sidebar_ul">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a className="active" href="#">
                      Explore
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <div>
                        <span>Gallery</span>
                        <sup title="Primium" className="video_gall_sidebar_tag">
                          <img src="./pro_logo_hat.png" alt="" />
                        </sup>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#"> Gallery </a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">My Video</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                  <li>
                    <a href="#">All content</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="video_gall_sidebar_overlay"></div>
          {/* <!-- End Left sidebar  --> */}

          {/* <!-- Right bar  --> */}
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
                        <span className="video_gall_card_media_length">
                          10:20
                        </span>
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
                              <p className="video_gall_card_txt _mar_b4">
                                Sadakur Alom...
                              </p>
                              <p className="video_gall_card_txt_sm">
                                2 hours ago
                              </p>
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
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="video_gall_card_item">
                    <div className="video_gall_card">
                      <div className="video_gall_card_media">
                        <img
                          src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9088.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
                          alt=""
                        />
                        <div className="video_gall_card_play_btn">
                          <img src="./play_logo.png" alt="" />
                        </div>
                        <span className="video_gall_card_media_length">
                          1:20:20
                        </span>
                      </div>
                      <div className="video_gall_card_body">
                        <h4 className="video_gall_card_title">
                          New way to how to make a online video in 3 months...
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
                              <p className="video_gall_card_txt _mar_b4">
                                Carnival
                              </p>
                              <p className="video_gall_card_txt_sm">
                                1 hours ago
                              </p>
                            </div>
                          </div>
                          <div className="video_gall_card_cat">
                            <span>Education</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="video_gall_card_item">
                    <div className="video_gall_card">
                      <div className="video_gall_card_media">
                        <img
                          src="https://img.freepik.com/free-photo/two-businessmen-pointing-laptop-screen-while-discussing_158595-5324.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
                          alt=""
                        />
                        <div className="video_gall_card_play_btn">
                          <img src="./play_logo.png" alt="" />
                        </div>
                        <span className="video_gall_card_media_length">
                          30:20
                        </span>
                      </div>
                      <div className="video_gall_card_body">
                        <h4 className="video_gall_card_title">
                          How to make a online video in 3 months.
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
                              <p className="video_gall_card_txt _mar_b4">
                                Saiful Khan
                              </p>
                              <p className="video_gall_card_txt_sm">
                                2 days ago
                              </p>
                            </div>
                          </div>
                          <div className="video_gall_card_cat">
                            <span>Sports</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="video_gall_card_item">
                    <div className="video_gall_card">
                      <div className="video_gall_card_media">
                        <img
                          src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9088.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
                          alt=""
                        />
                        <div className="video_gall_card_play_btn">
                          <img src="./play_logo.png" alt="" />
                        </div>
                        <span className="video_gall_card_media_length">
                          20:20
                        </span>
                      </div>
                      <div className="video_gall_card_body">
                        <h4 className="video_gall_card_title">
                          New way to how to make a online video in 3 months...
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
                              <p className="video_gall_card_txt _mar_b4">
                                Carnival
                              </p>
                              <p className="video_gall_card_txt_sm">
                                1 hours ago
                              </p>
                            </div>
                          </div>
                          <div className="video_gall_card_cat">
                            <span>Education</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="video_gall_card_item">
                    <div className="video_gall_card">
                      <div className="video_gall_card_media">
                        <img
                          src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9088.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
                          alt=""
                        />
                        <div className="video_gall_card_play_btn">
                          <img src="./play_logo.png" alt="" />
                        </div>
                        <span className="video_gall_card_media_length">
                          1:20:20
                        </span>
                      </div>
                      <div className="video_gall_card_body">
                        <h4 className="video_gall_card_title">
                          New way to how to make a online video in 3 months...
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
                              <p className="video_gall_card_txt _mar_b4">
                                Carnival
                              </p>
                              <p className="video_gall_card_txt_sm">
                                1 hours ago
                              </p>
                            </div>
                          </div>
                          <div className="video_gall_card_cat">
                            <span>Education</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <span className="video_gall_card_media_length">
                          10:20
                        </span>
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
                              <p className="video_gall_card_txt _mar_b4">
                                Sadakur Alom...
                              </p>
                              <p className="video_gall_card_txt_sm">
                                2 hours ago
                              </p>
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
                <div className="col-xxl-3 col-xl-4 col-md-6">
                  <div className="video_gall_card_item">
                    <div className="video_gall_card">
                      <div className="video_gall_card_media">
                        <img
                          src="https://img.freepik.com/free-photo/book-library-with-old-open-textbook-stack-piles-literature-text-archive-reading-desk_1150-9088.jpg?size=626&ext=jpg&ga=GA1.2.1424442296.1671005108&semt=sph"
                          alt=""
                        />
                        <div className="video_gall_card_play_btn">
                          <img src="./play_logo.png" alt="" />
                        </div>
                        <span className="video_gall_card_media_length">
                          20:20
                        </span>
                      </div>
                      <div className="video_gall_card_body">
                        <h4 className="video_gall_card_title">
                          New way to how to make a online video in 3 months...
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
                              <p className="video_gall_card_txt _mar_b4">
                                Carnival
                              </p>
                              <p className="video_gall_card_txt_sm">
                                1 hours ago
                              </p>
                            </div>
                          </div>
                          <div className="video_gall_card_cat">
                            <span>Education</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
                        <span className="video_gall_card_media_length">
                          10:20
                        </span>
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
                              <p className="video_gall_card_txt _mar_b4">
                                Sadakur Alom...
                              </p>
                              <p className="video_gall_card_txt_sm">
                                2 hours ago
                              </p>
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
}
