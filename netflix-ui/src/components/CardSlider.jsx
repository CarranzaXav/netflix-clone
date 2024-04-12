import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
import "./Cardslider.css";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <AiOutlineRight />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <AiOutlineLeft />
    </div>
  );
};

export default React.memo(function CardSlider({ data, title }) {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    lazyLoad: true,
    draggable:true,
    centerMode:true,
    swipeToSlide: true,
    slidesToShow: 7, 
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1460,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:3,
          slidesToScroll:1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container className="flex column slider-container">
      <h1>{title}</h1>
      <Slider {...settings} className="row" >
        {data.map((movie, index) => (
          <div key={index} className="row-item">
            <Card id="movie" movieData={movie} index={index} key={movie.id} />
          </div>
        ))}
      </Slider>
    </Container>
  );
});

const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 75%);
  gap: 0.8rem;
  position: relative;
  padding: 0.8rem 0;
  
  
  .slick-list {
  position: relative;
  display: block !important;
  overflow: visible;
  width: 100vw;
  z-index: 5;
  margin-inline:10px;
}
/* .row{
  margin-inline: 10px;
} */
 
`;
