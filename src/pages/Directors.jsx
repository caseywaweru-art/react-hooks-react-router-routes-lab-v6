import { Fragment, useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Directors() {
  const [directors, setDirectors] = useState({});

  useEffect(() => {
    fetch("http://localhost:4000/directors")
      .then(r => r.json())
      .then(data => setDirectors(data))
      .catch(error => console.error(error))
  }, []);

  // visit this later
  const directorList = directors.map(director => {
    return (
      <Fragment key={director.id}>
        <article>
          <h2>{director.name}</h2>
          <ul>
            {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
          </ul>
        </article>
      </Fragment>
    )})

  if(!directors) {
    return <div>Loading...</div>
  }else {
    return (
      <>
        <header>
          <NavBar />
        </header>
        <main>
          <h1>Directors Page</h1>
          { directorList }
        </main>
      </>
    )
  }
}

export default Directors;
