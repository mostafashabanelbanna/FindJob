import React from "react";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { SampleNextArrow } from "../../slick-carousel/Arrows";
import { SamplePrevArrow } from "../../slick-carousel/Arrows";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import ScheduleIcon from "@material-ui/icons/Schedule";

import "./FeaturedJobs.css";

import slide_1 from "../../../assets/img/featuredSlider/ant-rozetsky-HXOllTSwrpM-unsplash.jpg";
import slide_2 from "../../../assets/img/featuredSlider/campaign-creators-gMsnXqILjp4-unsplash.jpg";
import slide_3 from "../../../assets/img/featuredSlider/scott-graham-5fNmWej4tAA-unsplash.jpg";

const FeaturedJobs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div>
        <h5>Featured Jobs</h5>
      </div>
      <div className="carrousel_wrapper featured_jobs border ">
        <Slider {...settings}>
          {/* Slide 1 */}
          <Container>
            <Row className="p-4">
              <Col xs={12} className="mb-3">
                <div className=" position-relative">
                  <img
                    src={slide_1}
                    className="img-fluid mx-auto"
                    alt="slide_1"
                  />
                  <div className="mask"></div>
                  <div className="label px-2">Freelance</div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 border-bottom">
              <Col xs={3} className="align-self-start">
                <div
                  style={{
                    backgroundColor: "#fd5339",
                    borderRadius: "4px",
                    padding: ".25rem",
                  }}
                >
                  <svg
                    className="w-100 h-100"
                    id="Icons"
                    height="512"
                    viewBox="0 0 74 74"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m46.064 27a1 1 0 0 1 -.707-.293l-9.064-9.065a1 1 0 0 1 .024-1.438l14.934-13.935a1 1 0 0 1 1.39.024l6.059 6.062a1 1 0 0 1 .11 1.283l-11.928 16.938a1 1 0 0 1 -.731.42.856.856 0 0 1 -.087.004zm-7.625-10.041 7.492 7.493 10.763-15.278-4.785-4.784z" />
                    <path d="m27.918 27c-.028 0-.058 0-.087 0a1 1 0 0 1 -.731-.421l-11.914-16.942a1 1 0 0 1 .114-1.282l6.063-6.062a1 1 0 0 1 1.39-.024l14.93 13.931a1 1 0 0 1 .023 1.438l-9.082 9.065a1 1 0 0 1 -.706.297zm-10.612-17.826 10.747 15.279 7.508-7.494-13.47-12.569z" />
                    <path d="m51.934 4h-29.868a1 1 0 0 1 0-2h29.868a1 1 0 0 1 0 2z" />
                    <path d="m41.85 31.2h-9.71a1 1 0 0 1 -.955-.7l-2-6.42a1 1 0 0 1 1.91-.595l1.781 5.715h8.236l1.772-5.716a1 1 0 0 1 1.91.592l-1.994 6.424a1 1 0 0 1 -.95.7z" />
                    <path d="m36.988 71a1 1 0 0 1 -.783-.379l-8.61-10.859a1 1 0 0 1 -.208-.75l3.762-28.941a1 1 0 0 1 .991-.871h9.708a1 1 0 0 1 .992.872l3.75 28.941a1 1 0 0 1 -.209.75l-8.61 10.858a1 1 0 0 1 -.783.379zm-7.564-12.149 7.564 9.54 7.563-9.54-3.582-27.651h-7.95z" />
                  </svg>
                </div>
              </Col>
              <Col xs={9}>
                <div className="carrousel_caption">
                  <h6>Front-end Developer</h6>
                  <div className="mb-2">
                    <span
                      className="pr-2 side_line"
                      style={{ color: "#4c4fd0" }}
                    >
                      Tielab
                    </span>
                    <span className="pl-2 text-muted">IDSC</span>
                  </div>
                  <p className="text-muted">
                    A front-end web developer is responsible for implementing
                    visual and interactive elements that users engage with
                    through their web browser .
                  </p>
                  <div>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <LocationOnIcon className="px-1" />
                      Hurghada
                    </span>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <ScheduleIcon className="px-1" />8 hours ago
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 my-3">
              <Col xs={3}></Col>
              <Col xs={9} className="d-flex ">
                <Button className="w-100 indigo_btn btn-dark py-3">
                  APPLY FOR THIS JOB
                </Button>
              </Col>
            </Row>
          </Container>
          {/* Slide 2 */}
          <Container>
            <Row className="p-4">
              <Col xs={12} className="mb-3">
                <div className=" position-relative">
                  <img
                    src={slide_2}
                    className="img-fluid mx-auto"
                    alt="slide_1"
                  />
                  <div className="mask"></div>
                  <div className="label px-2">Freelance</div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 border-bottom">
              <Col xs={3} className="align-self-start">
                <div
                  style={{
                    backgroundColor: "#fd5339",
                    borderRadius: "4px",
                    padding: ".25rem",
                  }}
                >
                  <svg
                    className="w-100 h-100"
                    id="Icons"
                    height="512"
                    viewBox="0 0 74 74"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m46.064 27a1 1 0 0 1 -.707-.293l-9.064-9.065a1 1 0 0 1 .024-1.438l14.934-13.935a1 1 0 0 1 1.39.024l6.059 6.062a1 1 0 0 1 .11 1.283l-11.928 16.938a1 1 0 0 1 -.731.42.856.856 0 0 1 -.087.004zm-7.625-10.041 7.492 7.493 10.763-15.278-4.785-4.784z" />
                    <path d="m27.918 27c-.028 0-.058 0-.087 0a1 1 0 0 1 -.731-.421l-11.914-16.942a1 1 0 0 1 .114-1.282l6.063-6.062a1 1 0 0 1 1.39-.024l14.93 13.931a1 1 0 0 1 .023 1.438l-9.082 9.065a1 1 0 0 1 -.706.297zm-10.612-17.826 10.747 15.279 7.508-7.494-13.47-12.569z" />
                    <path d="m51.934 4h-29.868a1 1 0 0 1 0-2h29.868a1 1 0 0 1 0 2z" />
                    <path d="m41.85 31.2h-9.71a1 1 0 0 1 -.955-.7l-2-6.42a1 1 0 0 1 1.91-.595l1.781 5.715h8.236l1.772-5.716a1 1 0 0 1 1.91.592l-1.994 6.424a1 1 0 0 1 -.95.7z" />
                    <path d="m36.988 71a1 1 0 0 1 -.783-.379l-8.61-10.859a1 1 0 0 1 -.208-.75l3.762-28.941a1 1 0 0 1 .991-.871h9.708a1 1 0 0 1 .992.872l3.75 28.941a1 1 0 0 1 -.209.75l-8.61 10.858a1 1 0 0 1 -.783.379zm-7.564-12.149 7.564 9.54 7.563-9.54-3.582-27.651h-7.95z" />
                  </svg>
                </div>
              </Col>
              <Col xs={9}>
                <div className="carrousel_caption">
                  <h6>Front-end Developer</h6>
                  <div className="mb-2">
                    <span
                      className="pr-2 side_line"
                      style={{ color: "#4c4fd0" }}
                    >
                      Tielab
                    </span>
                    <span className="pl-2 text-muted">IDSC</span>
                  </div>
                  <p className="text-muted">
                    A front-end web developer is responsible for implementing
                    visual and interactive elements that users engage with
                    through their web browser .
                  </p>
                  <div>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <LocationOnIcon className="px-1" />
                      Hurghada
                    </span>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <ScheduleIcon className="px-1" />8 hours ago
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 my-3">
              <Col xs={3}></Col>
              <Col xs={9} className="d-flex ">
                <Button className="w-100 indigo_btn btn-dark py-3">
                  APPLY FOR THIS JOB
                </Button>
              </Col>
            </Row>
          </Container>
          {/* Slide 3 */}
          <Container>
            <Row className="p-4">
              <Col xs={12} className="mb-3">
                <div className=" position-relative">
                  <img
                    src={slide_3}
                    className="img-fluid mx-auto"
                    alt="slide_1"
                  />
                  <div className="mask"></div>
                  <div className="label px-2">Freelance</div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 border-bottom">
              <Col xs={3} className="align-self-start">
                <div
                  style={{
                    backgroundColor: "#fd5339",
                    borderRadius: "4px",
                    padding: ".25rem",
                  }}
                >
                  <svg
                    className="w-100 h-100"
                    id="Icons"
                    height="512"
                    viewBox="0 0 74 74"
                    width="512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m46.064 27a1 1 0 0 1 -.707-.293l-9.064-9.065a1 1 0 0 1 .024-1.438l14.934-13.935a1 1 0 0 1 1.39.024l6.059 6.062a1 1 0 0 1 .11 1.283l-11.928 16.938a1 1 0 0 1 -.731.42.856.856 0 0 1 -.087.004zm-7.625-10.041 7.492 7.493 10.763-15.278-4.785-4.784z" />
                    <path d="m27.918 27c-.028 0-.058 0-.087 0a1 1 0 0 1 -.731-.421l-11.914-16.942a1 1 0 0 1 .114-1.282l6.063-6.062a1 1 0 0 1 1.39-.024l14.93 13.931a1 1 0 0 1 .023 1.438l-9.082 9.065a1 1 0 0 1 -.706.297zm-10.612-17.826 10.747 15.279 7.508-7.494-13.47-12.569z" />
                    <path d="m51.934 4h-29.868a1 1 0 0 1 0-2h29.868a1 1 0 0 1 0 2z" />
                    <path d="m41.85 31.2h-9.71a1 1 0 0 1 -.955-.7l-2-6.42a1 1 0 0 1 1.91-.595l1.781 5.715h8.236l1.772-5.716a1 1 0 0 1 1.91.592l-1.994 6.424a1 1 0 0 1 -.95.7z" />
                    <path d="m36.988 71a1 1 0 0 1 -.783-.379l-8.61-10.859a1 1 0 0 1 -.208-.75l3.762-28.941a1 1 0 0 1 .991-.871h9.708a1 1 0 0 1 .992.872l3.75 28.941a1 1 0 0 1 -.209.75l-8.61 10.858a1 1 0 0 1 -.783.379zm-7.564-12.149 7.564 9.54 7.563-9.54-3.582-27.651h-7.95z" />
                  </svg>
                </div>
              </Col>
              <Col xs={9}>
                <div className="carrousel_caption">
                  <h6>Front-end Developer</h6>
                  <div className="mb-2">
                    <span
                      className="pr-2 side_line"
                      style={{ color: "#4c4fd0" }}
                    >
                      Tielab
                    </span>
                    <span className="pl-2 text-muted">IDSC</span>
                  </div>
                  <p className="text-muted">
                    A front-end web developer is responsible for implementing
                    visual and interactive elements that users engage with
                    through their web browser .
                  </p>
                  <div>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <LocationOnIcon className="px-1" />
                      Hurghada
                    </span>
                    <span className="text-muted" style={{ fontSize: ".8rem" }}>
                      <ScheduleIcon className="px-1" />8 hours ago
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="px-4 my-3">
              <Col xs={3}></Col>
              <Col xs={9} className="d-flex ">
                <Button className="w-100 indigo_btn btn-dark py-3">
                  APPLY FOR THIS JOB
                </Button>
              </Col>
            </Row>
          </Container>
        </Slider>
      </div>
    </>
  );
};

export default FeaturedJobs;
