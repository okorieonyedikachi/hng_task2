import { MouseEventHandler } from "react";

interface ModalProps {
  results: {
    title: string;
    release_date: string;
    poster_path: string;
  }[];
  closeBtn: MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ results, closeBtn }: ModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 font-custom">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative w-full h-5/6 p-4 rounded-lg shadow-lg flex h-1/2 flex-col max-sm:w-11/12 bg-white">
        <button
          className="absolute top-2 right-2 h-10 bg-red-200 text-gray-600 hover:text-gray-800 w-10 rounded- text-lg font-extrabold font-bold "
          onClick={closeBtn}
        >
          X
        </button>
        <div className=" overflow-y-auto mt-10 h-full text-black">
          {results?.length > 0 ? (
            results?.map((result) => {
              return (
                <>
                  <div className="mb- h-24 flex items-center gap-4">
                    <div className="h-24 max-sm:h-24 ">
                      <img
                        src={`https://image.tmdb.org/t/p/original${result.poster_path}`}
                        alt=""
                        className="w-24 h-full object-scale-down"
                      />
                    </div>
                    <p className="font-bold text-2xl max-sm:text-sm ">
                      {result.title}
                    </p>
                    <p className="font-bold text-lg max-sm:text-sm ">
                      {result.release_date}
                    </p>
                  </div>
                  <hr className="mb-3" />
                </>
              );
            })
          ) : (
            <div className="font-extrabold flex items-center">
              Movie Not Found...
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
