import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GoogleMap from "./GoogleMap/GoogleMap";
import SearchTabs from "./SearshTabs/SearchTabs";
import SearchResults from "./SearchResults/SearchResults";
import AdvancedSearch from "./AdvancedSearch/AdvancedSeach";
import Categories from "./Categories/Categories";
import FeaturedJobs from "./FeaturedJobs/FeaturedJobs";
import Subscribe from "./Subscribe/Subscribe";
import LatestTweets from "./LatestTweets/LatestTweets";
import Candidates from "./Candidates/Candidates";

const FindJob = () => (
  <Container fluid>
    <GoogleMap />
    <Container>
      <SearchTabs />
      <Row>
        <Col xl={8}>
          <SearchResults />
          <Categories />
          <Row>
            <Subscribe />
            <LatestTweets />
          </Row>
        </Col>
        <Col xl={4}>
          <AdvancedSearch />
          <FeaturedJobs />
        </Col>
      </Row>
    </Container>
    <Candidates />
  </Container>
);

export default FindJob;
