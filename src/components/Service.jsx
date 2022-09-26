import React from "react";
import icon from "../assets/icon.png";
import img2 from "../assets/undraw-img4.svg";
import rectangle from "../assets/rec-right.svg";
import test from "../assets/test.png";

function Service() {
  return (
    <section className="container-fluid mx-auto">
      <div className="container mx-auto p-10">
        <div className="uppercase font-black md:text-6xl text-4xl">
          Services We Offer
        </div>
        <h1 className="text-xl pt-9">
          Choose from our varied list of services and contact us today to learn
          more about how we can help your business.
        </h1>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-20 text-center py-9 md:px-20 px-10">
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Blockchain Development</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Web Design and Development</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Mobile Development</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Social Media Management</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Graphic Design</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Video Editing</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Smart Contracts</h1>
          </div>
          <div className="justify-self-center">
            <img className="" src={icon} alt="" />
            <h1>Customer Journey</h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 text-center bg-black text-white p-12">
        <div>
          <span className="md:text-5xl text-4xl font-bold">42</span> <br />
          Happy Client
        </div>
        <div>
          <span className="md:text-5xl text-4xl  font-bold">152</span> <br />{" "}
          Project
        </div>
        <div>
          <span className="md:text-5xl text-4xl  font-bold">465</span> <br />{" "}
          Hours of work
        </div>
      </div>

      <div className="border-8 border-black grid md:grid-cols-2 text-left p-10">
        <div className="md:pl-20">
          <h1 className="text-4xl italic font-extrabold">Need a website?</h1>
          <p className="pt-3 text-xl">
            We can create a stunning website for your business and you can use
            it for FREE for one month.
          </p>
        </div>
        <div>
          <button className="pt-8 font-bold text-xl text-amber-500 md:pl-36">
            <a
              className="border-4 rounded-lg px-5 py-2 border-amber-500"
              href=""
            >
              GET IT HERE
            </a>
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-10 md:p-16 p-10">
        <div className="md:p-16 text-justify">
          <h1 className="lg:text-4xl text-2xl font-bold pb-8">
            We aim to eliminate the task of dividing your project between
            different agency, corporate.
          </h1>
          <p className="md:text-xl text-md">
            We are a team of highly enthusiastic a creative individuals with a
            combination of cutting-edge technological knowledge in digital
            marketing,software development, and business on a global scale.
            <br />
            <br />
            We delve deep to evaluate all the aspects of a particular
            business,understand our client’s business nature, core values,
            customer behavior, and overall online presence to plan and implement
            the best strategies to capture the minds of the audience.
            <br />
            <br />
            We are a team of highly enthusiastic and creative individuals with a
            combination of cutting-edge technological knowledge in digital
            marketing, software development, and business on a global scale.
          </p>
        </div>
        <div className="md:p-16">
          <img src={img2} alt="" />
          {/* <img className="-z-1 absolute" src={rectangle} alt="" /> */}
        </div>
      </div>

      <div className=" bg-black text-center md:p-20 p-10">
        <div className="pt-5 text-white">
          <h2 class="md:text-5xl text-3xl font-extrabold px-10">
            We help create the right for your business
          </h2>
          <br />
          <br />
          <p class="lg:text-2xl font-semi sm:text-lg px-15">
            MMAKTech combines creative thinking, smart development, and a
            well-defined
            <br /> business strategy to deliver only the best results to all our
            clients.
            <br />
            <br />
            MMAKTech combines creative thinking, smart development, and a
            well-defined
            <br /> business strategy to deliver only the best results to all our
            clients.
          </p>
          <button class="lg:py-3 lg:px-10 py-2 px-4 lg:text-xl font-bold text-uppercase text-black text-md bg-white uppercase rounded-xl mt-12 hover:bg-orange-400 ease-in duration-300">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default Service;
