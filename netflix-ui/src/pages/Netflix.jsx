import React, {useEffect, useState,} from 'react';
import styled from 'styled-components';
import Slider from '../components/Slider';
import Nav from '../components/Nav';
import Banner from '../components/Banner';
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, getGenres } from '../store';
// import requests from '../request';


export default function Netflix() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  },[dispatch]);

  useEffect(()=>{
    if(genresLoaded){
      dispatch(fetchMovies({genres, type: "all"}));
    }
  },[genresLoaded, dispatch,genres]);

  onAuthStateChanged(firebaseAuth, (currentUser)=>{
    if(!currentUser) navigate("/login");
  })

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false: true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
    <Nav isScrolled={isScrolled}/>
    <div className="hero">
    <Banner movie={movies}/>
    </div>
    <Slider movies={movies}/>
  </Container>
  )
}

const Container = styled.div``