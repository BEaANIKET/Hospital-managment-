
import React, { useCallback, useContext, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import { Context } from '../context/Context';
import { Link } from 'react-router-dom';
const Camera = () => {

  const [isCapture, setIscapture] = useState(false);

  const { userImage, setUserImage } = useContext(Context);
  const webcamRef = useRef(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);

  const handleSubmit = ()=>{

  }

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUserImage(imageSrc);
    setIscapture(true);
    setIsVideoVisible(false); // Hide video after capture
  }, [webcamRef, setUserImage, setIsVideoVisible]);

  const retake = useCallback(() => {
    setIsVideoVisible(true); // Show video again on retake
    setUserImage(null);
    setIscapture(false)
  }, [setUserImage, setIsVideoVisible]);

  return (
    <>
      <div className='flex flex-col w-full justify-center items-center p-20'>
        {isVideoVisible ? (
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            disablePictureInPicture='false'
            className=' vidio h-96 rounded-3xl'
          />
        ) : (
          <img className='h-96 rounded-3xl' src={userImage} alt="Captured photo" /> // Ensure userImage is populated correctly
        )}
        <div className="button-container flex gap-6 mt-8">
          {
            (isCapture === true) ?
              <>
                <button className='border border-black rounded-3xl text-xl h-16 w-44 bg-slate-400 text-black font-semibold' onClick={retake}>Retake</button>
                <button className='border border-black rounded-3xl text-xl h-16 w-44 bg-indigo-800 text-white font-semibold' onClick={handleSubmit}><Link to={'/allData'}>Submit</Link></button>
              </>
              : (
                <button className='border border-black rounded-3xl text-xl h-16 w-44 bg-indigo-800 text-white font-semibold' onClick={capture}>Capture photo</button>
              )
          }

        </div>
      </div>
    </>
  );
};

export default Camera;
