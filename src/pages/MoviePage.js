/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";

function MoviePage(props) {
  const routeParameters = useParams();
  console.log(routeParameters);

  return (
    <div>
      <h1>Star Wars: The Jedi Strikes Back</h1>
      <img src="https://m.media-amazon.com/images/M/MV5BMzhmNTg1NWYtNTUzNy00NWI0LTk1ZmYtODA1YTE0NGNkYWZkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg" />
      <p>Relaese Date: 1989</p>
      <p>
        The surviving members of the resistance face the First Order once again, and the legendary
        conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its
        end.
      </p>
    </div>
  );
}

export default MoviePage;
