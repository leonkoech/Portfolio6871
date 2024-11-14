import { categories, languages } from "./projectCats";
import { member, project } from "../models/projectModel";
export const projects: project[] = [
    {
        name: "Dynamic ASL transcription for Video Platforms",
        id: "sign-access",
        thumbnail:
          "https://github.com/user-attachments/assets/6d0851fe-719f-4aa2-af69-14a77f357d9d",
        about:
          "Global Winner of USTs Global D3CODE hackathon. Dynamic generation of ASL videos on Video platforms based on transcription on an extension using Machine learning. ",
        repoUrl: "https://github.com/leonkoech/SafeSense",
        details:
          "Dynamic generation of ASL videos on Video platforms based on transcription on an extension using Machine learning.",
        languages: [languages.javascript, languages.python],
        category: categories.fullStack,
        demoUrl: "https://youtube.com/embed/w1XmSrEq6uA",
        team: false,
        members: []
      },
  {
    name: "Safe Sense",
    id: "safe-sense",
    thumbnail:
      "https://github.com/leonkoech/SafeSense-AI/assets/39020723/2a08620f-4817-41d6-81b8-094d2d45a57f",
    about:
      "Intelligent Vehicle Safety Enhancement System for sideswipe accident using machine learning. Coupled with hardware here; https://github.com/leonkoech/SafeSense-hardware",
    repoUrl: "https://github.com/leonkoech/SafeSense",
    details:
      "Intelligent Vehicle Safety Enhancement System for sideswipe accident using sensors, machine learning (ML), and a mobile app",
    languages: [languages["C/C++"], languages.dart, languages.python],
    category: categories.embedded,
    demoUrl: "https://youtube.com/embed/otOr7AKOqLk",
    team: true,
    members: [
      { name: "Sarah", url: "" },
      { name: "Genesis", url: "" },
      { name: "Ishaan", url: "" }
    ]
  },
  {
    name: "SHIVR - Subtle Haptics In Virtual Reality",
    id: "shivr",
    thumbnail:
      "https://github.com/user-attachments/assets/6ddc95b3-94b9-41f6-8e2e-1dd01ef391e9",
    about:
      "Developed at Stanford University. Subtle Haptics In Virtual Reality (SHIVR) unity sdk. Open Source sdk for haptics, check https://github.com/leonkoech/SHIVR-Hardware for hardware code",
    repoUrl: "https://github.com/leonkoech/SHIVR-hardware",
    details:
      "Simple unity SDK that brings the power of vibrotactile haptic feedback to developers using ultra-leap hand-tracking for simple and subtle hand interactions in Virtual Reality Environments.",
    languages: [languages["C#"], languages["C/C++"]],
    category: categories.vrar,
    demoUrl: "https://www.youtube.com/embed/B9XWB_IVgnA",
    team: true,
    members: [
      { name: "Mahima", url: "https://www.linkedin.com/in/mahimaadvilkar" },
      { name: "Aya", url: "https://www.linkedin.com/in/ayaf" },
      { name: "Jason", url: "https://www.linkedin.com/in/jasonpgilbert" }
    ]
  },
  {
    name: "Tacti-Sight",
    id: "tacti-sight",
    thumbnail:
      "https://github.com/leonkoech/tactile-sight/assets/147263678/572b1af8-1020-4817-a942-55a999b2c34e",
    about:
      "Made at UCF. Tactile haptic system that uses ultrasonic sensors to provide cutaneous input through fingers for blind individuals.",
    repoUrl: "https://github.com/leonkoech/tactile-sight",
    details:
      "A tactile haptic wearable system that uses ultrasonic sensors to provide cutaneous input based on haptic object recognition and spatial object localization via vibration on the fingers of visually impaired individuals.",
    languages: [languages["C#"], languages["C/C++"]],
    category: categories.embedded,
    demoUrl: "https://www.youtube.com/embed/DaEQ_TnlU9k",
    team: true,
    members: [
      {
        name: "Jake",
        url: "https://www.linkedin.com/in/jake-tattersall-77930a250/"
      },
      { name: "Scott", url: "https://www.linkedin.com/in/valentinescott03" },
      { name: "Christopher", url: "https://www.linkedin.com/in/chrisalbear" }
    ]
  },
  {
    name: "Autism Detector",
    id: "autism-detector",
    thumbnail:
      "https://github.com/user-attachments/assets/25fc9815-101b-43ea-8670-ad963377e1f9",
    about:
      "Developed at Harvard. Unity SDK to enable developers detect and act upon sensory overload in autistic individuals during XR experiences.",
    repoUrl: "https://github.com/leonkoech/AutismDetector",
    details:
      "Unity, Eye Tracking API, Magic Leap | Unity SDK to enable developers detect and act upon sensory overload in autistic individuals during XR experiences.",
    languages: [languages["C#"]],
    category: categories.vrar,
    demoUrl: "https://www.youtube.com/embed/MH-ThvZUHNE",
    team: true,
    members: [
      { name: "Rukhshan", url: "https://github.com/rukhshan23" },
      { name: "Darius", url: "https://github.com/Dariushuangg" },
      { name: "Alex", url: "https://github.com/InquilineKea" }
    ]
  },
  {
    name: "Haptic Vision",
    id: "haptic-vision",
    thumbnail:
      "https://github.com/user-attachments/assets/2bd56423-e20a-4ea8-a2e1-3753f293af33",
    about:
      "Made at MIT. Using haptic gloves(haptx) to interact with mixed reality mesh colliders via SRworks' Camera Vision API hence delivering tactile and haptic feedback without Physical touch",
    repoUrl: "https://github.com/leonkoech/HapticVision",
    details:
      "Unity, HaptxSDK, Htc Vive, SRWorks | Enable the visually impaired to feel objects without coming into contact with them using haptic feedback and Depth perception in VR",
    languages: [languages["C#"]],
    category: categories.vrar,
    demoUrl: "https://www.youtube.com/embed/4b5lR5_ubpw",
    team: true,
    members: [
      { name: "Kyle", url: "https://devpost.com/kdiaz3451" },
      { name: "Christine", url: "https://devpost.com/christineksader" },
      { name: "Winny", url: "https://devpost.com/winnyw12138" },
      { name: "Malcom", url: "" }
    ]
  },
  {
    name: "Beesper",
    id: "beesper",
    thumbnail:
      "https://github.com/user-attachments/assets/297a09cd-dda1-4f43-8625-dcf68c7f5cd7",
    about:
      "Developed at MIT reality hack 2023. Winner best use of ultraleap hand tracking. Gamification of ASL learning using Ultraleap pose recording + Unity Multiplayer (NetCode)",
    repoUrl: "https://codeberg.org/reality-hack-2024/Beesper",
    details:
      "Developed at MIT. Gamification of ASL learning using Ultraleap pose recording + Unity Multiplayer (NetCode)",
    languages: [languages["C#"], languages.java],
    category: categories.vrar,
    demoUrl: "https://youtube.com/embed/LqD5QoUezJ8",
    team: true,
    members: [
      { name: "Linet", url: "" },
      { name: "Kelly", url: "" },
      { name: "Jingfei", url: "" },
      { name: "Luis", url: "" }
    ]
  },
  
  {
    name: "City Hackathon",
    id: "city-hackathon",
    thumbnail:
      "https://github.com/user-attachments/assets/30d5a069-1e9e-4f93-9643-b5afc19f2b22",
    about:
      "Made at City Hackathon 2023. First Place Winner. A tool that provides Habitat for Humanity employees with a visually-friendly interface to process up to 30,000 pre-applications, ultimately \
narrowing down to the 50 applicants who will receive a home.",
    repoUrl: "https://github.com/leonkoech/city-hackathon-server",
    details:
      "Tool that provides Habitat for Humanity employees with\
       an interface to process up to 30,000 pre-applications down to the 50",
    languages: [languages.python, languages.javascript],
    category: categories.fullStack,
    demoUrl: "https://youtube.com/embed/34k2rnf4mBI",
    team: true,
    members: [
      { name: "Lia", url: "" },
      {
        name: "Ashley",
        url: ""
      },
      { name: "Maria", url: "" },
      { name: "Ashley", url: "" },
      { name: "Aimee", url: "" }
    ]
  },
  {
    name: "Mi Art",
    id: "mi-art",
    thumbnail:
      "https://github.com/user-attachments/assets/166f4eda-34cd-47b9-9766-348f01233c13",
    about:
      "Made at MDC. Third Place Miami Hack Week 2022. A blockchain-based platform that allows artists to tokenize and trade 2D and \
    3D artwork as NFTs, leveraging MiamiCoin and augmented reality for a seamless integration of physical and digital art. ",
    repoUrl: "https://github.com/leonkoech/mhw",
    details:
      "Flutter |  A blockchain-based platform that allows artists to tokenize and trade 2D and \
    3D artwork as NFTs, leveraging MiamiCoin and augmented reality for a seamless integration of physical and digital art.",
    languages: [languages.dart],
    category: categories.android,
    demoUrl: "https://youtube.com/embed/3d02HV6QYDk",
    team: true,
    members: [
      { name: "Erbol", url: "https://www.linkedin.com/in/erbol-nishanov" },
      {
        name: "Cecilia",
        url: "https://www.linkedin.com/in/ceciliagervasonilatorre"
      },
      { name: "Moises", url: "https://www.linkedin.com/in/moisesrendiles" }
    ]
  },
  {
    name: "Expressive Emotions VR",
    id: "expressive-emotion-vr",
    thumbnail:
      "https://github.com/user-attachments/assets/4256c898-7f17-4de0-a7a8-ab0efb1385d7",
    about:
      "Developed at MIT reality hack 2023. Semi-finalist. Enhancing Emotional Expression through Personalized Chromotherapy in Virtual Reality",
    repoUrl: "https://github.com/Reality-Hack-2022/TEAM-43",
    details:
      "Chromotherapy in VR based on your level of enjoyment matched to \
        color. The perfect example of literally expressing yourself through art.",
    languages: [languages["C#"], languages.java],
    category: categories.vrar,
    demoUrl: "https://devpost.com/software/expressive-emotion-vr",
    team: true,
    members: [
      { name: "Mayara", url: "https://devpost.com/mayaramars0" },
      { name: "Jiujun", url: "https://devpost.com/fengj130" },
      { name: "Abdi", url: "https://devpost.com/Hisaack" },
      { name: "Delmi", url: "https://devpost.com/delmiortega9" }
    ]
  },
  {
    name: "NeuroCognitive Study Assistant",
    id: "neurocognitive-study-assistant",
    thumbnail:
      "https://github.com/user-attachments/assets/cb1ef702-79ad-49e0-bc37-76cb9066b5fc",
    about:
      "Developed At Florida International University. Enhancing Student Focus and Performance with Brain-Computer Interfaces",
    repoUrl: "https://github.com/leonkoech/NeuroCognitive-Study-Assistant",
    details:
      "NextJs | Improving productivity through focus tracking using the Neuos headband",
    languages: [languages.javascript, languages.java],
    category: categories.fullStack,
    demoUrl: "https://devpost.com/software/focus-buddy-8fwa9g",
    team: true,
    members: [
      { name: "Coral", url: "https://github.com/cmini004" },
      { name: "Camila", url: "https://github.com/catastrxphic" },
      { name: "Kristian", url: "https://github.com/Ceaseless04" }
    ]
  },
      
  {
    name: "Closet Light",
    id: "closet-light",
    thumbnail:
      "https://github.com/user-attachments/assets/45e5a499-b1b1-4c6c-be85-66fa63caac99",
    about:
      "Fun Project. An auto-detection system to turn on or off LED lighting based on human presence. With ability to change colors and functionality based on the remote IR sender signal codes",
    repoUrl: "https://github.com/leonkoech/closet_light",
    details:
      "An auto-detection system to turn on or off LED lighting based on human presence. With ability to change colors and functionality based on the remote IR sender signal codes",
    languages: [languages["C/C++"]],
    category: categories.embedded,
    demoUrl: "https://twitter.com/Leonkoech_/status/1720908921487884469",
    team: false,
    members: []
  },
  {
    name: "Zux Burgers",
    id: "zux-burgers",
    thumbnail: "https://github.com/user-attachments/assets/0c9a20fc-b4f9-4091-9d69-c47a21151e3c",
    about: "A burger shop website for Mwania and Zuki (Zux)",
    repoUrl: "https://github.com/leonkoech/Zux-Burgers-App",
    details:
      "VanillaJS, firebase | A burger shop website for Mwania and Zuki (Zux)",
    languages: [languages.javascript],
    category: categories.fullStack,
    demoUrl: "https://youtube.com/embed/naRgyTZHO9U",
    team: false,
    members: []
  },
  {
    name: "Color QR generator",
    id: "color-qr-generator",
    thumbnail: "https://user-images.githubusercontent.com/39020723/134251696-6502183a-0016-4a65-acb5-05c234295841.png",
    about: "User-friendly interface to generate QR codes based on input text",
    repoUrl: "https://github.com/leonkoech/Color-QR-Generator",
    details:
      " Flask | Generate \
        colorful QR codes based on the text input and the colors selected",
    languages: [languages.python, languages.javascript],
    category: categories.fullStack,
    demoUrl: "https://qrcodegen-app.herokuapp.com/",
    team: false,
    members: []
  },
  {
    name: "Personal Portfolio",
    id: "portfolio",
    thumbnail: "",
    about: "",
    repoUrl: "https://leonkoech.com",
    details: "AngularJs | Personal portfolio",
    languages: [languages.javascript, languages.typescript],
    category: categories.frontEnd,
    demoUrl: "https://leonkoech.com",
    team: false,
    members: []
  },
  {
    name: "Umoja",
    id: "umoja",
    thumbnail: "",
    about: "Developed for Boston University. A mental health support app designed to provide free talk therapy to individuals who cannot afford it",
    repoUrl: "https://github.com/leonkoech/umoja",
    details: "Flutter | provide free therapy through crowd funding",
    languages: [languages.dart],
    category: categories.fullStack,
    demoUrl: "https://youtube.com/embed/WZu61DK7Ucc",
    team: false,
    members: []
  },
  {
    name: "ChatGPT for AR",
    id: "chatgpt-ar",
    thumbnail: "https://github.com/user-attachments/assets/0e8155d0-7180-4bc4-85a5-f0d188a1fab1",
    about: "The project aims to enhance the experience of students and individuals using ChatGPT, particularly focusing on those with disabilities. ",
    repoUrl: "https://github.com/leonkoech/flaskGPTVR",
    details:
      "ChatGPT for AR whereby you can issue commands to ChatGPT with your voice and receive both Textual and Audio feedback. For STT and TTS we leveraged Wit.ai and created our own server for ChatGPT hosted on Google Cloud.",
    languages: [languages["C#"], languages["C/C++"]],
    category: categories.vrar,
    demoUrl: "https://youtube.com/embed/H8HpLWBoN7E",
    team: true,
    members: [
      { name: "Carlos", url: "https://www.linkedin.com/in/carlosjrequena" },
      { name: "Jason", url: "https://www.linkedin.com/in/jason-lee-b473711b6" },
      { name: "Maryam", url: "" }
    ]
  },
  {
    name: "Google Design",
    id: "google-design",
    thumbnail: "",
    about: "",
    repoUrl: "https://design.google.com",
    details: "NextJS | Google client project",
    languages: [languages.typescript, languages.javascript],
    category: categories.frontEnd,
    demoUrl: "https://design.google.com",
    team: true,
    members: [
      { name: "Michelle", url: "https://github.com/michellecruz" },
      { name: "John", url: "https://github.com/jhnbkr" },
      { name: "Aman", url: "https://github.com/amans330" },
      { name: "Antonella", url: "https://github.com/asolomon412" },
      { name: "Dan", url: "https://github.com/daschechter" },
      { name: "Jared", url: "https://github.com/jaredmoran" }
    ]
  },
  {
    name: "Newsletter For Change",
    id: "newsletters-for-change",
    thumbnail: "https://github.com/user-attachments/assets/04c4316f-4561-4ad4-9ad9-17680984474e",
    about: "A system to enable Opportunity Hack to email volunteers and admins easily and for free using a custom, in-house, Content Management System integrated with Ohacks backend+ OAuth",
    repoUrl: "https://design.google.com",
    details: "ReactJS, Flask API | Sending Newsletters for Nonprofits",
    languages: [languages.typescript, languages.javascript, languages.python],
    category: categories.fullStack,
    demoUrl: "https://youtube.com/embed/TuNBOnb_W0M",
    team: true,
    members: [
      { name: "Kaustubh Negi", url: "https://devpost.com/knegi2" },
      { name: "nonsoxoo Okonkwo", url: "https://devpost.com/nonsoxoo" },
      { name: "Annish Lukkireddy", url: "https://devpost.com/anishlukkireddy" }
    ]
  },
  {
    name: "Life Scale",
    id: "life-scale",
    thumbnail: "https://github.com/user-attachments/assets/462def24-443b-41e2-a691-71653be19fda",
    about: "Made at Harvard. LifeScale is your tool to help keep track of different facets of your life. Get disciplined, receive curated recommendations, and take control of your life with LifeScale.",
    repoUrl: "https://github.com/leonkoech/BalancedLife",
    details: "AngularJS | help people live more balanced and meaningful lives.",
    languages: [languages.typescript, languages.javascript],
    category: categories.fullStack,
    demoUrl: "https://balancedlife-a993e.web.app/",
    team: true,
    members: [
      { name: "Vineeth", url: "https://github.com/VineethNareddy" },
      { name: "Advait", url: "https://github.com/AdvaitBorkar" },
      { name: "Felipe", url: "https://github.com/fdesena" }
    ]
  },
  {
    name: "LunchBox.io",
    id: "lunchbox-io",
    thumbnail: "https://user-images.githubusercontent.com/39020723/81902675-34802580-95c9-11ea-9d8d-e1eb4b143afd.png",
    about: "Provides a platform for content creators to publish articles, with a monetization model driven by user engagement. Similar to Medium",
    repoUrl: "https://github.com/leonkoech/Lunchbox.io",
    details:
      "PHP | like medium it offers \
         claps,membership payment,public articles,private articles &\
         verification.",
    languages: [languages.php],
    category: categories.fullStack,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "EasyDjango",
    id: "easy-django",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Easydjango",
    details:
      "A script for creating and running django webapps\
         (both projects and apps) with one command",
    languages: [languages.python],
    category: categories.scripting,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Websockets Chat App",
    id: "websockets-chat",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Websockets-Chat-App",
    details:
      "A simple RealTime TCP chat app for humans\
        made with tornado websocket\
         framework.",
    languages: [languages.python],
    category: categories.networking,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Assembly Compiler",
    id: "assembly-compiler",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Assembly-Language-Compiler",
    details:
      "A compiler that outputs your java or c or dott \
        (a combination of both based on my lex grammar) code in \
        Assembly language",
    languages: [languages.python],
    category: categories.compilers,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Cat App",
    id: "cat-app",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/CatApp",
    details:
      " Flutter | An encyclopedia \
        for cats, a community for Q&A's about your cat, \
        posts about your cat and tracking your cat's health.",
    languages: [languages.dart],
    category: categories.android,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Battery Level",
    id: "battery-level",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Battery-Level",
    details:
      "Flutter | get the battery level of an \
        android device using platform specific code ie. java",
    languages: [languages.dart, languages.java],
    category: categories.android,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Easy Mail",
    id: "easy-mail",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Easymail",
    details:
      "A simple automation script that sends emails \
        to any number of addresses",
    languages: [languages.python],
    category: categories.scripting,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Easy Git",
    id: "easy-git",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/Easygit",
    details:
      "Create projects on github \
        and locally then push it to github both with separate \
        one line commands",
    languages: [languages.python],
    category: categories.scripting,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Dynamic Gauge",
    id: "dynamic-gauge",
    thumbnail: "",
    about: "",
    repoUrl: "https://codepen.io/leonkoech/pen/dymXYMp",
    details: "Dynamic gauge based on three levels",
    languages: [languages.javascript],
    category: categories.frontEnd,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Text transitions",
    id: "text-transitions",
    thumbnail: "",
    about: "",
    repoUrl: "https://codepen.io/leonkoech/pen/eYKVovP",
    details: "transitioning texts based on an input",
    languages: [languages.javascript],
    category: categories.frontEnd,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Swahili",
    id: "swahili",
    thumbnail: "",
    about: "",
    repoUrl: "https://github.com/leonkoech/swahili",
    details:
      "A rainmeter skin intended to translate swahili sayings to either english or japanese",
    languages: [languages.lua],
    category: categories.scripting,
    demoUrl: "",
    team: false,
    members: []
  },
  {
    name: "Map Me",
    id: "map-me",
    thumbnail: "",
    about: "A web application that shows a map full of photo markers of students from different countries, where you can filter the map by country and major.",
    repoUrl: "https://github.com/Ceaseless04/MapModel",
    details:
      "NextJs | Connect students from all over the \
        world based on places of origin with Google Maps Platform APIs",
    languages: [languages.typescript, languages.javascript],
    category: categories.fullStack,
    demoUrl: "https://youtube.com/embed/LCxi2MA5Hio",
    team: true,
    members: [
      { name: "Coral", url: "https://github.com/cmini004" },
      { name: "Camila", url: "https://github.com/catastrxphic" },
      { name: "Kristian", url: "https://github.com/Ceaseless04" }
    ]
  }
];
