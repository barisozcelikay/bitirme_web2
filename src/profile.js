// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};
// Change your display name on tha landing display
const header = {
  name: "CHAT CHAIN",
};
const background = {
  // Options: Snow or Particle
  type: "Snow",
};
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Us";
const about = {
  project:
    'The purpose of this project is to secure people’s private conversations on their chat applications. Nowadays there are a couple of compinies that shared their users information to 3rd party compinies. This situation is unlegal so we came up with solution that inspired from the these kind of problems that occured in beginning of 2021. The popular chat apps such as: telegram, turkcell’s bip etc. still hasn’t been able to solve the privacy problem that occured, fully. Our goal is to make this privacy issue disappear and make people conversate without security doubts on their mind' +

    'For users’ privacy and security, we came with the idea of using blockchain technology. Its a famious technology that uses in crypto currency. Most of the people just heard blokchain in this area but it is not limited to just that. This technology provides powerful security and reachability. With these features we can able to develop decentralized app. So this approcah is very suitable for our purpose and needs. Thus, we will develop our chat application with using blockchain technology',
  about_us:
    "We are TED University Computer Engineering Students: Barış Özçelikay, Kadir Kaan Yazgan, Gökay Özsoy and Onur Aladı. This is our website of senior project. We eager to learn and implement new technologies. Through this project, we aim to show users the possibilities of new technologies"

};
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
  {
    name: "HTML5",
    // To add a custom svg instead of font-awesome icons, add svg path below otherwise just comment it out
    svg: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z",
    faClass: "fab fa-html5",
  },
  {
    name: "CSS3",
    // svg: '',
    faClass: "fab fa-css3",
  },
  {
    name: "Javascript",
    // svg: '',
    faClass: "fab fa-js",
  },
  {
    name: "SASS",
    // svg: '',
    faClass: "fab fa-sass",
  },
  {
    name: "Node",
    // svg: '',
    faClass: "fab fa-node",
  },
  {
    name: "Python",
    // svg: '',
    faClass: "fab fa-python",
  },
  {
    name: "Java",
    // svg: '',
    faClass: "fab fa-java",
  },
  {
    name: "PHP",
    // svg: '',
    faClass: "fab fa-php",
  },
  {
    name: "Database",
    // svg: '',
    faClass: "fas fa-database",
  },
  {
    name: "AWS",
    // svg: '',
    faClass: "fab fa-aws",
  },
];
// Edit your projects, its name, your skills used to make it, and the url.
// You can omit freely anything if you dont have it
// To Add a Project, copy any one below and paste it after the last comma and increment the id's project number
const section3Title = "Reports";
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: "project1",
    name: "Project Proposal",
    skills: ["17, 10, 2021"],
    url: "https://docs.google.com/document/d/1kQLXNl85qrvTQAdBVTvbklPxeH0nybku4XnT4y_qe3Y/edit?usp=sharing", // En sonki belgeyi koydum kontrol edip değiştirilebilir.
  },
  {
    // Add image in './styles/images.css' in #project2
    id: "project2",
    name: "Project Specifications Report",
    skills: ["05, 11, 2021"],
    url: "https://docs.google.com/document/d/1RhGbHb6UaigExSexmEJgODSbQ94m3KS5SxtL_iTQbZE/edit?usp=sharing",
  },
  {
    // Add image in './styles/images.css' in #project3
    id: "project3",
    name: "Analysis Report",
    skills: ["28, 11, 2021"],
    url: "https://docs.google.com/document/d/1bdNu_O2JgULJMuwJ9Cw8ZC46e3NK-iVnSbSiLvz83_E/edit?usp=sharing",
  },
  {
    // Add image in './styles/images.css' in #project4
    id: "project4",
    name: "High-Level Design Report",
    skills: ["09, 01, 2022"],
    url: "https://docs.google.com/document/d/1Bze453tFaP6zMRWeX2-4c4XGcf8LrO8B3hCV2WbG2kg/edit?usp=sharing",
  },
   {
    // Add image in './styles/images.css' in #project4
    id: "project5",
    name: "Low-Level Design Report",
    skills: ["06, 03, 2022"],
    url: "https://docs.google.com/document/d/1UyJhwKhJqvpuC7tEcds6hGvlWBS53qgFYCd7lvEzuqs/edit?usp=sharing",
  },
   {
    // Add image in './styles/images.css' in #project4
    id: "project6",
    name: "Test Plan Report",
    skills: ["26, 04, 2022"],
    url: "https://docs.google.com/document/d/1KNO4k2m_SJpdMNmVjdeFhSZAvHbqU4W-f7TRKtEvryE/edit?usp=sharing",
  },

];
// Edit your Miscellaneous Activities, its name and the url.
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Miscellaneous number
const section4Title = "Miscellaneous";
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: "misc1",
    name: "Miscellaneous 1",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: "misc2",
    name: "Miscellaneous 2",
    url: "https://github.com/kaustubhai",
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: "misc3",
    name: "Miscellaneous 3",
    url: "https://github.com/kaustubhai",
  },
];

// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you hacve the link already, paste it in the contactUrl below
const section5Title = "Team Members";
const contact = {
  students:
  {
    baris: "Barış Özçelikay",
    gokay: "Gökay Özsoy",
    kaan: " Kadir Kaan Yazgan",
    onur: "Onur Aladı"
  },

  copyright: "Group Temproray",
  contactUrl: "",
};
// Paste your respective social media links. You can omit any if you dont have it
// Upload your resume in your drive, get the shaareable link and paste it in the resume section
const social = {
  //facebook: { baris: "", gokay: "", kaan: "", onur: "" },
  github: { baris: "https://github.com/barisozcelikay", gokay: "", kaan: "https://github.com/kaanyzgn", onur: "https://github.com/onuraladi" },
  // twitter: "https://twitter.com",
  instagram: { baris: "https://www.instagram.com/barisozcelikay/", gokay: "https://www.instagram.com/gokayozsoy2/", kaan: "https://www.instagram.com/kaanyzgnn/", onur: "https://www.instagram.com/onuraladi/" },
  linkedin: { baris: "https://www.linkedin.com/in/barisozcelikay/", gokay: "https://www.linkedin.com/in/g%C3%B6kay-%C3%B6zsoy-3597851b9/", kaan: "https://www.linkedin.com/in/kaanyazgan1/", onur: "https://www.linkedin.com/in/onur-alad%C4%B1-26a640202/" },
  //resume: "https://novoresume.com/",
};
// Dont change anything here
export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
