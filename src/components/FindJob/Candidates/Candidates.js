import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { SampleNextArrow } from "../../slick-carousel/Arrows";
import { SamplePrevArrow } from "../../slick-carousel/Arrows";

import img_path_1 from "../../../assets/img/candidateSlider/1.jpg";
import img_path_2 from "../../../assets/img/candidateSlider/2.jpg";
import img_path_3 from "../../../assets/img/candidateSlider/3.jpg";
import img_path_4 from "../../../assets/img/candidateSlider/4.jpg";
import img_path_5 from "../../../assets/img/candidateSlider/5.jpg";
import img_path_6 from "../../../assets/img/candidateSlider/6.jpg";

import Slider from "react-slick";

import "./Candidates.css";

const Candidates = () => {
  const settings = {
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Row className="position-relative">
      <Col
        xs={12}
        style={{ backgroundColor: "#4f52d3", height: "350px" }}
      ></Col>
      <Col xs={12} style={{ height: "300px" }}></Col>
      <Container className="candidates_slider_container">
        <Row>
          <Col>
            <div className="header">
              <h6> FIND TOP TALENTS </h6>
              <h3 className="title pb-3">Explore Our Leatest Candidates</h3>
              <p>
                Work with someone perfect for your team & get amazing results
                working with the best employees, hie talents with confidence!
              </p>
            </div>
            <Slider {...settings}>
              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_1}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Mostafa Shaban</strong>{" "}
                  </p>
                  <p className="text-muted">UI Developer</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_2}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Mohammed Ahmed</strong>{" "}
                  </p>
                  <p className="text-muted">UI/UX Designer</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_3}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Farid Shehab</strong>{" "}
                  </p>
                  <p className="text-muted">Scrum Master</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_4}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Hany Ali</strong>{" "}
                  </p>
                  <p className="text-muted">Database Adminstration</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_5}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Ali Ashraf</strong>{" "}
                  </p>
                  <p className="text-muted">Backend Developer</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_6}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Mostafa Shaban</strong>{" "}
                  </p>
                  <p className="text-muted">UI Developer</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_1}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Mostafa Shaban</strong>{" "}
                  </p>
                  <p className="text-muted">UI Developer</p>
                </div>
              </div>

              <div className="candidates_slider_item">
                <div
                  className="candidates_slider_img"
                  style={{
                    backgroundImage: `url('${img_path_1}')`,
                  }}
                >
                  <div className="mask"></div>
                  <div className="location">cairo</div>
                </div>
                <div className="candidates_slider_caption">
                  <p class="pt-3 mb-2">
                    <strong>Mostafa Shaban</strong>{" "}
                  </p>
                  <p className="text-muted">UI Developer</p>
                </div>
              </div>
            </Slider>
          </Col>
          <Col sm={12} className="d-flex justify-content-center pt-3 my-4 ">
            <Button className="black_btn btn-dark" style={{ width: "180px" }}>
              EXPOLRE ALL
            </Button>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Candidates;
