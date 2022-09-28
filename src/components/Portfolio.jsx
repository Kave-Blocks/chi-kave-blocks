import React from "react";
import styles from "../style";
import web1 from "../assets/website1.png";
import web2 from "../assets/website2.png";
import web3 from "../assets/website3.png";

function Portfolio() {
  return (
    // <!-- OUR PORTFOLIO  -->
    <section className="container-fluid my-12 relative">
      <div className="bg-black h-80 ">
        <div className="grid grid-rows-2 gap-4 text-white">
          <h1 className="flex justify-center mt-9 text-3xl sm:text-5xl md:text-5xl font-black">
            Portfolio
          </h1>
          <p className="flex justify-center sm:text-base md:text-2xl text-xl mt-3 ">
            Creative solutions and creative results
          </p>
        </div>
      </div>

      {/* <!-- Portfolio  --> */}
      <div className=" grid grid-cols-3 gap-2 h-120 m-5">
        <div className="flex justify-center ">
          <img src={web1} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={web2} alt="" />
        </div>
        <div className="flex justify-center">
          <img src={web3} alt="" />
        </div>
      </div>

      {/* <!-- PORTFOLIO PARAGRAPH  --> */}

      <div className="flex text-center mx-12 lg:mx-44 ">
        <p className="sm:text-base md:text-2xl text-xl mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictum lacus,
          orci justo viverra scelerisque. Neque, nulla vitae sit lectus
          egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Dictum lacus, orci justo viverra scelerisque. Neque, nulla vitae sit
          lectus egestas.
        </p>
      </div>
    </section>
  );
}

export default Portfolio;
