import React from "react";
import CardGallery from "./components/CardGallery";

const HeroFour = () => {
  return (
    <div className="mt-96">
      <div className="grid justify-start mx-28">
        <h1 className="font-bold text-5xl pb-16">Discover More</h1>
        <div className="flex pb-16">
          <div className="flex justify-start gap-6">
            <button className="btn btn-outline rounded-3xl btn-primary">
              All Categories
            </button>
            <button className="btn btn-outline rounded-2xl btn-primary">
              Art
            </button>
            <button className="btn btn-outline rounded-3xl btn-primary">
              Celebrities
            </button>
            <button className="btn btn-outline rounded-3xl btn-primary">
              Gaming
            </button>
            <button className="btn btn-outline rounded-3xl btn-primary">
              Sport
            </button>
            <button className="btn btn-outline rounded-3xl btn-primary">
              Music
            </button>
          </div>
        </div>
        <div className="ml-24">
          <CardGallery />
        </div>
      </div>
    </div>
  );
};

export default HeroFour;
