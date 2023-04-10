//-------------Required Path:
const { Post } = require("../models");
//-------------Constructing Post's:
const postData = [
  {
    title: "The High Speed of F1 Wireless Tech",
    content: "In 2017, F1 teams began using a system of two wireless technologies: multi-gigabit 802.11ad Wi-Fi and 5 GHz 802.11ac. The tech allows an F1 car to transmit data wirelessly while it travels through the pit lane. When its within a four-metre range of the garage, it begins transmitting the data much faster, at download speeds of up to 1.9GBits per second. That means one gigabyte of data takes less than five seconds to be transmitted. The company Qualcomm isnt only using this tech within the world of Formula One. It has also developed it for the consumer market. In the near future, similar tech will be used in smartphones, enabling a more reliable connection and much quicker download and upload speeds. The technology could also be used by connected cars to communicate with the outside world.",
    user_id: 1,
  },
  {
    title: "How Cloud Data-Crunching Power Accelerates the F1 Racing Experience",
    content:
      "Its hard to overstate the role technology plays in F1 racing. Every F1 car contains 300 sensors which generate 1.1 million telemetry data points per second transmitted from the cars to the pits. During each race weekend 160 terabytes of data is sent between the remote race circuit and the F1 Media and Technology Center in Biggin Hill, England. Formula One teams have always been pioneers in analyzing data for a competitive advantage, especially when milliseconds mean the difference between pole position and starting somewhere in the middle of the pack, said Otmar Szafnauer, chief executive officer and team principal at Aston Martin Cognizant Formula One.",
    user_id: 3,
  },
  {
    title: "How computing has revolutionised Formula 1",
    content:
      "Formula 1 racing and computing platforms have been in existence for almost the same length of time, both starting around 1950. But Formula 1 cars remained purely mechanical for decades, with their design taking place on physical drawing boards with pens. However, by the 1990s, every F1 team was using computers and design packages from the likes of CATIA, Computervision and Autodesk. But these designs always needed testing to see how they had improved aerodynamics. Wind tunnels were introduced into car design in the late 1920s, so their use in F1 also became central. The interplay of computerised design and wind tunnel testing has become the mainstay of F1 car development. As computers have become more powerful, it has been increasingly possible to take some of the onus off time-consuming wind tunnel testing. Computational Fluid Dynamics (CFD) could be used to predict and analyse airflow. Initially, there were no restrictions on the amount of processing power that could be thrown at CFD, or the amount of wind tunnel time that could be used to test the designs in the real world.",
    user_id: 4,
  },
  {
    title: "The Pros and Cons of Cloud Computing for Small Businesses",
    content:
      "There's enormous scope for programming in F1. Here's a few examples: The new power units require complex modelling to figure out what the best way to break, to accelerate, to spin up the turbo, etc. Each team requires incredibly efficient CFD software. The FIA gives them a flop budget, so they need to have the absolute most efficient software they can manage to write. The teams need to write simulators, so they need physics models, of pretty much everything going on on the car",
    user_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);
//-------------Exporting Post's:
module.exports = seedPosts;