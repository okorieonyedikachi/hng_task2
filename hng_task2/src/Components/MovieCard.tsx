import Poster from "../assets/images/Poster Image.png";
import favBtn from "../assets/icons/Favorite.svg"

const MovieCard = () => {
  return (
    <div className="flex justify-center font-custom">
      <div className="w-10/12 h-max  flex flex-col items-center">
        <div className=" text-2xl w-full font-bold my-4 flex justify-around"><h1>Top 10 List</h1></div>
        <article className=" w-11/12 h-full flex flex-wrap justify-center gap-10 py-4">
          <div id="movie-card" className="w-60 h-max" data-testid="movie-card">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} data-testid="movie-poster" alt="movie-poster"/>
            </div>
            <div className="w-full bg-green-400 flex justify-end" ><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold" data-testid="movie-title">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2" data-testid="movie-release-date">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full  flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
          <div id="movie-card" className="w-60 h-max ">
            <div className="w-full h-80">
              <img id="movie-poster" className="" src={Poster} />
            </div>
            <div className="w-full bg-green-400 flex justify-end"><button><img src={favBtn}/></button></div>
            <p id="movietitle" className="mt-4  font-bold">
              Stranger Things
            </p>
            <p id="movie-release-date" className="mt-2 ">
              USA, 2023
            </p>
            <p>Adventure, Action</p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MovieCard;
