import React from "react";
import Col from "react-bootstrap/Col";

import TwitterIcon from "@material-ui/icons/Twitter";
import ScheduleIcon from "@material-ui/icons/Schedule";

import "./LatestTweets.css";

const LatestTweets = () => {
  return (
    <Col lg={6} className=" mb-3">
      <div className="latest_tweets h-100">
        <div className="d-flex px-0 border-bottom">
          <div className="border-right p-3 ">
            <TwitterIcon />
          </div>
          <div className="p-3" style={{ fontWeight: "700" }}>
            Latest Tweets
          </div>
        </div>
        <div className="p-3">
          <div className="my-3">
            <span className="tweet_lable px-1">@Mostafa_shaban</span>
          </div>
          <div>
            <p>
              Die neuesten Tweets von EMPLOYMENT NEWS (@Employ_News). ...
              Subscribe to e version of Employment News for latest job updates
            </p>
            <span style={{ fontSize: ".8rem" }}>
              <ScheduleIcon className="px-1" />
              18 hours ago
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default LatestTweets;
