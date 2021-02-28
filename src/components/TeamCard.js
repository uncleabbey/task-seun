import React from 'react';

export const TeamCard = ({ src, name, color }) => {
  return (
    <div className="team-card">
      <div className={`team-card-img ${color}`}>
        <img src={src} alt="" className={`${color}-img`} />
      </div>
      <div className="team-card-details">
        <p className="team-name">{name}</p>
        <div className="standard-span">
          <span>Standard screen generation</span>
        </div>
        <div className="team-links">
          <a href="https://uncleabbey.github.com">
            <img
              src="https://res.cloudinary.com/kayode/image/upload/v1614489357/Facebook_dwolnv.svg"
              alt=""
            />
          </a>
          <a href="https://uncleabbey.github.com">
            <img
              src="https://res.cloudinary.com/kayode/image/upload/v1614489357/Twitter_p3drp8.svg"
              alt=""
            />
          </a>
          <a href="https://uncleabbey.github.com">
            <img
              src="https://res.cloudinary.com/kayode/image/upload/v1614489357/Dribbble_vt7igd.svg"
              alt=""
            />
          </a>
          <a href="https://uncleabbey.github.com">
            <img
              src="https://res.cloudinary.com/kayode/image/upload/v1614489357/LinkIn_tegeq1.svg"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};
