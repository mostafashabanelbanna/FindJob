import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GoogleMap from "./GoogleMap/GoogleMap";
import SearchTabs from "./SearshTabs/SearchTabs";
import SearchResults from "./SearchResults/SearchResults";
import AdvancedSearch from "./AdvancedSearch/AdvancedSeach";

const FindJob = () => (
  <Container fluid>
    <GoogleMap />
    <Container>
      <SearchTabs />
      <Row className="flex-column-reverse flex-xl-row">
        <Col xl={8}>
          <SearchResults />
        </Col>
        <Col xl={4}>
          <AdvancedSearch />
        </Col>
      </Row>
      <Row>
        <Col xl={8}>
          <SearchResults />
        </Col>
        <Col xl={4}>
          <AdvancedSearch />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default FindJob;
