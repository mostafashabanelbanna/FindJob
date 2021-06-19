import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import EmailIcon from "@material-ui/icons/Email";

import SendIcon from "@material-ui/icons/Send";

import "./Subscribe.css";

const Subscribe = () => {
  //   control form input
  const [email, setEmail] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  return (
    <Col lg={6} className=" mb-3">
      <div className="subscribe h-100">
        <div className="d-flex px-0 border-bottom">
          <div className="border-right p-3 ">
            <SendIcon />
          </div>
          <div className="p-3" style={{ fontWeight: "700" }}>
            Subscribe Our News
          </div>
        </div>
        <div className="p-3">
          <p>
            Subscribe to our the newsletter to get all our jobs emailed to you
            every week; Or sign up for Job Alerts if you want daily or weekly
            emails of jobs
          </p>
          <Form>
            <Form.Group
              className="Email_group"
              controlId="exampleForm.ControlInput1"
            >
              <Form.Label className="px-1">
                <EmailIcon />
              </Form.Label>
              <Form.Control
                onChange={handleEmail}
                value={email}
                type="text"
                placeholder="Enter Your Email"
              />
            </Form.Group>
            <Button className="indigo_btn btn-dark">SUBSCRIBE</Button>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default Subscribe;
