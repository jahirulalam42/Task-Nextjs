import React from "react";
import CardCarousel from "./components/CardCarousel";

const CarouselTwo = () => {
  return (
    <div className="md:min-h-full">
      <div className="bg-emerald-500 h-72">
        <div className="container mx-auto p-4">
          <div className="flex justify-end">
            <CardCarousel />
          </div>
        </div>
      </div>

      <div className="bg-emerald-500 h-full">
        <div className="mx-32 pt-28">
          <h1 className="font-bold text-4xl pb-6">Overview</h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores
            <br />
            reiciendis minima dolores vitae culpa illum neque exercitationem
            vel.
            <br />
            Nisi, nemo beatae neque amet, at voluptatibus laudantium quia
            <br />
            consectetur harum quos reprehenderit repellendus quisquam obcaecati.
            <br />
            Officia quibusdam aliquam consequatur delectus, dolore consequuntur.
            <br />
            Tenetur rerum qui harum dolorum sit natus facere!
            <br />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;
