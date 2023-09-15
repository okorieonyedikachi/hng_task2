import { useEffect, useState } from "react";
import Poster from "../assets/images/Poster Image.png";


const Modal = () => {
  const [searchData, setSearchData] = useState([])

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTg3MzA4NmU5OWY0Y2MxNWE4MmUwMmViOGI1NWE0MyIsInN1YiI6IjY0ZmY2ZTEyMGJiMDc2MDBjNGEwYjA2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KQR4dRwsELAkFyiXAD1AtUa53XuGqYlEbr0Gr3ENp0o'
    }
  };

  useEffect(() => {
    const searchRequest = () => { 
      fetch(`https://api.themoviedb.org/3/search/movie?query=${}`, options)
        .then(response => response.json())
        .then((data) => setSearchData(data))
        .catch(err => console.error(err));
    }
    console.log(searchData);
    
  })
  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 font-custom">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full h-5/6 p-4 rounded-lg shadow-lg flex h-1/2 flex-col max-sm:w-11/12 bg-white">
        <button className="absolute top-2 right-2 h-10 bg-orange-500 text-gray-600 hover:text-gray-800 font-bold ">
          X
        </button>

        <div className=" overflow-y-auto mt-10 h-full text-black">
          
          <div className="mb- h-24 flex items-center gap-4">
            <div className="h-24 max-sm:h-24 ">
              <img src={Poster} alt="" className="w-24 h-full object-scale-down" />
            </div>
            <p className="font-bold text-2xl max-sm:text-sm ">
              Stranger Things
            </p>
            <p className="font-bold text-lg max-sm:text-sm ">2022-3-30</p>
          </div>
          <hr className="mb-3" />

          
        </div>
      </div>
    </div>
  );
};

export default Modal;
