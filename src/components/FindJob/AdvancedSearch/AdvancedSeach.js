import React, { useState, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import { Accordion } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

import SearchIcon from "@material-ui/icons/Search";

import "./AdvancedSearch.css";

const AdvancedSearch = () => {
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
    <>
      <Form className="border mb-3 d-xl-block d-none">
        <Container fluid>
          <Row>
            <Col sm={12} className="d-flex px-0 border-bottom">
              <div className="border-right p-3 ">
                <SearchIcon />
              </div>
              <div className="p-3" style={{ fontWeight: "700" }}>
                Start Searching
              </div>
            </Col>
            <Col sm={12} className="pt-3 ">
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
            <Col sm={12} className="pt-3 ">
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
            <Col sm={12} className="pt-3 ">
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
            <Col sm={12} className="border-bottom px-0 border-top">
              <Accordion className="toggles">
                <Card className="border-bottom">
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey="0"
                      className="p-3 toggle_arrow"
                    >
                      Contract Type
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <Form.Group
                        className="ml-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="1 year" />
                        <Form.Check type="checkbox" label="2 year" />
                        <Form.Check type="checkbox" label="3 year" />
                      </Form.Group>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey="1"
                      className="p-3 toggle_arrow"
                    >
                      Specialisms
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <Form.Group
                        className="ml-2"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check type="checkbox" label="medical" />
                        <Form.Check type="checkbox" label="profit share" />
                      </Form.Group>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Col>
            <Col sm={12} className="d-flex pt-3 mb-3 ">
              <Button className="black_btn btn-dark">
                <SearchIcon />
                SEARCH
              </Button>
            </Col>
          </Row>
        </Container>
      </Form>
    </>
  );
};

export default AdvancedSearch;
