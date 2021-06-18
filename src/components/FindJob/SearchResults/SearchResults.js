import React from "react";
import Row from "react-bootstrap/Row";

import SearchResultsTabs from "./SearchResultsTabs/SearchResultsTabs";

const SearchResults = () => {
  return (
    <Row className="mb-2">
      <SearchResultsTabs />
    </Row>
  );
};

export default SearchResults;
