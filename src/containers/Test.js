import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../syles/Test.css';

const Test = () => {
  return (
    <div className="wrapper">
      <div className="showcase-cont">
        <div className="showcase">
          <p>creative agency</p>
          <div className="play-cont">
            <div className="play-icon-cont">
              <FontAwesomeIcon
                icon={faPlay}
                color="white"
                className="play-icon"
              />
            </div>
            <div className="watch">
              <p>watch a video intro</p>
            </div>
          </div>
        </div>
        <div className="first-purple"></div>
      </div>
      <img
        src="https://res.cloudinary.com/kayode/image/upload/v1614515452/Image_1_1X_asgjuo.png"
        alt=""
        className="img-cont"
      />
    </div>
  );
};

export default Test;
