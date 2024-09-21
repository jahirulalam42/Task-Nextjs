import React from "react";
import Navbar from "./Navbar";
import CarouselOne from "./CarouselOne";
import HeroOne from "./HeroOne";
import HeroTwo from "./HeroTwo";
import CarouselTwo from "./CarouselTwo";
import HeroThree from "./HeroThree";
import HeroFour from "./HeroFour";

const page = () => {
  return (
    <div>
      <Navbar />
      <CarouselOne />
      <HeroOne />
      <HeroTwo />
      <CarouselTwo />
      <HeroThree />
      <HeroFour />
    </div>
  );
};

export default page;
