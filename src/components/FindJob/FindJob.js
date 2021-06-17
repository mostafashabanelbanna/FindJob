import React from "react";
import Container from "react-bootstrap/Container";

import GoogleMap from "./GoogleMap/GoogleMap";
import SearchTabs from "./SearshTabs/SearchTabs";

const FindJob = () => (
  <Container fluid>
    <GoogleMap />
    <Container>
      <SearchTabs />
    </Container>
  </Container>
);

export default FindJob;
