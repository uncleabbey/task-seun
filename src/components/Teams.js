import React from 'react';
import { TeamCard } from './TeamCard';

export const Teams = () => {
  return (
    <div className="teams-people-cont">
      <TeamCard
        name="jam potrick"
        src="https://res.cloudinary.com/kayode/image/upload/v1614421836/pexels-photo-846741-removebg-preview_pxghsn.svg"
        color="jam"
      />
      <TeamCard
        name="ema jonas"
        src="https://res.cloudinary.com/kayode/image/upload/v1614421837/pexels-photo-1036623-removebg-preview_yqo26w.svg"
        color="ema"
      />
      <TeamCard
        name="mike pens"
        src="https://res.cloudinary.com/kayode/image/upload/v1614421837/pexels-photo-1036627-removebg-preview_rra4lw.svg"
        color="mike"
      />
    </div>
  );
};
