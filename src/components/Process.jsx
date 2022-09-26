import React from "react";
import img1 from "../assets/undraw-img8.svg";
import blockchain from "../assets/blockchain.png";
import binance from "../assets/binance.png";
import ethereum from "../assets/ethereum.png";
import solana from "../assets/solana.png";
import thorchain from "../assets/Thorchain.png";

function Process() {
  return (
    <section className="text-center md:p-16 p-10">
      <div className="">
        <h1 className="justify-center text-3xl md:text-5xl font-black">
          Our Process
        </h1>
        <p class=" md:text-2xl text-xl mt-3 ">
          The stages we go through when we take on a project
        </p>
        <div className="border-b-8 mx-4 md:mx-36 border-black pt-3"></div>
        <div className="flex justify-center">
          <img className="md:p-20 p-5 flex justify-center " src={img1} alt="" />
        </div>
      </div>

      <div className="grid md:grid-flow-col">
        {/* Technologies we work with */}
        <div className="grid lg:grid-row-2 justify-center">
          <div className="grid grid-row-4 ">
            <h2 class="md:justify-start justify-center flex  text-2xl md:text-4xl font-bold">
              <span class="border-b-4 border-y-orange-400 text-orange-400">
                The
              </span>
              Technologies We Work
            </h2>
            <p class="md:text-2xl text-xl ">
              We use the latest technological solutions to offer you
              premium,high value services
            </p>
          </div>
          <div class="m-10">
            <img
              class="flex justify-center mt-5 text-center"
              src={blockchain}
              alt=""
            />
          </div>
        </div>

        {/* Blockchain Development */}
        <div className="lg:pt-44 md:pt-36">
          <h2 class="justify-center flex mx-2 text-2xl md:text-4xl font-bold">
            <span class="border-b-4 border-y-orange-400 text-orange-400 mx-4">
              Blockchain
            </span>
            Development
          </h2>
          <p class="m-2 md:text-2xl text-xl  text-center">
            We offer the most effective blockchain services and solutions to
            help your <br />
            business grow and achieve scalable results.
          </p>
          <div class="grid justify-center  grid-cols-2 gap-8 mx-24 mt-9">
            <div class="flex justify-center">
              <img src={ethereum} alt="" />
            </div>
            <div class="flex justify-center">
              <img src={binance} alt="" />
            </div>
            <div class="flex justify-center">
              <img src={solana} alt="" />
            </div>
            <div class="flex justify-center">
              <img src={thorchain} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;
