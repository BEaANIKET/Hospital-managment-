
import React, { useCallback, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const Camera = () => {
  const webcamRef = useRef(null);
  const capturedImageRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true); // State for video visibility

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    capturedImageRef.current = imageSrc;
    setIsVideoVisible(false); // Hide video after capture
  }, [webcamRef]);

  const retake = useCallback(() => {
    setIsVideoVisible(true); // Show video again on retake
    capturedImageRef.current = null; // Clear captured image
  }, []);

  return (
    <>
    <div className=' flex flex-col w-full justify-center items-center p-20'>
         {isVideoVisible ? ( // Conditionally render video
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="vidio"
          disablePictureInPicture='false'
          className=' h-96  rounded-3xl'
        />
      ) : (
        <img className=' h-96  rounded-3xl' src={capturedImageRef.current} alt="Captured photo" /> // Render captured image
      )}
      <div className="button-container flex gap-6  mt-8">
        <button className='border border-black rounded-3xl text-xl h-16 w-44  bg-slate-400 text-black font-semibold' onClick={retake} disabled={isVideoVisible}>Retake</button> 
        <button className=' border border-black rounded-3xl text-xl h-16 w-44 bg-indigo-800 text-white font-semibold' onClick={capture}>Capture photo</button>
      </div>
    </div>
     
    </>
  );
};

export default Camera;
