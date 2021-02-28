// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export const Work = ({ icon, head, body }) => {
  return (
    <div className="work-cont">
      <div className="work-icon-cont">
        {/* <FontAwesomeIcon icon={icon} className="work-icon" /> */}
        <img src={icon} alt="" />
      </div>
      <div className="work-details">
        <p>{head}</p>
        <small>{body}</small>
      </div>
    </div>
  );
};
