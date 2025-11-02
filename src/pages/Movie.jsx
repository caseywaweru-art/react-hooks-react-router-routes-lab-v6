import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  const movieId = params.id;
  console.log(movieId);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`http://localhost:4000/movies/${movieId}`);
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMovies();
  }, [movieId]);

  if(!movie){
    return <div>Loading...</div>
  }else {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>{ movie.title }</h1>
          <p>{ movie.time }</p>
          {movie.genres.map((genre, index) => <span key={index}>{genre}</span>)}
        </main>
      </>
    );
  }
};

export default Movie;
