import "./App.css";


function HomePage() {
  return (
    <div>
      <div>
        <video width="100%" controls>
          <source
            src="https://d79k57b9f2p6h.cloudfront.net/generic_uploads/production/BXjWaYLz/homepage_parent_video.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="grt-our-story">
        <div className="grt-cont">
          <h2 className="our">
            <img
              alt="header"
              src="https://assets.simplotel.com/simplotel/image/upload/q_90,fl_progressive,w_146,f_auto,c_limit/grt-hotels/Group_1076_n3zrkn"
            />
            OUR
            <span className="story">
              Story
              <img
                alt="header"
                className="right"
                src="https://assets.simplotel.com/simplotel/image/upload/q_90,fl_progressive,w_146,f_auto,c_limit/grt-hotels/Group_1076_n3zrkn"
              />
            </span>
          </h2>
        </div>
        <div className="grt-story">
          <div className="grt-story-text">
            <p>
              We are <span>GRT Hotels</span> on a mission to enrich lives.
              Creating special moments into memories and curated experiences
              into stories!
            </p>
          </div>
          <div className="grt-hotel-img">
            <img
              className="img"
              src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_0,w_2300,h_1644,r_0,c_crop/q_80,w_1600,dpr_1,f_auto,fl_progressive,c_limit/grt-hotels/grtaboutUs_fmbmzp"
              alt="img"
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <h3> crs@grthotels.com</h3>
      </div>
    </div>
  );
}

export default HomePage;
