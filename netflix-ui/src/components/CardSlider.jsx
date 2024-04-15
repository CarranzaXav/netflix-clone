import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";

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
    slidesToShow: 6, 
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
            <Card className="row-card" id="movie" movieData={movie} index={index} key={movie.id} />
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
  /* overflow: visible; */
  width: 100vw;
  z-index: 5;
}
.slick-track div{
  /* margin-inline:10px; */
  width: 250px !important;
  height: 80vh;
}
  @media(max-width: 1460px){
    padding:1rem 0;
  }

  h1 {
    font-weight: 600;
    color:#fff;
    margin-left: 50px;
    position: relative;
    margin-bottom:0;
    z-index: 0;
  }
  .row{
    padding-left:25px;
    padding-right: 40px;
    z-index: 0;
  }
  .row-item{
    margin-top:0;
    padding-block: 0;
  }
  .row-card{
    margin-inline: 10px;
  }
  .custom-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    background-color: transparent;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 6; 
    transition: all 0.3s ease;
    padding-top:45px;
    padding-bottom:45px;
    padding-inline:10px;
  }
  .custom-arrow:hover {
    padding-top:45px;
    padding-bottom:45px;
    padding-inline:5px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 10%;
  }
  .next-arrow {
    right: 10px;
  }
  .prev-arrow {
    left: 10px;
  }
`;
