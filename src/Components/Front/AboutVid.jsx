import React, { useState } from 'react';
import Video1 from '../../Video/AboutVid.mp4'

const AboutVid = () => {
  // State to manage video playback
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle video playback
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className='bg-darkBlack block md:hidden'>
      <div className='px-10 md:px-20'>
      <video
        controls
        width='100%'
        height="10"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
      >
        {/* Replace the placeholder with your actual video file path or URL */}
        <source src={Video1} type="video/mp4" />
        {/* You can add multiple source elements for different video formats */}
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
      </div>
   
    </div>
  );
};

export default AboutVid;
