import React from 'react';

const destinationsList = [
  {
    id: 1,
    country: "Italy",
    image: "/images/italyy.jpg", 
    places: [
      "Rome - The Eternal City, filled with ancient ruins like the Colosseum and Roman Forum.",
      "Venice – Romantic canals, charming bridges, and iconic gondola rides.",
      "Florence – The heart of Renaissance art and culture.",
      "Leaning Tower of Pisa – A world-famous tilted landmark.",
      "Milan – A modern hub of fashion and style."
    ]
  },
  {
    id: 2,
    country: "Croatia",
    image: "/images/croatia.jpg", 
    places: [
      "Dubrovnik – Historic walls overlooking the Adriatic Sea.",
      "Split – A mix of Roman history and coastal nightlife.",
      "Zagreb – A calm city rich in culture and cafés.",
      "Plitvice Lakes National Park – Stunning waterfalls and turquoise lakes."
    ]
  },
  {
    id: 3,
    country: "Greece",
    image: "/images/greec2.jpg", 
    places: [
      "Ancient ruins blended with modern life.",
      "Santorini – White houses and unforgettable sunsets.",
      "Mykonos – Famous for beaches and nightlife.",
      "Acropolis of Athens – An iconic symbol of ancient Greece"
    ]
  },
  {
    id: 4,
    country: "Turkey",
    image: "/images/turkey.jpg", 
    places: [
      "Istanbul – A vibrant city connecting Europe and Asia.",
      "Cappadocia – Famous for hot air balloons and unique landscapes.",
      "Antalya – Beautiful beaches with a luxury vibe.",
      "Hagia Sophia – A historic architectural masterpiece"
    ]
  }
];

 function Destinations() {
  return (
    <div style={{ paddingTop: '56px' }}>
      <section className="DesTitle">
        <h2>Explore Our Destinations</h2>
      </section>
      <section className="DessubTitle">
        <h5>Discover the beauty, culture, and unforgettable moments waiting for you at every stop!</h5>
      </section>

      <section id="Destinations">
        {destinationsList.map((item) => (
          <div key={item.id}>
            
            <div 
              className={`Destination${item.id}`} 
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>
            <div className={`Text${item.id}`}>
              <h1 className={`Text${item.id}title`}>{item.country}</h1>
              <ul>
                {item.places.map((place, index) => (
                  <li key={index}>{place}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}export default  Destinations;