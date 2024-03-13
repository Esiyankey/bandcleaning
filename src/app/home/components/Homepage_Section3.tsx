import React from 'react'
import Image from 'next/image'

export const Homepage_Section3 = () => {
  return (
    <div className='bg-[#fdf5f5]'>
    <div className=' flex flex-col w-margin justify-center items-center'>
         <h5 className="small-header"> We make life easier </h5>
      <h2 className="large-header leading-tight text-center">We offer a wide variety <br/> of cleaning service </h2>
    </div>
    <div className="flex justify-around items-center">
        <div className="gloves-div">
          <div>
            <Image
              src="/images/Ellipse10.png"
              alt="gloves image"
              width={90}
              height={90}
            />
          </div>
          <h6 className="text-sm text-[#1d4352]  mb-2">Meet your cleaning expert</h6>
          <p className="text-[8px] text-[#555555] mb-1">
            When you choose us as service partner we bring expertise and
            experience as standard
          </p>
          <a href="#" className="text-primary text-xs">Read more</a>
        </div>
        <div className="gloves-div">
          <div>
            <Image
              src="/images/Ellipse10.png"
              alt="gloves image"
              width={90}
              height={90}
            />
          </div>
          <h6 className="text-sm text-[#1d4352] mb-2">Get professional cleaning</h6>
          <p className="text-[8px] text-[#555555] mb-1">
            When you choose us as service partner we bring expertise and
            experience as standard
          </p>
          <a href="#" className="text-primary text-xs">Read more</a>
        </div>
        <div className="gloves-div">
          <div>
            <Image
              src="/images/Ellipse10.png"
              alt="gloves image"
              width={90}
              height={90}
            />
          </div>
          <h6  className="text-sm text-[#1d4352] mb-2">Enjoy the clean space</h6>
          <p className="text-[8px] text-[#555555] mb-1">
            When you choose us as service partner we bring expertise and
            experience as standard
          </p>
          <a href="#"  className=" text-primary text-xs">Read more</a>
        </div>
      </div>
    </div>
  )
}
