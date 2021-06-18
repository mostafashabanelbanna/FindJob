import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";

import RssFeedIcon from "@material-ui/icons/RssFeed";

import SearchResultsTabel from "./SearchResultsTabel/SearchResultsTabel";
import { jobsArr } from "../data";

import SearchResultsSkelton from "../../LoadingSkeleton/SearchResultsSkelton";

import "./SearchResultsTabs.css";

const SearchResultsTabs = () => {
  const tabsArr = [
    "All Jobs",
    "Full time",
    "Temporary",
    "Internship",
    "Part Time",
    "Freelance",
  ];

  const [jobs, setJobs] = useState([]);

  //
  const noJobs = !jobs || (jobs && jobs.length === 0); //check if no jobs

  const getJobs = async () => {
    await setTimeout(() => {
      // set jobs value only if there's response
      if (jobs) {
        setJobs(jobsArr);
      }
    }, 2000);
  };

  //call getJobs after component mount
  useEffect(() => {
    getJobs();
  }, []);

  //
  const handleTabSelect = (eventKey) => {
    //   filter results based on tab name and event key
    let filteredJobs = [];
    switch (eventKey) {
      case "0":
        filteredJobs = jobsArr.filter((item) => {
          return item;
        });
        break;
      case "1":
        filteredJobs = jobsArr.filter((item) => {
          return item.jobType.indexOf(tabsArr[1]) > -1;
        });
        break;
      case "2":
        filteredJobs = jobsArr.filter((item) => {
          return item.jobType.indexOf(tabsArr[2]) > -1;
        });
        break;
      case "3":
        filteredJobs = jobsArr.filter((item) => {
          return item.jobType.indexOf(tabsArr[3]) > -1;
        });
        break;
      case "4":
        filteredJobs = jobsArr.filter((item) => {
          return item.jobType.indexOf(tabsArr[4]) > -1;
        });
        break;
      case "5":
        filteredJobs = jobsArr.filter((item) => {
          return item.jobType.indexOf(tabsArr[5]) > -1;
        });
        break;
    }
    setJobs(filteredJobs);
  };

  return (
    <Col className="search_results_tabs_container">
      <div className="my-2 d-flex flex-column-reverse flex-sm-row justify-content-between align-items-center">
        <div>
          We have<span style={{ color: "#4c4fd0" }}> {jobs.length} </span>
          Potential jobs for you.
        </div>
        <div className="sort_results_dropdown d-flex align-items-center">
          <span className="text-muted">Sort by:</span>
          <Form.Group
            className="mb-0 mr-2"
            controlId="exampleForm.ControlSelect2"
          >
            <Form.Control as="select">
              {/* first option with 0 value */}
              <option value={1}>Newest</option>
              <option>Nearest</option>
            </Form.Control>
          </Form.Group>
          <div style={{ color: "#f6aa48" }}>
            <span>RSS</span>
            <RssFeedIcon />
          </div>
        </div>
      </div>

      <Tabs onSelect={(eventKey) => handleTabSelect(eventKey)}>
        {tabsArr.map((item, idx) => (
          <Tab key={idx} eventKey={idx} title={item}>
            {!noJobs && <SearchResultsTabel SearchResultsData={jobs} />}
            {noJobs && <SearchResultsSkelton />}
          </Tab>
        ))}
      </Tabs>
    </Col>
  );
};

export default SearchResultsTabs;
