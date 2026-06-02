import React from 'react';

 function Home() {
  return (
    <div style={{ paddingTop: '56px' }}>
      
      <section id="cruiseroute">
        <h2>Our Route</h2>
        <h5 className="routedescription">A journey across the Mediterranean’s most breathtaking destinations.</h5>
        <img id="routephoto" src="/images/projectroadmap.png" alt="Cruise Route" />
      </section>

     
      <section 
        id="STime" 
        style={{ backgroundImage: "linear-gradient(rgba(22, 30, 84, 0.85), rgba(22, 30, 84, 0.85)), url('/images/sea.jpg')" }}
      >
        <div className="SailingTime">
          <h1>Sailing Time</h1>
          <ul>
            <li>Beirut &rarr; Italy: 3–4 days at sea</li>
            <li>Italy &rarr; Croatia: 1.5–2.5 days at sea</li>
            <li>Croatia &rarr; Greece: 2.5–3.5 days at sea</li>
            <li>Greece &rarr; Turkey: 1.5–2 days at sea</li>
          </ul>
          <h3>Total sailing time: 10–11 days</h3>
        </div>
        
        <div className="PortStops">
          <h1>Port Stops</h1>
          <ul>
            <li>Italy (Rome): 2–3 days</li>
            <li>Croatia (Dubrovnik): 1–2 days</li>
            <li>Greece (Athens): 2–3 days</li>
            <li>Turkey (Istanbul): 2–3 days</li>
          </ul>
          <h3>Total stop duration: 7–10 days</h3>
        </div>
        <h2 className="Tduration">Total Cruise Duration: 17 – 21 days</h2>
      </section>
    
      <section className="Voyage-information">
        <h2 className="info-title">Voyage Overview</h2>
        <p className="info-subtitle">Key information about your journey at sea.</p>
        <ul className="info-description">
          <li>Departure: Beirut, Lebanon</li>
          <li>Route: Italy &rarr; Croatia &rarr; Greece &rarr; Turkey</li>
          <li>Voyage Dates: August 5 – August 25, 2026</li>
          <li>Meteor Event: August 12–13, 2026 - Mediterranean Sea</li>
        </ul>
      </section>
    </div>
  );
}export default Home;