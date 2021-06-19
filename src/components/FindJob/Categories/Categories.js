import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ApartmentIcon from "@material-ui/icons/Apartment";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import WebIcon from "@material-ui/icons/Web";

import "./Categories.css";
const Categories = () => {
  return (
    <Container fluid>
      <Row className="mb-5">
        <Col lg={4} md={6} className="p-3 border   category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <ApartmentIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Construction & Build</div>
              <div className="text-muted">7 open postion</div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} className="p-3 border  category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <MenuBookIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Education & Training</div>
              <div className="text-muted">3 open postion</div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} className="p-3 border  category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <FavoriteBorderIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Health & Care</div>
              <div className="text-muted">10 open postion</div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} className="p-3 border  category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <DriveEtaIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Cars & Automotive</div>
              <div className="text-muted">10 open postion</div>
            </div>
          </div>
        </Col>
        <Col lg={4} md={6} className="p-3 border  category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <InsertChartIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Accounting & Finance</div>
              <div className="text-muted">13 open postion</div>
            </div>
          </div>
        </Col>

        <Col lg={4} md={6} className="p-3 border  category">
          <div className="d-flex align-items-center">
            <div className="p-3">
              <WebIcon fontSize="large" className="category_icon" />
            </div>
            <div>
              <div>Web Development</div>
              <div className="text-muted">10 open postion</div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Categories;
