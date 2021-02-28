import React from 'react';

export const Contact = () => {
  return (
    <div className="contact-cont">
      <div>
        <button className="cta-let">Let's Catch All</button>
      </div>
      <div className="contact">
        <p className="meet">contact us</p>
        <div>
          <span>Have an awesome idea in your mind? we would love to hear</span>
        </div>
        <form className="contact-form">
          <input type="text" placeholder="enter your email" />
          <button type="submit">start</button>
        </form>
      </div>
    </div>
  );
};
