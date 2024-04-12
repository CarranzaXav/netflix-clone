import React, { useState, useEffect } from 'react'
import axios from '../utils/axios';
import requests from '../request';
import './Banner.css'
import { useNavigate } from 'react-router-dom';


        //-----icons-------- //
import {FaPlay} from "react-icons/fa";
import {AiOutlineInfoCircle} from "react-icons/ai";


export default React.memo(function Banner() {
const [movie, setMovie] = useState([]);
const navigate = useNavigate();

useEffect(() => {
    async function fetchData(){
    const request = await axios.get(requests.fetchTrending);
    setMovie(
        request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
    );
    return request;
    }
    fetchData();
}, []);



//We can use this line to shorten a bio to n amount and add "..." to indicate theres more

function truncate(str,n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
}

  return (
    <header className='banner' loading='eager'
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`    }}
    > 
    <div className='bannerContents'>
        <h1 className='bannerTitle'>
    {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='bannerButtons'>
            <button className='bannerButton' onClick={()=>navigate('/player')}><FaPlay/>  Play</button>
            <button className='bannerButton' onClick={() => navigate('/favorites')}>My Favorites</button>
        </div>
        <h1 className='bannerDescription'>
        {truncate(movie?.overview, 150)} <AiOutlineInfoCircle/>
        </h1>
      
    </div>
      <div className='bannerBottom'></div>
    </header>
  );
});




