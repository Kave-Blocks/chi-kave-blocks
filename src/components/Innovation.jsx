import React from "react";
import imginnovation from "../assets/innovation.png";
import img1 from "../assets/undraw-img7.svg";

function innovation() {
  return (
    <section className="container md:p-20 p-10 mx-auto ">
      <div className="md:border-t-[15px] border-t-[6px] border-black md:p-10 p-5">
        <img src={imginnovation} alt="" />
      </div>
      <div className="grid md:grid-cols-6 grid-cols-2  gap-6 md:p-5 p-0 text-center border-design font-bold">
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600 ">
          FAST
        </h1>
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600">
          RELIABLE
        </h1>
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600">
          SECURE
        </h1>
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600">
          SOLUTION
        </h1>
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600">
          SAFE
        </h1>
        <h1 className="border-solid rounded-lg border-2 px-6 py-2 border-amber-600">
          CREATIVE
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 pt-16">
        <img src={img1} alt="" />
        <div className="grid grid-rows bg-orange-400 text-white md:p-12  p-8 rounded-3xl">
          <div className="font-black md:text-6xl text-4xl">About Us</div>
          <h1 className="text-xl">Creative solutions, creative results.</h1>
          <p className="text-justify">
            Kave Academy is a creative digital agency that provides
            enterprise-level marketing strategies and one-of-a-kind design and
            development solutions to our valued clients. We specialize in
            creating smooth and seamless web and mobile applications, websites,
            incorporating the best digital marketing strategies, and offering
            other e-commerce solutions to help businesses grow and gain a
            competitive edge in the digital marketplace.
            <br />
            <br />
            We are a dynamic and versatile company and we don’t limit ourselves
            to specific industries only. We are here to assist businesses from
            all sizes and categories and in any industry. We provide custom
            services to each and every client to ensure that all our strategies
            and results are aligned with our client’s unique and diverse needs.
            At Kave Academy, we help create the right decisions for your
            business and connect you with the digital life. MMAKTech combines
            creative thinking, smart development, and a well-defined business
            strategy to deliver only the best results to all our clients.
          </p>
        </div>
      </div>
    </section>
  );
}

export default innovation;
