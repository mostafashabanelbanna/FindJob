import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GoogleMap = () => (
  <Row>
    <Col className="px-0">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13813.451523851987!2d30.9532117!3d30.05513115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145859abe2f55b17%3A0x4c3a00b53bc6f794!2sBeverly%20Hills%20Club%20House!5e0!3m2!1sar!2seg!4v1582194133963!5m2!1sar!2seg"
        width="100%"
        height="420"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </Col>
  </Row>
);

export default GoogleMap;
