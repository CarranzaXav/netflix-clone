import React from 'react'
import styled from 'styled-components';
import CardSlider from './CardSlider';

export default function Slider({movies}) {
  const getMoviesFromRange = (from, to) => {
    const startIndex = from % movies.length;
    const endIndex = to % movies.length;
  
    if (startIndex < endIndex) {
        return movies.slice(startIndex, endIndex);
      } else if (startIndex > endIndex) {
        return movies.slice(startIndex).concat(movies.slice(0, endIndex));
      } else {
        return movies; // When startIndex is equal to endIndex, return all movies
      }
  };

  return (
    <Container>
      <CardSlider data={getMoviesFromRange(0,10)} title="Netflix Originals"/>
      <CardSlider data={getMoviesFromRange(10,20)} title="Trending Now"/>
      <CardSlider data={getMoviesFromRange(20,30)} title="New Releases"/>
      <CardSlider data={getMoviesFromRange(30,40)} title="Blockbuster Movies"/>
      <CardSlider data={getMoviesFromRange(40,50)} title="Popular on Netflix"/>
      <CardSlider data={getMoviesFromRange(50,60)} title="Action Movies"/>
    </Container>
  )
}


const Container = styled.div`
padding-left: 10px;
`;