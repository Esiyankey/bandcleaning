import React,{FC} from 'react'
import Image from 'next/image';



interface IconImage {

  src: string;
  alt: string;
  width: number;
  height: number;
  top: string;
  left: string;
}


const IconImageComponent: React.FC<{ iconImage: IconImage[] }> = ({ iconImage }) => {


  return (
    <div >
    {iconImage.map((item) => (
      <Image
        key={item.src}
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
          style={{ top: item.top, left: item.left }}
          className='I-image'
      />
    ))}
  </div>
  )
}

export default IconImageComponent