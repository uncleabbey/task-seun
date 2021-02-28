import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer">
      <hr className="hr" />
      <div className="footer-wrapper">
        <div className="agency">
          <h4 className="title-footer">
            agency<small className="x">x</small>
          </h4>
          <div className="do-wordings-cont">
            <span className="do-wordings">
              A design agency shaping ideas into products. We help startups and
              enterprises invent, build and launch their next project.
            </span>
          </div>
        </div>
        <div className="agency">
          <h6 className="title-footer">Services</h6>
          <span className="block medium">Web Design</span>
          <span className="block medium">App Design</span>
          <span className="block medium">Photography</span>
          <span className="block medium">Videography</span>
          <span className="block medium">Web Developmet</span>
        </div>
        <div className="agency">
          <h6 className="title-footer">Support</h6>
          <span className="block medium">Get Support</span>
          <span className="block medium">Conatct</span>
          <span className="block medium">My Blog</span>
          <span className="block medium">Privacy Policy</span>
          <span className="block medium">Pricing</span>
        </div>
        <div className="agency">
          <h6 className="title-footer">social</h6>
          <div className="social-links">
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
      <hr className="hr" />
      <p className="copyright">
        &copy; frontendtest | All rights reserved 2020
      </p>
    </footer>
  );
};
