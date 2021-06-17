import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./SearchTabs.css";
import { Container } from "react-bootstrap";

const SearchTabs = () => {
  const tabsArr = ["FIND A JOB", "FIND RESUME"];

  //   control form input
  const [job, setJob] = useState("");

  const handleJob = (event) => {
    setJob(event.target.value);
  };

  const [location, setLocation] = useState("");

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const [industry, setIndustry] = useState([]);

  const noIndustries = !industry || (industry && industry.length === 0); //check if no industry

  const getIndustries = async () => {
    //   simulate api request
    const industryArr = [
      {
        id: 0,
        name: "Accountancy, banking and finance",
      },
      {
        id: 1,
        name: "Business, consulting and management",
      },
      {
        id: 2,
        name: "Charity and voluntary work",
      },
      {
        id: 3,
        name: "Charity and voluntary work",
      },
      {
        id: 4,
        name: "Creative arts and design",
      },
      {
        id: 5,
        name: "Energy and utilities",
      },
      {
        id: 6,
        name: "Engineering and manufacturing",
      },
    ];
    await setTimeout(() => {
      // set Industry value only if there's response
      if (industry) {
        setIndustry(industryArr);
      }
    }, 2000);
  };

  //call getIndustries after component mount
  useEffect(() => {
    getIndustries();
  }, []);

  return (
    <Row>
      <Col className="search_tabs_container">
        <Tabs>
          {tabsArr.map((item, idx) => (
            <Tab key={idx} eventKey={idx} title={item}>
              {idx === 0 || idx === 1 ? (
                <Form>
                  <Container fluid>
                    <Row>
                      <Col lg={3} md={6} className="pt-3 border-right">
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>JOB</Form.Label>
                          <Form.Control
                            onChange={handleJob}
                            value={job}
                            type="text"
                            placeholder="Job Title, Keywords"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={6} className="pt-3 border-right">
                        <Form.Group controlId="exampleForm.ControlInput1">
                          <Form.Label>LOCATION</Form.Label>
                          <Form.Control
                            onChange={handleLocation}
                            value={location}
                            type="text"
                            placeholder="City, province or region"
                          />
                        </Form.Group>
                      </Col>
                      <Col lg={3} md={6} className="pt-3 border-right">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                          <Form.Label>CATEGORY</Form.Label>
                          <Form.Control as="select">
                            {/* first option with 0 value */}
                            <option value={0}>Select Industry</option>
                            {/* loop throw industry options if it's not empty or null*/}
                            {!noIndustries &&
                              industry.map((option) => (
                                <option key={option.id} value={option.id}>
                                  {option.name}
                                </option>
                              ))}
                          </Form.Control>
                        </Form.Group>
                      </Col>
                      <Col
                        lg={3}
                        md={6}
                        className="d-flex pt-3 mb-3 border-right"
                      >
                        <Button className="black_btn">
                          <i class="fas fa-search"></i>SEARCH
                        </Button>
                      </Col>
                    </Row>
                  </Container>
                </Form>
              ) : null}
            </Tab>
          ))}
        </Tabs>
      </Col>
    </Row>
  );
};

export default SearchTabs;
