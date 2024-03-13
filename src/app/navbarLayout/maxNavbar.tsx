import Image from "next/image";
import React from "react";

const MaxNavbar = () => {
  return (
    <>
      <div className="h-56  opacity-70  ">
        <div className="  flex items-center justify-between z-50 w-margin ">
          <Image
            src="/images/nav-logo.png"
            alt="this is the page nav logo"
            width={180}
            height={180}
          />
          <div>
            <ul className="flex  gap-20 text-[1.4rem]">
              <li>Home</li>
              <li>Company</li>
              <li>Gallery</li>
              <li>Blog</li>
              <li>Service</li>
            </ul>
          </div>
          <button className="btn bg-primary hover:bg-blue-700">Request an estimate</button>
        </div>
      </div>
    </>
  );
};

export default MaxNavbar;
