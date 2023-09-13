import Logo from "../assets/icons/tv.png";
import Menu from "../assets/icons/Menu alt 4.png"
import Imdb from "../assets/icons/imdb.svg"
import Tomato from "../assets/icons/tomato.svg"
import Play from "../assets/icons/Play.svg"
import DropdownSearch from "./DropdownSearch";

const Header = () => {
  return (
    <div className="bg-[url('/Poster.png')] bg-cover bg-center w-full h-screen text-white flex justify-center font-custom max-sm:w-full">
      <div className="w-11/12 ">
        <div id="header" className="flex justify-between mt-10 max-sm:w-full">
          <div className="flex items-center gap-x-6 max-sm:gap-2">
            <img src={Logo}/>
            <p className="font-bold text-lg ">MovieBox</p>
          </div>
          <DropdownSearch/>
          
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
