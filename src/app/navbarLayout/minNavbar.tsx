import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaPinterest } from "react-icons/fa";

const MinNavbar = () => {
  return (
    <div className="h-12 bg-[#f9feff]  ">
      <div className=" flex justify-between items-center pt-2 w-margin">
        <h3>
          Call for free estimate! we are always available:{" "}
          <span className="text-primary">059-877-5758</span>{" "}
        </h3>
        <div className="flex gap-4 text-primary">
          <FaFacebookF className="icons" />
          <FaInstagram className="icons" />
          <CiTwitter className="icons" />
          <FaPinterest className="icons" />
        </div>
      </div>
    </div>
  );
};

export default MinNavbar;
