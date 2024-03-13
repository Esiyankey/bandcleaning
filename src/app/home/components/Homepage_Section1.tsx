import React from "react";
import Image from "next/image";
import IconImageComponent from "./IconImageComponent";

export const Homepage_Section1 = () => {
  const iconImage = [
    {
      src: "/images/Ellipse1.png",
      alt: "icon image here",
      width: 5,
      height: 5,
      top: "44px",
      left: `${(1677 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    // {
    //   src: "/images/Ellipse4.png",
    //   alt: "icon image here",
    //   width: 10,
    //   height: 10,
    //   top: "132px",
    //   left: `${(1646 / 1920) * 1200}px`, // Adjusted for 1200px width
    // },
    {
      src: "/images/Ellipse3.png",
      alt: "icon image here",
      width: 9,
      height: 9,
      top: "124px",
      left: `${(1750 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/Ellipse6.png",
      alt: "icon image here",
      width: 9,
      height: 9,
      top: "380px",
      left: `${(1558 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    // {
    //   src: "/images/Ellipse5.png",
    //   alt: "icon image here",
    //   width: 10,
    //   height: 10,
    //   top: "500px",
    //   left: `${(988 / 1920) * 1200}px`, // Adjusted for 1200px width
    // },
    {
      src: "/images/Ellipse7.png",
      alt: "icon image here",
      width: 9,
      height: 9,
      top: "100px",
      left: `${(1450 / 1920) * 1200}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/Ellipse8.png",
      alt: "icon image here",
      width: 7,
      height: 7,
      top: "200px",
      left: `${(1511 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/Ellipse4.png",
      alt: "icon image here",
      width: 9,
      height: 9,
      top: "52px",
      left: `${(1786 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/WavyLine.png",
      alt: "icon image here",
      width: 70,
      height: 70,
      top: "101px",
      left: `${(5 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/WavyLine.png",
      alt: "icon image here",
      width: 70,
      height: 70,
      top: "407px",
      left: `${(1890 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
    {
      src: "/images/WavyLine.png",
      alt: "icon image here",
      width: 70,
      height: 70,
      top: "10px",
      left: `${(1000 / 1920) * 1450}px`, // Adjusted for 1200px width
    },
  ];
  
  

  return (
    <>
      <div className="h-[600px] bg-[#f9feff] relative">
          <IconImageComponent iconImage={iconImage} />
        <div className=" flex items-center justify-between w-margin ">
          <div>
            <h5 className="small-header">We work for you</h5>
            <h2 className="large-header">
              Make your home <br /> shiny and clean!
            </h2>
            <p className="paragraph  w-[480px] ">
              Simple steps for clean and healthy environment. we provide a wide
              range of services for the cleaniness and comfort of your home.
            </p>
            <div className="flex gap-5">
              <button className="btn bg-primary">Book a Schedule </button>
              <button className="btn bg-[#448ab5]">Our Best Offer</button>
            </div>
          </div>
          <div>
            <Image
              src="/images/Rectangle_.png"
              alt="Example Image"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};
