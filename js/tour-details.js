const tourPlans = {
  Paris: {
    image: "../img/Effile.jpeg",
    prices: {
      "4days": 799,
      "7days": 1499
    },
    days: {
      "4days": [
        "Day 1: Visit the Eiffel Tower and take a Seine River Cruise",
        "Day 2: Explore the Louvre Museum and Notre-Dame Cathedral",
        "Day 3: Stroll through Montmartre and visit Sacré-Cœur",
        "Day 4: Enjoy a day trip to the Palace of Versailles"
      ],
      "7days": [
        "Day 1: Visit the Eiffel Tower and take a Seine River Cruise",
        "Day 2: Explore the Louvre Museum and Notre-Dame Cathedral",
        "Day 3: Stroll through Montmartre and visit Sacré-Cœur",
        "Day 4: Enjoy a day trip to the Palace of Versailles",
        "Day 5: Explore Latin Quarter and Luxembourg Gardens",
        "Day 6: Take a gourmet food tour in Le Marais",
        "Day 7: Visit Disneyland Paris"
      ]
    }
  },

  London: {
    image: "../img/London.jpeg",
    prices: {
      "4days": 749,
      "7days": 1399
    },
    days: {
      "4days": [
        "Day 1: Ride the London Eye and visit the Tower Bridge",
        "Day 2: Tour the British Museum and stroll through Hyde Park",
        "Day 3: Explore Westminster Abbey and Big Ben",
        "Day 4: Shop at Oxford Street and visit Buckingham Palace"
      ],
      "7days": [
        "Day 1: Ride the London Eye and visit the Tower Bridge",
        "Day 2: Tour the British Museum and Hyde Park picnic",
        "Day 3: Visit the National Gallery and Trafalgar Square",
        "Day 4: Day trip to Windsor Castle",
        "Day 5: Explore Camden Market and take a canal boat ride",
        "Day 6: Experience London’s theatre scene at West End",
        "Day 7: Relax with afternoon tea at a riverside cafe"
      ]
    }
  },

  Rome: {
    image: "../img/Rome.jpeg",
    prices: {
      "4days": 699,
      "7days": 1349
    },
    days: {
      "4days": [
        "Day 1: Discover the Colosseum and Roman Forum",
        "Day 2: Visit Vatican City and St. Peter’s Basilica",
        "Day 3: Walk through Piazza Navona and the Pantheon",
        "Day 4: Throw a coin in Trevi Fountain and enjoy local gelato"
      ],
      "7days": [
        "Day 1: Explore the Colosseum and Palatine Hill",
        "Day 2: Visit Vatican Museums and the Sistine Chapel",
        "Day 3: Discover Trastevere’s cobbled streets and markets",
        "Day 4: Take a cooking class in authentic Roman cuisine",
        "Day 5: Day trip to Tivoli Gardens and Villa d’Este",
        "Day 6: Shop in Campo de’ Fiori and enjoy local wine tasting",
        "Day 7: Cruise along the Tiber River with dinner"
      ]
    }
  },

  Tokyo: {
    image: "../img/Tokyo.jpeg",
    prices: {
      "4days": 849,
      "7days": 1599
    },
    days: {
      "4days": [
        "Day 1: Visit Senso-ji Temple and Tokyo Skytree",
        "Day 2: Explore Shibuya Crossing and Takeshita Street",
        "Day 3: Tour the Imperial Palace and gardens",
        "Day 4: Enjoy sushi at Tsukiji Market and cruise in Tokyo Bay"
      ],
      "7days": [
        "Day 1: Explore Akihabara for anime and tech fun",
        "Day 2: Visit Asakusa and the Meiji Shrine",
        "Day 3: Take a day trip to Mount Fuji and Lake Kawaguchi",
        "Day 4: Shop in Ginza and try a traditional tea ceremony",
        "Day 5: Wander Odaiba’s futuristic island attractions",
        "Day 6: Attend a sumo practice and dine at a ramen street",
        "Day 7: Relax in a Japanese garden and soak in an onsen"
      ]
    }
  },

  Dubai: {
    image: "../img/Dubai.jpeg",
    prices: {
      "4days": 899,
      "7days": 1699
    },
    days: {
      "4days": [
        "Day 1: Visit the Burj Khalifa and Dubai Mall",
        "Day 2: Desert safari with dune bashing and BBQ dinner",
        "Day 3: Explore the Dubai Marina and Jumeirah Beach",
        "Day 4: Enjoy a Dhow cruise with traditional music"
      ],
      "7days": [
        "Day 1: Take a helicopter tour of the Palm Jumeirah",
        "Day 2: Go skiing indoors at Ski Dubai",
        "Day 3: Visit Global Village and enjoy cultural shows",
        "Day 4: Day trip to Abu Dhabi and Sheikh Zayed Mosque",
        "Day 5: Explore souks and traditional markets",
        "Day 6: Enjoy water sports at Kite Beach",
        "Day 7: Relax at a luxury spa and dine at Burj Al Arab"
      ]
    }
  },

  NewYork: {
    image: "../img/NewYork.jpeg",
    prices: {
      "4days": 799,
      "7days": 1499
    },
    days: {
      "4days": [
        "Day 1: Visit Times Square and Rockefeller Center",
        "Day 2: Explore Central Park and the MET Museum",
        "Day 3: Walk the Brooklyn Bridge and explore DUMBO",
        "Day 4: Statue of Liberty and 9/11 Memorial"
      ],
      "7days": [
        "Day 1: Discover SoHo and Chinatown",
        "Day 2: Museum hopping at MoMA and the Guggenheim",
        "Day 3: Watch a Broadway show and night in Times Square",
        "Day 4: Explore Greenwich Village and food tour",
        "Day 5: Take a ferry to Staten Island and walk Wall Street",
        "Day 6: Visit The Edge and High Line park",
        "Day 7: Spend the day shopping in Fifth Avenue"
      ]
    }
  },

  Bangkok: {
    image: "../img/Bangkok.jpeg",
    prices: {
      "4days": 599,
      "7days": 1099
    },
    days: {
      "4days": [
        "Day 1: Visit the Grand Palace and Wat Pho",
        "Day 2: Take a boat ride on Chao Phraya River",
        "Day 3: Explore Chatuchak Market and street food stalls",
        "Day 4: Discover local culture at Jim Thompson House"
      ],
      "7days": [
        "Day 1: Enjoy a floating market tour",
        "Day 2: Visit the Temple of the Emerald Buddha",
        "Day 3: Take a Thai cooking class",
        "Day 4: Visit safari world and marine park",
        "Day 5: Day trip to Ayutthaya",
        "Day 6: Relax with a Thai massage and spa",
        "Day 7: Rooftop dinner with views of the skyline"
      ]
    }
  },

  Sydney: {
    image: "../img/Sydney.jpeg",
    prices: {
      "4days": 829,
      "7days": 1579
    },
    days: {
      "4days": [
        "Day 1: Tour the Sydney Opera House and Harbour Bridge",
        "Day 2: Visit Taronga Zoo and Bondi Beach",
        "Day 3: Explore Darling Harbour and Sea Life Aquarium",
        "Day 4: Picnic at Royal Botanic Gardens with harbor views"
      ],
      "7days": [
        "Day 1: Explore The Rocks historic district",
        "Day 2: Go whale watching along the coast",
        "Day 3: Day trip to the Blue Mountains",
        "Day 4: Visit Art Gallery of NSW and Chinatown",
        "Day 5: Surf lessons at Manly Beach",
        "Day 6: Visit Luna Park and harbor cruise",
        "Day 7: Sunset dinner at Sydney Tower Eye"
      ]
    }
  },

  Istanbul: {
    image: "../img/Istanbul.jpeg",
    prices: {
      "4days": 669,
      "7days": 1249
    },
    days: {
      "4days": [
        "Day 1: Visit Hagia Sophia and Blue Mosque",
        "Day 2: Cruise the Bosphorus and shop at the Grand Bazaar",
        "Day 3: Explore Topkapi Palace and its gardens",
        "Day 4: Walk around Istiklal Street and Taksim Square"
      ],
      "7days": [
        "Day 1: Experience a Turkish bath and spa",
        "Day 2: Explore the Basilica Cistern and spice market",
        "Day 3: Visit Dolmabahçe Palace",
        "Day 4: Take a ferry to the Asian side of Istanbul",
        "Day 5: Attend a Whirling Dervishes performance",
        "Day 6: Explore old Byzantine churches and Roman ruins",
        "Day 7: Rooftop café hopping and panoramic views"
      ]
    }
  },

  Rio: {
    image: "../img/Rio.jpeg",
    prices: {
      "4days": 789,
      "7days": 1449
    },
    days: {
      "4days": [
        "Day 1: Visit Christ the Redeemer and Sugarloaf Mountain",
        "Day 2: Relax on Copacabana and Ipanema Beaches",
        "Day 3: Explore Tijuca Forest and botanical gardens",
        "Day 4: Experience Lapa nightlife and samba dance"
      ],
      "7days": [
        "Day 1: Attend a Brazilian cooking class",
        "Day 2: Tour the Maracanã Stadium and Museum of Tomorrow",
        "Day 3: Take a cable car ride up Sugarloaf",
        "Day 4: Go hang gliding or paragliding for aerial views",
        "Day 5: Day trip to Petropolis or Ilha Grande",
        "Day 6: Visit Selarón Steps and Santa Teresa art walk",
        "Day 7: Enjoy a beachside BBQ and sunset capoeira show"
      ]
    }
  }
};


