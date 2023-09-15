// import Poster from "../assets/images/Rectangle 29.png";
import Logo from "../assets/icons/Logo.svg"
import HomeIcon from "../assets/icons/Home.svg"
import Projector from "../assets/icons/Movie Projector.svg"
import Tv from "../assets/icons/TV Show.svg"
import Calendar from "../assets/icons/Calendar.svg"
import LogOut from "../assets/icons/Logout.svg"
import twoTickets from "../assets/icons/Two Tickets.svg"
import List from "../assets/icons/List.svg"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface DetailsProp {
  overview: string;
  runtime: number;
  release_date: string;
  title: string;
  backdrop_path: string; 
} 

const MovieDetails = () => {
  const { id } = useParams()

  const [details, setDetails] = useState<DetailsProp>([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTg3MzA4NmU5OWY0Y2MxNWE4MmUwMmViOGI1NWE0MyIsInN1YiI6IjY0ZmY2ZTEyMGJiMDc2MDBjNGEwYjA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQR4dRwsELAkFyiXAD1AtUa53XuGqYlEbr0Gr3ENp0o'
    }
  };
  useEffect(() => {
    const makeRequest = () => {
      fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
      .then(response => response.json())
      .then((data) => setDetails(data))
      .catch(err => console.error(err));
    }
    makeRequest();
  },[])
 

  console.log("details", details)
  return (
    <div className="font-custom w-full flex h-screen max-sm:w-full max-sm:h-screen">
      <div
        id="sidebar"
        className=" h-full rounded-tr-3xl rounded-br-3xl p-10 border-2 max-sm:hidden "
      >
        
          <img src={Logo} alt="movie-logo" className="pt-4 text-black"/>
          <div className="flex flex-col  gap-20 mt-20">
            <span className="flex gap-4 items-center"><img src={HomeIcon} /><p>Home</p></span>
            <span className="flex gap-4 items-center"><img src={Projector}/><p>Movies</p></span>
            <span className="flex gap-4 items-center"><img src={Tv}/><p>TV Series</p></span>
            <span className="flex gap-4 items-center"><img src={Calendar}/><p>Upcoming</p></span>
            <span className="flex gap-4 items-center"><img src={LogOut}/><p>Log out</p></span>
          </div>
      </div>
      <div
        id="main-body"
        className="w-5/6 ml-10 flex flex-col m-8 items-center max-sm:w-full max-sm:m-2"
      >
        <div className="w-full h-1/2 max-sm:">
          <img id="image-poster" src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`} className="w-full h-full max-sm:w-full" />
        </div>
        <div className=" w-11/12 h-full flex flex-col items-center">
          <div className="flex w-11/12 gap-20 mt-10 max-sm:w-full max-sm:flex-col max-sm:gap-2">
            <div className="flex gap-4 items-center"><p>Movie Title:</p> <p data-testid="movie-title" className="font-bold text-xl w-fit">{details?.title}</p> </div>
            <div className="flex gap-4 items-center"><p>Movie release:</p><p data-testid="movie-release-date" className="font-bold text-xl w-fit">{details?.release_date}</p></div>
            <div className="flex gap-4 items-center"><p>Runtime:</p> <p data-testid="movie-runtime" className="font-bold text-xl">{details?.runtime} mins </p> </div>
          </div>
          <section className=" w-full flex flex-col items-center">
            <div id="left" className="w-full h-fit mt-8 flex flex-col items-center max-sm:w-full">
              <div id="overview" className="whitespace-normal h-fit shadow-xl w-11/12 rounded-md p-4 max-sm:w-full" data-testid="movie-overview">
                {details?.overview}
              </div>
              <div className="bg-red-800 text-white h-14 flex items-center gap-3 px-4 rounded-lg my-4">
                <img src={twoTickets} />
                <p>See Showtimes</p>
              </div>
              <div className="bg-red-200 h-14 flex items-center gap-3 px-4 rounded-lg">
                <img src={List}/>
                <p>More watch Options</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
