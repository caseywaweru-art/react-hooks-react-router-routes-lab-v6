import { useEffect, useState, Fragment } from "react";
import NavBar from "../components/NavBar";

function Actors() {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/actors")
      .then(r => r.json())
      .then(data => setActors(data))
      .catch(error => console.error(error))
  },[]);

  const actorsList = actors.map(actor => {
      return(
        <Fragment key={actor.id}>
        <article>
          <h2>{actor.name}</h2>
          <ul>
           {actor.movies.map(( movie, index ) => <li key={index}>{movie}</li>)}
         </ul>
        </article>
        </Fragment>
    )});

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Actors Page</h1>
        { actorsList }
      </main>
    </>
  );
};

export default Actors;
