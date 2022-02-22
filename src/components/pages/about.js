import React from 'react';
import profilePicture from "../../../static/assets/images/bio/bio-headshot.jpg"

export default function() {
  return (
    <div className='content-page-wrapper'>
      <div
      className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className='right-column'>
      <p>Nerds of a Feather is a Web Development company based in Phoenix, AZ. Founded by Keifer Gilbert,
      who had a very storied career in the restaurant industry previously. He competed in the national 
      cocktail competition circuit, was inducted into the AZ Culinary Hall of Fame in 2016, and has overseen
      multiple award-winning cocktail concepts in the great Phoenix area.</p>

      <p>Keifer's dive into the world of web development all began in the middle of the Covid pandemic. His dear friend,
      Jordan Hudgens provided him with the opportunity to go through his coding academy in the midst of not being able
      to work within the hospitality industry.</p>

      <p>Nerds of a Feather continues to be the lead agency in developing clients and adding them into the DashTrack
      ecosystem. Boasting clients ranging all the way from nation-wide construction company's to rural non-profit events,
      and globally recognized cocktail bar concepts.</p> 

      <p>Nerds of a Feather contoniues to grow and expand its services, looking to mainly focus on servicing the hospitality
      industry but by no means limiting itself to that.</p>
      </div>
      </div>
  );
};