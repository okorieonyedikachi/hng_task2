import Logo from "../assets/icons/tv.png";
import Menu from "../assets/icons/Menu alt 4.png"
import Imdb from "../assets/icons/imdb.svg"
import Tomato from "../assets/icons/tomato.svg"
import Play from "../assets/icons/Play.svg"
import Modal from "./Modal";
import { useState} from "react";

const Header = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false)
  
 

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setSearchTerm(inputText);

    // Open the modal when the user starts typing
    if (inputText.trim() !== '') {
      setIsModalOpen(true);
    } else {
      setIsModalOpen(false);
    }
  };
  return (
    <div className="bg-[url('/Poster.png')] bg-cover bg-center w-full h-screen text-white flex justify-center font-custom max-sm:w-full">
      <div className="w-11/12 ">
        <div id="header" className="flex justify-between mt-10 max-sm:w-full">
          <div className="flex items-center gap-x-6 max-sm:gap-2 max-sm:hidden">
            <img src={Logo}/>
            <p className="font-bold text-lg ">MovieBox</p>
          </div>
          <div className="relative flex items-center w-1/2">
      <input
        type="text"
        className="w-full h-6 bg-transparent border rounded-md p-4 text-white max-sm:text-xs max-sm:w-full"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 "
        onClick={()=>setIsModalOpen(true)}
      >
        <path
          d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {isModalOpen && <Modal searchTerm={searchTerm} />}
    </div>
          
          <div className="flex w-28 items-center justify-center gap-6 max-sm:gap-2">
            <p>Sign In</p>
            <img src={Menu} alt="menu" />
          </div>
        </div>
        <div id="description-box" className="w-1/4 mt-40 max-sm:w-11/12 max-sm:mt-24">
            <p className="font-bold text-3xl whitespace-normal">John Wick 3: Parabellum</p>
            <div className="flex gap-10 my-4 ">
                <span className="flex gap-2"><img src={Imdb}/> 86.0/100</span>
                <span className="flex gap-2"><img src={Tomato}/>97%</span>
            </div>
            <p className="mb-4">John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.</p>
            <button className="flex gap-2 w-36 h-9 items-center px-2 bg-red-500"><img src={Play}/>Watch Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
