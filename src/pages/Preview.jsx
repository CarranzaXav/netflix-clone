import React, {useState} from 'react'

export default function Preview() {
const [movies, setMovies] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setFilms(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl("");
        }else{
            movieTrailer(null ,{ tmdbId: movieData.id })
            .then((url)=>{
              console.log("url is "+url);
              const urlParams=new URLSearchParams(new URL(url).search);
              console.log("urlParamsn"+urlParams);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error)=> console.log(error));
        }
    }

      const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,},
    };

  return (
    <Container>
  Contents
    </Container>
  )
}
