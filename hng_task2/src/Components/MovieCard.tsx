// import Poster from "../assets/images/Poster Image.png";
import { Link } from "react-router-dom";
import { LikeIcon } from "../assets/icons/Favorite";
// import favBtn from "../assets/icons/Favorite.svg";
import { useState, useEffect } from "react";

interface MovieProp {
  original_title: string;
  release_date: number;
  popularity: string;
  id: number;
  poster_path: string;
}
const MovieCard = () => {
  const [movies, setMovies] = useState<MovieProp[]>([]);
  const [toggle, setToggle] = useState(false);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTg3MzA4NmU5OWY0Y2MxNWE4MmUwMmViOGI1NWE0MyIsInN1YiI6IjY0ZmY2ZTEyMGJiMDc2MDBjNGEwYjA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQR4dRwsELAkFyiXAD1AtUa53XuGqYlEbr0Gr3ENp0o",
    },
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results.slice(0, 10)))
      .catch((err) => console.error(err));
  });

  return (
    <div className="flex justify-center font-custom">
      <div className="w-10/12 h-max  flex flex-col items-center">
        <div className=" text-2xl w-full font-bold my-4 flex justify-around">
          <h1>Top 10 List</h1>
        </div>
        <article className=" w-11/12 h-full flex flex-wrap justify-center gap-10 py-4">
          {movies?.length > 0 &&
            movies.map((movie) => {
              return (
                <div
                  id="movie-card"
                  className="w-60 h-max"
                  data-testid="movie-card"
                >
                  <div className="w-full h-80">
                    <img
                      id="movie-poster"
                      className=""
                      src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                      data-testid="movie-poster"
                      alt="movie-poster"
                    />
                  </div>
                  <div className="w-full flex justify-end">
                    <button className="pr-2" onClick={() => setToggle(!toggle)}>
                      <LikeIcon onLike={toggle} />
                      {/* <img src={LikeIcon} /> */}
                    </button>
                  </div>
                  <Link to={`/movies/${movie.id}`}>
                    <p
                      id="movietitle"
                      className="mt-4  font-bold text-lg"
                      data-testid="movie-title"
                    >
                      {movie?.original_title}
                    </p>
                    <div className="flex items-center mt-2 gap-2">
                      <p className="">Release Date:</p>
                      <p
                        id="movie-release-date"
                        data-testid="movie-release-date"
                      >
                        {movie?.release_date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <p>Popularity:</p>
                      <p>{movie?.popularity}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
        </article>
      </div>
    </div>
  );
};

export default MovieCard;
