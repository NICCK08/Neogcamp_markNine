import React, { useState } from "react";
import "./styles.css";

const travelDB = {
  Bengaluru: [
    {
      Name: "Bangalore Palace,Bengaluru",
      Rating: "09/10",
      Description:
        "Bangalore Palace stands as one of the best places to visit in Bangalore. Apart from being a top tourist attraction in the city, the palace is a must-visit place for art lovers as it houses several remarkable paintings belonging to the 19th and 20th centuries.You Can not miss this place if you are visiting Bangalore."
    },
    {
      Name: "Lalbagh Botanical Garden",
      Rating: "10/10",
      Description:
        "Lalbagh Botanical Garden or simply Lalbagh, is an botanical garden in Bangalore, India, with an over 200-year history. First planned and laid out during the dalavaiship of Hyder Ali and later managed under numerous British Superintendents before Indian Independence. It was responsible for the introduction and propagation of numerous ornamental plants as well as those of economic value. It also served a social function as a park and recreational space, with a central glass house dating from 1890 which was used for flower shows. In modern times it hosts two flower shows coinciding with the week of Republic Day and Independence Day. As an urban green space along with Cubbon Park, it is also home to numerous wild species of birds and other wildlife. The garden also has a lake adjoining a large rock on which a watchtower had been constructed during the reign of Kempegowda II"
    },
    {
      Name: "Commercial Street",
      Rating: "09/10",
      Description:
        "Commercial Street is a street in Bangalore, the state capital of Karnataka, India. One of the oldest and busiest shopping areas of the city, the street is famous for its trade in clothes, footwear, jewellery, electronics; and food joints. With only 75 parking slots available on the street for four-wheelers, the street is one of the most crowded in the city. It's expands between OPH road and K Kamraj road. the shopping locations extend to its bylanes including Dispensary Road and Abrahim Sahab street. Commercial Street lies in the heart of the city in the Central Business District area in Tasker Town, close to M G Road, another popular shopping area, and Russell Market in Shivajinaga"
    }
  ],

  Mysuru: [
    {
      Name: "Mysuru palace",
      Rating: "10/10",
      Description:
        "The Mysore Palace, also known as Amba Vilas Palace, is a historical palace and a royal residence. It is located in Mysore, Karnataka. It used to be the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. The palace is in the centre of Mysore, and faces the Chamundi Hills eastward."
    },
    {
      Name: "Brindavan Gardens",
      Rating: "09/10",
      Description:
        "The Brindavan Gardens is a garden located 12 k.ms from the city of Mysore in the Mandya District of the Indian State of Karnataka. It lies adjoining the Krishnarajasagara Dam which is built across the river Kaveri. The work on laying out this garden was started in the year 1927 and completed in 1932. Visited by close to 2 million tourists per year, the garden is one of the major attractions of Srirangapatna. Sir Mirza Ismail, the Deewan of Mysore, a man with a penchant for gardens, founded the Brindavan Gardens and built the Cauvery River high-level canal to irrigate 120,000 acres in modern Mandya district. He was inspired by Hyder Ali who had earlier built the Lalbagh Botanical Gardens at Bangalore "
    },
    {
      Name: "Tipu Sultan Fort",
      Rating: "09/10",
      Description:
        "There is a lot of confusion between Tipu Sultan Summer Palace in Bangalore and Tipu Sultan Summer Palace in Mysore which is also referred to as Daria Daulat and is located in Srirangapatna.I am going to talk about Tipu Sultan Museum which is inside the Daria Daulat complex or Tipu Sultan Summer Palace in Mysore. It also shouldn't be confused with the actual Mysore Palace which is further south and in the city center."
    }
  ],

  Madikeri: [
    {
      Name: "Abbey Falls, Coorg",
      Rating: "09/10",
      Description:
        "Abbey falls or Abbi Falls is situated 1 km from the town of Madikeri. This waterfall is famous for its natural beauty. This is a famous picnic spot and is called as Jesse falls in the olden days.Abbey falls located between the natural greenery of coffee plantations and spice estates is blessed with stunning beauty and serene calm. The falls has a wild beauty. Water cascading over rocks into the pool. The roaring sound of the waterfalls can be heard from the road.During Monsoon the water flow is very high and in dry seasons the flow is low. There is a hanging bridge here providing the amazing sight of this waterfalls. The best time to visit Abbey falls is early winter."
    },
    {
      Name: "Harangi Dam, Coorg",
      Rating: "10/10",
      Description:
        "Harangi dam is situated in the Hudgur village near Kushalnagar if Coorg District. Built across the tributary of River Cauvery, Harangi dam is the first dam that has been built across River Cauvery. It has a height of 47 meters and length of 846 meters creating a marvelous view of forceful streams of water.."
    },
    {
      Name: "Mandalpatti Trek, Coorg",
      Rating: "10/10",
      Description:
        "Located 4 km before Abbey Falls, Mandalpatti is at a distance of 25- 30 km from Madikeri town. Offering amazing scenic beauty and perfect opportunities to be amidst the best of natural settings, Mandalpatti is increasingly become popular amongst tourists.The trek presents trekkers with beautiful scenery and rich flora and fauna."
    }
  ]
};

var travelData = Object.keys(travelDB);

export default function App() {
  const [selecteddestination, setDestination] = useState("Bengaluru");
  function destinationClickHandler(destination) {
    setDestination(destination);
  }

  return (
    <div className="App">
      <h1> goodTravel</h1>
      <p id="paragraph">Checkout my favorite go to places in Karnataka.</p>

      <div>
        {travelData.map((destination) => (
          <button
            onClick={() => destinationClickHandler(destination)}
            style={{
              cursor: "pointer",
              background: "#D1D5DB"
            }}
          >
            {destination}
          </button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {travelDB[selecteddestination].map((place) => (
            <li
              key={place.Name}
              style={{
                listStyle: "none",
                background: "#D1D5DB",
                padding: "1rem",
                border: "1px solid",
                width: "60%",
                margin: "1rem 0.5rem",
                borderRadius: "0.5rem"
              }}
            >
              <div style={{ fontSize: "larger" }}>{place.Name}</div>
              <div
                style={{
                  fontSize: "smaller",
                  background: "#9CA3AF",
                  width: "2rem",
                  padding: "0.1rem 0.2rem"
                }}
              >
                {place.Rating}
              </div>
              <div>{place.Description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
