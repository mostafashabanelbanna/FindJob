import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import GoogleMap from "./GoogleMap/GoogleMap";
import SearchTabs from "./SearshTabs/SearchTabs";
import SearchResults from "./SearchResults/SearchResults";

const FindJob = () => (
  <Container fluid>
    <GoogleMap />
    <Container>
      <SearchTabs />
      <Row>
        <Col xl={8}>
          <SearchResults />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default FindJob;
