import React from "react";
import karen from "../assets/karen.jpg";
import dave from "../assets/dave.jpg";
import daren from "../assets/daren.jpg";

function Team() {
  return (
    <section id="teams" className="container mx-auto md:p-20 p-10">
      <div>
        <h2 className="md:text-4xl text-3xl font-bold text-left">
          INTRODUCING OUR TEAM
        </h2>
        <p className="my-5 lg:text-xl font-medium text-left">
          We are a team of highly enthusiastic and creative individuals with a
          combination of cutting-edge technological knowledge in digital
          marketing, software development, and business on a global scale.
        </p>
        <div className="linebgdark">
          <div className="h-1 mx-0 md:mx-0 lg:mx-0 mt-3 bg-black"></div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-10">
        <div>
          <img src={karen} alt="" />
        </div>
        <div>
          <img src={daren} alt="" />
        </div>
        <div>
          <img src={dave} alt="" />
        </div>
      </div>
      <p className="pt-10 text-center lg:text-xl font-medium">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        cupiditate est doloremque molestias ducimus suscipit facere aliquid,
        officiis ullam dicta atque eos velit dolor provident deserunt eaque amet
        cumque. Ipsam rem ipsa sint numquam quasi molestias quaerat commodi
        distinctio obcaecati repellat autem, praesentium, iste impedit neque
        aperiam? Deserunt molestias libero architecto corporis, voluptas illo
        optio at quaerat atque. Numquam, unde.
      </p>
    </section>
  );
}

export default Team;
