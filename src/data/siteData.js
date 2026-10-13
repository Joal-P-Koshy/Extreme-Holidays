// All content from the original extremeholidays.in site.
// Copy the old site's /images folder into your project's public/images folder.
const img = (name) => `/images/${name}`;
import logo from "../assets/logo.png";
import bgimg1 from "../assets/img1.png";
import bgimg2 from "../assets/img2.png";
import bgimg3 from "../assets/img3.png";
import bgimg4 from "../assets/img4.png";
import bgimg5 from "../assets/img5.png";
/////////////////////////////////////////////
import trvls from "../assets/travelers.png";
////////////////////////////////////////////
import scuba from "../assets/scubadiv.png";
import trekking from "../assets/trek.png";
import fishing from "../assets/fishing.png";
import riding from "../assets/bicycle.png";
////////////////////////////////////////////
import kerala from "../assets/kl.png";
import ayurveda from "../assets/ayurveda.png";
import lakweek from "../assets/lakand/lak11.jpg";
import samudram from "../assets/samudram.png";
import andlak from "../assets/ldan.png";
import starcruise from "../assets/cruise.png";
////////////////////////////////////////////////
import lak1 from "../assets/lakand/lak1.jpg";
import lak2 from "../assets/lakand/lak4.jpg";
import lak3 from "../assets/lakand/lak7.jpg";
import lak4 from "../assets/lakand/lak9.jpg";
import lak5 from "../assets/lakand/lak10.jpg";
import lak6 from "../assets/lakand/lak8.jpg";
/////////////////////////////////////////
////////////////////////////////////////////////
import and1 from "../assets/lakand/and12.jpg";
import and2 from "../assets/lakand/and4.jpg";
import and3 from "../assets/lakand/and7.jpg";
import and4 from "../assets/lakand/and9.jpg";
import and5 from "../assets/lakand/and10.jpg";
import and6 from "../assets/lakand/and8.jpg";
/////////////////////////////////////////

export const company = {
  name: "Extreme Holidays",
  legalName: "Extreme Holidays Pvt. Ltd.",
  logo: logo,
  address: ["1st Floor, 27/1175 B3, Peters Enclave", "Opposite Kairali Apartment", "Panambilly Nagar, Cochin 36"],
  email: "mail@extremeholidays.in",
  office: "+91 484 30 22 388",
  mobile: "+91 98474 83961",
  mapSrc: "https://www.google.com/maps?q=9.965992,76.294631&z=15&output=embed",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Adventure", href: "#adventure" },
  { label: "Holidays", href: "#holidays" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const heroSlides = [
  { title: "BgImg1", image: bgimg1 },
  { title: "BgImg2", image: bgimg2 },
  { title: "BgImg3", image: bgimg3 },
  { title: "BgImg4", image: bgimg4 },
  { title: "BgImg5", image: bgimg5 },
];

export const about = {
  intro: [
    "What does it mean to be on holiday? Since time immemorial, man has felt the need to unwind, to leave everything behind and clear the soul and mind. Perhaps that is where the word vacation comes from: to vacate your life.",
    "Today's fast-paced lifestyle takes a toll on body and mind, so people take time off for leisure, be it a few hours or a few weeks at an exotic locale. Holidays are no longer about the sofa and the remote; people have taken to adventure vacationing in a big way.",
    "We believe there is an adventurer in every one of us. Extreme Holidays is your guide and companion on the path to your perfect getaway. It's not just about where you go and what you do, but about what you bring back: memories to last a lifetime.",
    "With years of research and countless visits to exotic destinations, we bring you beautiful locales and adventure activities such as scuba diving, trekking, water sports and jungle safaris. For detailed explanations, come over to our office for a personal chat.",
  ],
  image: trvls,
  vision: "Creating an experience of a lifetime, we breach unknown territories and canvass unseen landscapes. Merging adventure with adrenalin, we chart a trail that beckons others to follow, a pioneer in the budding industry of adventure holidays.",
  mission: "To be the trailblazer on a path where none exists, to go places where none have gone, and above all, to keep the spirit of adventure alive.",
  values: [
    { name: "Diversity", text: "Our strength lies in the qualities and diversity of our people." },
    { name: "Creativity", text: "Our hunger for creative and commercial success means we constantly strive for improvement." },
    { name: "Adventure", text: "Our people share a sense of adventure and a thirst for knowledge." },
    { name: "Passion", text: "We share a full-blooded passion for our work and always go the extra mile." },
  ],
};

export const adventures = [
  { title: "Diving", image: scuba, text: "Scuba diving (self-contained underwater breathing apparatus) has joined the ranks of extreme activities for the adventure seeker. Meet brightly coloured marine life, watch a school of sharks, or discover caves and sunken ships." },
  { title: "Trekking", image: trekking, text: "Trekking is the spirit of every adventure trip. Nothing beats a hike up a steep mountain or a foray across untouched forests and valleys, powered by will, stamina and whatever you can carry on your back." },
  { title: "Fishing", image: fishing, text: "Adventure fishing is a sport with countless places to practise it, from backwaters to the Indian Ocean. Part of the thrill is the journey and the skill you bring while waiting for that perfect bite." },
  { title: "Riding", image: riding, text: "Bicycle touring takes you long distances over a couple of days or many years. Free from the confines of a car, you get closer to the places and culture you pass through." },
];

export const holidays = [
  { title: "Kerala", image: kerala, text: "God's Own Country: a land of tradition, mystery and beauty. In a few hours you can go from a cold mountain resort to sun-kissed beaches to humid jungle." },
  { title: "Ayurveda", image: ayurveda, text: "A science 5,000 years old, blending tradition, medicine, meditation and healing. Ayurveda is now one of the most sought-after therapies." },
  { title: "Lakshadweep Weekend", image: lakweek, link: "/lakshadweep-packages.html", text: "Islands 220 to 440 km off the Kerala coast, reached by ship or by flights from Kochi to Agatti, with helicopter transfer to Kavaratti. Remote, pristine and peaceful." },
  { title: "Samudram", image: samudram, link: "/samudram-packages.html", text: "An ideal getaway of solitude and verdant surroundings in the Lakshadweep islands, connected to the mainland by passenger ships and flights from Kochi." },
  { title: "Andaman & Lakshadweep", image: andlak, text: "Around 500 Andaman and Nicobar islands with dense forests, magnificent pools and wildlife, plus the Black Water Jail (Kaala Paani). Lakshadweep, the 'hundred thousand islands', offers exotic marine life and a long-secluded calm." },
  { title: "Star Cruises", image: starcruise, text: "An all-inclusive floating resort: meals, daytime activities, nightly entertainment and exotic ports, with no reservations, connections or packing and unpacking to worry about." },
];
   
export const gallery = {
  Lakshadweep: [lak1, lak2, lak3, lak4, lak5, lak6],
  Andaman: [and1, and2, and3, and4, and5, and6],
};