const params = new URLSearchParams(window.location.search);
const city = params.get("city");
let duration = "4days";

const destination = tourPlans[city];
const packageSelect = document.getElementById("package-options");
const container = document.getElementById("tourContainer");
const priceDisplay = document.getElementById("price-display");

packageSelect.addEventListener("change", () => {
  duration = packageSelect.value;
  renderItinerary();
});

function renderItinerary() {
  if (destination && destination.days[duration]) {
    document.body.style.background = `url(${destination.image}) no-repeat center center/cover`;

    container.innerHTML = `<h2>${city} Itinerary (${duration})</h2>`;
    destination.days[duration].forEach((day) => {
      const box = document.createElement("div");
      box.className = "day-box";
      box.textContent = day;
      container.appendChild(box);
    });

    const price = destination.prices?.[duration] || "TBD";
    priceDisplay.innerHTML = `<h3>Estimated Price: $${price}</h3>`;
  } else {
    container.innerHTML = "<p>No tour details found.</p>";
    priceDisplay.innerHTML = "";
  }
}

const checkoutBtn = document.getElementById("checkout-button");
checkoutBtn.addEventListener("click", () => {
  const selectedPackage = packageSelect.value;
  const price = destination.prices[selectedPackage];
  window.location.href = `checkout.html?city=${city}&package=${selectedPackage}&price=${price}`;
});


renderItinerary();