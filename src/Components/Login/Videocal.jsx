import React from 'react'
import endcall from './chat/endcall.svg'
import mic  from './chat/Mic.svg';
import videofile from './chat/videocal.mp4';

const VideoCall = () => {
  return (
    <div className="relative h-[400px] md:h-[550px] 2xl:h-[600px] w-[300px] mx-auto md:w-[400px] 2xl:w-[400px] fle rounded-[40px] overflow-hidden">
      {/* Video background */}
     

<video src={videofile} />
      
      {/* Controls overlay */}
      <div className="absolute bottom-6 left-6 flex justify-center gap-4  bg-black/15 backdrop-blur-3xl px-8 py-4 rounded-[30px]">
      
          <img src='https://img.freepik.com/free-psd/3d-render-young-businesswoman-with-long-brown-hair-wearing-light-blue-blazer-white-shirt-she-looks-friendly-approachable-perfect-avatar-professional-woman_632498-32059.jpg' className="w-16 hover:cursor-pointer rounded-full " />
       
        
        <img src={mic}  alt="mic" className='w-16  rounded-full hover:cursor-pointer ' />
        
       
          <img src={endcall} alt='endcall' className='w-16 rounded-full hover:cursor-pointer' />
  
      </div>
    </div>
  );
};

export default VideoCall;
