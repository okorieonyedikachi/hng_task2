import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

const Footer = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="max-sm:w-full w-2/4 flex flex-col items-center ">
        <div className="flex gap-6">
          <img src={instagram} />
          <img src={facebook} />
          <img src={twitter} />
          <img src={youtube} />
        </div>
        <div className="flex w-full gap-6 justify-center text-sm mt-4">
          <p>Conditions of Use</p>
          <p>Privacy & Policy</p>
          <p>Press Room</p>
        </div>
        <div className="text-sm mt-4">© 2021 MovieBox by Raveen </div>
      </div>
    </div>
  );
};

export default Footer;
