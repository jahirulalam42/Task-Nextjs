import React from "react";
import Image from "next/image";

const HeroTwo = () => {
  return (
    <div>
      <div className="flex pt-12 px-6 md:px-20  items-center justify-center bg-hero min-h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-end">
            <h1 className="text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing
              <br />
              totam iste omnis beatae vel laborum nam ut explicabo labore a
              <br />
              illum blanditiis nobis, quis officia sapiente modi!
              <br />
              dolorem sint quisquam voluptatum quod pariatur
              <br />
              delectus quo rem sit quibusdam nulla earum dicta sequi dolore,
              <br />
              repellat aliquid quidem voluptatibus? Pariatur ipsum excepturi
              <br />
              quos veniam amet impedit rerum voluptatum tempore!
              <br />
            </h1>
            <div className="flex justify-center pt-6 pr-6">
              <button className="btn btn-outline btn-primary">
                Explore Now
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:pl-32">
            <Image
              className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              src="/Image4.png"
              alt="Example"
              width={500}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroTwo;
