import React from "react";

const CarouselOne = () => {
  return (
    <div className="h-fit mb-80">
      <div className="bg-neutral-700 h-64 rounded-b-[50%] p-8">
        <div className="grid grid-flow-col gap-20 justify-center pt-36">
          <div className="h-80 w-80 bg-red-700 hover:bg-red-700 hover:scale-150 transition duration-300 ease-in-out"></div>
          <div className="h-64 w-64 bg-blue-600 hover:bg-blue-600 hover:scale-150 transition duration-300 ease-in-out mt-10"></div>
          <div className="h-80 w-80 bg-red-400 hover:bg-red-400 hover:scale-150 transition duration-300 ease-in-out"></div>
          <div className="h-64 w-64 bg-teal-200 hover:bg-teal-200 hover:scale-150 transition duration-300 ease-in-out mt-10"></div>
        </div>
      </div>
    </div>
  );
};

export default CarouselOne;
