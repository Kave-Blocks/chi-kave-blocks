import React from "react";
import testimonial from "../assets/testimonial.png";

function Testimonial() {
  return (
    <section>
      <div className="h-70 w-full bg-orange-500">
        <div className="grid grid-cols-2">
          <div className="content-center my-24 sm:my-12">
            <img
              className="rounded-full float-right h-36 w-36 sm:h-52 sm:w-52 lg:ml-96"
              src={testimonial}
              alt=""
            />
          </div>
          <div className="content-center my-24 sm:my-12 grid grid-row-2 text-white mx-4">
            <h1 className="text-3xl sm:text-5xl md:text-5xl">Testimonial</h1>
            <p className="text-md text-justify">
              "Kave Blocks Team really did some magic in creating our dream
              website into reallity."
            </p>
            <p className="text-xl  p-2">Claire Clifton | Hotel Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
