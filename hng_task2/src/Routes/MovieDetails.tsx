import Poster from "../assets/images/Rectangle 29.png";

const MovieDetails = () => {
  return (
    <div className="font-custom flex h-screen">
      <div
        id="sidebar"
        className="w-1/6 bg-red-600 h-full rounded-tr-3xl rounded-br-3xl"
      >
        jsdnknfken
      </div>
      <div
        id="main-body"
        className="bg-green-600 w-5/6 ml-10 flex flex-col m-8 items-center"
      >
        <div className="w-full bg-orange-400 h-1/2">
          <img id="image-poster" src={Poster} className="w-full h-full" />
        </div>
        <div className="bg-purple-400 w-11/12 h-full  ">
          <div className="flex gap-20">
            <p>Top Gun: Maverick</p>
            <p>2022</p>
            <p>2h 10m</p>
          </div>
          <div id="left" className="w-4/6 bg-gray-500">
            <div>
              knrjaosdjoe
            </div>
          </div>
          <div id="right" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
