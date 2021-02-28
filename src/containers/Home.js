import React from 'react';
import Nav from '../components/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import data from '../utils/workData';
import { Work } from '../components/Work';
import { Teams } from '../components/Teams';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <div className="trouble">
        <img
          src="https://res.cloudinary.com/kayode/image/upload/v1614421837/Image_1_lo725y.svg"
          alt=""
        />
      </div>
      <Nav />
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
      </div>
      <div className="services-cont">
        <div className="services">
          <div className="services-head">
            <span className="block">services</span>
            <span>& portfolio</span>
          </div>
          <div className="works-cont">
            {data.map(({ id, body, title, font }) => (
              <Work key={id} icon={font} head={title} body={body} />
            ))}
          </div>
        </div>
      </div>
      <div className="team-intro">
        <p className="meet">Meet The Team</p>
        <div>
          <span>great outcome always relay on the great foundation</span>
        </div>
      </div>
      <div className="team-wrapper">
        <div className="team-cont">
          <Teams />
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
