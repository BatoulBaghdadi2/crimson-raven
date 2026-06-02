import React from 'react';

const vipEvents = [
  { title: "Private Yacht Escape", desc: "An intimate getaway beyond the cruise experience." },
  { title: "Stargazing Experience", desc: "A quiet night under the stars, far from the crowds." },
  { title: "Chef’s Table Experience", desc: "A curated dining journey with the ship’s finest chefs." },
  { title: "Private Spa Ritual", desc: "A moment of complete relaxation and renewal." },
  { title: "Wine & Champagne Tasting", desc: "A refined selection of flavors at sea." }
];

const amenitiesList = [
  { title: "Luxury Suites", desc: "Private spaces designed for comfort, elegance, and uninterrupted rest." },
  { title: "Fine Dining", desc: "Refined cuisine inspired by Mediterranean flavors and crafted by expert chefs." },
  { title: "Spa & Wellness", desc: "Moments of relaxation and renewal in a calm, sea-inspired atmosphere." },
  { title: "Medical Clinic", desc: "Professional care available at all times for your safety and peace of mind." },
  { title: "Fitness Center", desc: "Stay active with modern equipment and sea views that elevate every session." },
  { title: "Kids Club", desc: "A safe and engaging space designed for younger guests to play, learn, and enjoy their time on board." },
  { title: "Pool & Open Deck", desc: "Open spaces to unwind, enjoy the view, and embrace the rhythm of the sea." }
];

 function Experience() {
  return (
    <div style={{ paddingTop: '56px' }}>
      <section className="Space">
        <h1 className="TitleEvent">The Voyage Experience</h1>
      </section>

     
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>
        
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/images/party.avif" alt="Cooking Class" className="d-block" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src="/images/billard.avif" alt="Billiard" className="d-block" style={{ width: "100%" }} />
          </div>
          <div className="carousel-item">
            <img src="/images/comedy.avif" alt="Comedy" className="d-block" style={{ width: "100%" }} />
          </div>
        </div>
        
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section id="Events">
        <p className="EventIntro">
          Enjoy a variety of onboard experiences designed to make every moment unforgettable, from relaxing daytime activities to vibrant nightlife and luxury services!
        </p>
        <div className="DayEvent">
          <h2 className="DaytimeTitle">Daytime Activities</h2>
          <ul className="DaytimeEvent">
            <li>Poolside relaxation</li>
            <li>Yoga & wellness sessions</li> 
            <li>Cooking classes</li>
            <li>Billiard & leisure lounge &#127921;</li>
          </ul>
        </div>
        <div className="NightEvent">
          <h2 className="NighttimeTitle">Night Entertainment</h2>
          <ul className="Nighttime">
            <li>Live music & performances</li>
            <li>Stand-up comedy nights &#127908;</li> 
            <li>Open-air cinema under the stars</li>
            <li>Elegant dining experiences</li>
          </ul>
        </div>
      </section>

      <section className="Vip">
        <h2 className="VIPTitle">The VIP Experience</h2>
        <p className="VIPsubTitle">A collection of refined moments designed for those who seek more at sea!</p>
        <div className="VIPImage">
          <img src="/images/dinner.jpg" alt="VIP dinner" />
        </div>
        <div className="VIPEvents">
          <ul>
            {vipEvents.map((event, index) => (
              <li key={index}>
                <h5>{event.title}</h5>
                <p className="Par">{event.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-dark"></section>
      <section className="section-light"></section>

      
      <section className="OnboardAmenities">
        <h2 className="section-title">Life Aboard</h2>
        <p className="subtitle-question">What awaits you on board?</p>
        <div className="amenities">
          {amenitiesList.map((amenity, index) => (
            <div key={index}>
              <h3 className="amenities-Title">{amenity.title}</h3>
              <p className="amenities-description">{amenity.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-dark"></section>
      <section className="section-light"></section>

     
      <section className="exclusive-moments">
        <h2 className="event-title">Meteor Shower Night</h2>
        <p className="event-question">Are you ready to make a wish under the stars?</p>
        <p className="event-details">Mediterranean Sea · August 12–13, 2026</p>
        <img src="/images/meteor.png" className="event-img" alt="Meteor Shower" />
        <p className="event-description">
          An exclusive open-sea experience under rare meteor activity, guided by a calm night atmosphere and uninterrupted sky views.
        </p>
      </section>
    </div>
  );
}export default Experience; 