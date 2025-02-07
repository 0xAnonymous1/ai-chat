import React from 'react'
import endcall from './chat/endcall.svg'
import mic  from './chat/Mic.svg';

const VideoCall = () => {
  return (
    <div className="relative h-[400px] md:h-[550px] 2xl:h-[600px] w-[300px] mx-auto md:w-[400px] 2xl:w-[400px] fle rounded-[40px] overflow-hidden">
      {/* Video background */}
      <img 
        src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
        alt="Video feed"
        className="w-full h-full object-cover opacity-50"
      />
      
      {/* Controls overlay */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-6 bg-gray-800/50 px-8 py-4 rounded-full">
        <button className="p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
          <img src='https://unsplash.com/s/photos/profilehttps://unsplash.com/photos/closeup-photography-of-woman-smiling-mEZ3PoFGs_k' className="w-6 h-6 text-white" />
        </button>
        <button className="p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors">
        <img src={mic}  alt="mic" />
        </button>
        <button className="p-4 transition-colors">
          <img src={endcall} alt='endcall' />
        </button>
      </div>
    </div>
  );
};

export default VideoCall;
