import React from "react";
import discord from "../assets/discord.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";

function Footer() {
  return (
    <footer id="contactUs" className="bg-black">
      <div className="p-10 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <div className="mb-5 text-center">
              <h3 className="font-bold uppercase pb-4">Kave Blocks</h3>
              <p className="text-justify">
                A creative digital agency that provides enterprise-level
                marketing strategies and one-of-a-kind design and development
                solutions to our valued clients.
              </p>
            </div>
            <div className="mb-5 text-center">
              <h3 className="font-bold uppercase pb-4">Useful Links</h3>
              <a href="">Home</a> <br />
              <a href="">About Us</a> <br />
              <a href="">Services</a> <br />
              <a href="">Terms of service</a> <br />
              <a href=""> Privacy policy</a> <br />
            </div>
            <div className="mb-5 text-center">
              <h3 className="font-bold uppercase pb-4">Contact Us</h3>
              <strong>Whatsapp:</strong> +639153530821 <br />
              <strong>Email:</strong> LFG@kaveblocks.com <br />
              <br />
              {/* Socmed */}
              <div className="flex flex-row justify-center ">
                <a
                  href="https://www.facebook.com/Kave-Blocks-111066908245716/"
                  target="_blank"
                  className="p-4 "
                >
                  <img src={facebook} alt="facebook" />
                </a>
                <a
                  href="https://discord.gg/5ryewKht7A"
                  target="_blank"
                  className="p-4"
                >
                  <img src={discord} alt="discord" />
                </a>
                <a
                  href="https://www.facebook.com/Kave-Blocks-111066908245716/"
                  target="_blank"
                  className="p-4"
                >
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <p className="text-center text-white">
          © Copyright MMAKTech. All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
