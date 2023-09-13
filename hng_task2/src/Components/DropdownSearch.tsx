import React, { useState, useEffect } from "react";

const DropdownSearch = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <div className="relative flex items-center w-1/2">
      <input
        type="text"
        className="w-full h-6 bg-transparent border rounded-md p-4 text-white max-sm:hidden"
        placeholder="What do you want to watch?"
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-3 "
      >
        <path
          d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      {/* {loading && <div className="flex items-center pointer-events-none">
        <div className="w-4 h-4 border-t-2 border-blue-500 border-solid rounded-full animate-spin"></div>
      </div>} */}
      {/* <div className="mt-2"> */}
       
          {/* <div  className="py-2 px-4 hover:bg-gray-200 cursor-pointer">
            nkkern
          </div> */}
       
      {/* </div> */}
    </div>
  );
};

export default DropdownSearch;
