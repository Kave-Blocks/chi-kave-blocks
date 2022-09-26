import { useState } from "react";
import logo from "../assets/logo.png";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import React from "react";
import styles from "../style";
import discord from "../assets/discord.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import videobg from "../assets/video.mp4";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="container-fluid mainHero">
      <video className="video-bg" autoplay muted loop>
        <source src={videobg} type="video/mp4" />
      </video>
      {/* <div className="container mx-auto md:border-8 md:border-amber-500 "> */}
      <div className="container mx-auto ">
        <div
          className={`${styles.paddingX} ${styles.flexCenter}  w-full flex py-12 justify-between items-center `}
        >
          <img
            src={logo}
            alt="kave-blocks"
            className="md:w-[200px] md:h-[50px] w-[130px] h-[35px]"
          />

          <ul className="list-none md:flex hidden justify-end items-center flex-1 font-poppins font-normal cursor-pointer text-[16px] text-white">
            <li className="mr-16 text-xl">Home</li>
            <li className="mr-16 text-xl">About Us</li>
            <li className="mr-16 text-xl">Services</li>
            <li className="mr-16 text-xl">Portfolio</li>
            <li className="text-xl">Contact Us</li>
          </ul>

          <div className="md:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain"
              onClick={() => setToggle((prev) => !prev)}
            />
            <div
              className={`${
                toggle ? "flex" : "hidden"
              } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar  `}
            >
              <ul className="list-none flex flex-col justify-end items-center flex-1 font-poppins font-normal cursor-pointer text-[16px] text-white">
                <li className="mb-6 text-xl">Home</li>
                <li className="mb-6 text-xl">About Us</li>
                <li className="mb-6 text-xl">Services</li>
                <li className="mb-6 text-xl">Portfolio</li>
                <li className="text-xl">Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <section id="home" className={`${styles.paddingY} flex flex-col  `}>
          <div
            className={`flex-1 ${styles.flexCenter}  flex-col xl:pt-18 pt-10 sm:pt-6`}
          >
            <div className="container flex flex-col items-center py-[6px] px-4 mb-2 w-full text-center">
              <h1 className="flex-1 font-extrabold font-poppins md:text-[100px] text-[60px] text-amber-500 pb-12">
                KAVE BLOCKS
              </h1>
              <div className="md:mx-36">
                <p className="text-white container-fluid text-lg bg-gradient rounder-[10px] md:py-24 md:px-24 mx-10 rounded-3xl p-10">
                  We specialize in creating smooth and seamless web and mobile
                  applications, websites, incorporating the best digital
                  marketing strategies, and offering other e-commerce solutions
                  to help businesses grow and gain a competitive edge in the
                  digital marketplace.
                </p>
              </div>

              <button className="pt-20 text-lg font-medium text-white hover:text-amber-500">
                <a
                  href=""
                  className="border-[4px] py-4 px-12 rounded-xl border-amber-500 hover:border-amber-600"
                >
                  GET STARTED
                </a>
              </button>
              {/* SOCMED ACCOUNTS */}
              <div className="flex flex-row pt-20 text-center">
                <a href="" className="mr-40 ">
                  <img src={discord} alt="discord" />
                </a>
                <a href="" className="mr-40">
                  <img src={instagram} alt="instagram" />
                </a>
                <a href="" className="mr-40">
                  <img src={facebook} alt="facebook" />
                </a>
                <a href="" className="mr-0">
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>

    // Hero Section
  );
};

export default Navbar;
