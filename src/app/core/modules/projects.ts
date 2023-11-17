import { categories,languages } from "./projectCats"
import { member, project } from "../models/projectModel"
export const projects: project[] = [
    {
        name: "Zux Burgers",
        repoUrl: "https://github.com/leonkoech/Zux-Burgers-App",
        details: "VanillaJS, firebase | A burger shop website for Mwania and Zuki (Zux)",
        languages: [languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://zux-burgers.web.app/",
        team: false,
        members: []
    },
    {
        name: "Color QR generator",
        repoUrl: "https://github.com/leonkoech/Color-QR-Generator",
        details: " Flask | Generate \
        colorful QR codes based on the text input and the colors selected",
        languages: [languages.python, languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://qrcodegen-app.herokuapp.com/",
        team: false,
        members: []

    },
    {
        name: "Personal Portfolio",
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
        repoUrl: "https://github.com/leonkoech/umoja",
        details: "Flutter | provide free therapy through crowd funding",
        languages: [languages.dart],
        category: categories.fullStack,
        demoUrl: "https://devpost.com/software/umoja",
        team: false,
        members: []

    },
    {
        name: "Closet Light",
        repoUrl: "https://github.com/leonkoech/closet_light",
        details: "An auto-detection system to turn on or off LED lighting based on human presence. With ability to change colors and functionality based on the remote IR sender signal codes",
        languages: [languages["C/C++"]],
        category: categories.embedded,
        demoUrl: "https://twitter.com/Leonkoech_/status/1720908921487884469",
        team: false,
        members: []

    },
    {
        name: "SHIVR - Subtle Haptics In Virtual Reality",
        repoUrl: "https://github.com/leonkoech/SHIVR-hardware",
        details: "Simple unity SDK that brings the power of vibrotactile haptic feedback to developers using ultra-leap hand-tracking for simple and subtle hand interactions in Virtual Reality Environments.",
        languages: [languages["C#"], languages["C/C++"]],
        category: categories.vrar,
        demoUrl: "https://devpost.com/software/shivr-subtle-haptics-in-virtual-environments",
        team: true,
        members: [
            {name: "Mahima", url:"https://www.linkedin.com/in/mahimaadvilkar"},
            {name: "Aya", url:"https://www.linkedin.com/in/ayaf"},
            {name: "Jason", url:"https://www.linkedin.com/in/jasonpgilbert"},
        ]
    },
    {
        name: "Tacti-Sight",
        repoUrl: "https://github.com/leonkoech/tactile-sight",
        details: "A tactile haptic wearable system that uses ultrasonic sensors to provide cutaneous input based on haptic object recognition and spatial object localization via vibration on the fingers of visually impaired individuals.",
        languages: [languages["C#"], languages["C/C++"]],
        category: categories.embedded,
        demoUrl: "https://devpost.com/software/tacti-sight",
        team: true,
        members: [
            {name: "Jake", url:"https://www.linkedin.com/in/jake-tattersall-77930a250/"},
            {name: "Scott", url:"https://www.linkedin.com/in/valentinescott03"},
            {name: "Christopher", url:"https://www.linkedin.com/in/chrisalbear"},
        ]
    },
    {
        name: "Autism Detector",
        repoUrl: "https://github.com/leonkoech/AutismDetector",
        details: "Unity, Eye Tracking API, Magic Leap | Unity SDK to enable developers detect and act upon sensory overload in autistic individuals during XR experiences.",
        languages: [languages["C#"]],
        category: categories.vrar,
        demoUrl: "https://github.com/leonkoech/AutismDetector",
        team: true,
        members: [
            {name: "Rukhshan", url:"https://github.com/rukhshan23"},
            {name: "Darius", url:"https://github.com/Dariushuangg"},
            {name: "Alex", url:"https://github.com/InquilineKea"},
        ]
    },
    {
        name: "Haptic Vision",
        repoUrl: "https://github.com/leonkoech/HapticVision",
        details: "Unity, HaptxSDK, Htc Vive, SRWorks | Enable the visually impaired to feel objects without coming into contact with them using haptic feedback and Depth perception in VR",
        languages: [languages["C#"]],
        category: categories.vrar,
        demoUrl: "https://github.com/leonkoech/HapticVision",
        team: true,
        members: [
            {name: "Kyle", url:"https://devpost.com/kdiaz3451"},
            {name: "Christine", url:"https://devpost.com/christineksader"},
            {name: "Winny", url:"https://devpost.com/winnyw12138"},
            {name: "Malcom", url:""},
        ]
    },
    {
        name: "ChatGPT for AR",
        repoUrl: "https://github.com/leonkoech/flaskGPTVR",
        details: "ChatGPT for AR whereby you can issue commands to ChatGPT with your voice and receive both Textual and Audio feedback. For STT and TTS we leveraged Wit.ai and created our own server for ChatGPT hosted on Google Cloud.",
        languages: [languages["C#"], languages["C/C++"]],
        category: categories.vrar,
        demoUrl: "https://devpost.com/software/team16",
        team: true,
        members: [
            {name: "Carlos", url:"https://www.linkedin.com/in/carlosjrequena"},
            {name: "Jason", url:"https://www.linkedin.com/in/jason-lee-b473711b6"},
            {name: "Maryam", url:""},
        ]
    },
    
  
    {
        name: "ChatGPT server",
        repoUrl: "https://github.com/leonkoech/flaskGPT",
        details: "Server for the chatGPT 4 AR project",
        languages: [languages.python],
        category: categories.api,
        demoUrl: "https://devpost.com/software/team16",
        team: true,
        members: [
            {name: "Carlos", url:"https://www.linkedin.com/in/carlosjrequena"},
            {name: "Jason", url:"https://www.linkedin.com/in/jason-lee-b473711b6"},
            {name: "Maryam", url:""},
        ]
    },
    {
        name: "Google Design",
        repoUrl: "https://design.google.com",
        details: "NextJS | Google client project",
        languages: [languages.typescript, languages.javascript],
        category: categories.frontEnd,
        demoUrl: "https://design.google.com",
        team: true,
        members: [
            {name: "Michelle", url:"https://github.com/michellecruz"},
            {name: "John", url:"https://github.com/jhnbkr"},
            {name: "Aman", url:"https://github.com/amans330"},
            {name: "Antonella", url:"https://github.com/asolomon412"},
            {name: "Dan", url:"https://github.com/daschechter"},
            {name: "Jared", url:"https://github.com/jaredmoran"},
        ]
    },
    {
        name: "Newsletter For Change",
        repoUrl: "https://design.google.com",
        details: "ReactJS, Flask API | Sending Newsletters for Nonprofits",
        languages: [languages.typescript, languages.javascript, languages.python],
        category: categories.fullStack,
        demoUrl: "https://devpost.com/software/ffgf",
        team: true,
        members: [
            {name: "Kaustubh Negi", url:"https://devpost.com/knegi2"},
            {name: "nonsoxoo Okonkwo", url:"https://devpost.com/nonsoxoo"},
            {name: "Annish Lukkireddy", url:"https://devpost.com/anishlukkireddy"},
        ]
    },
    {
        name: "Life Scale",
        repoUrl: "https://github.com/leonkoech/BalancedLife",
        details: "AngularJS | help people live more balanced and meaningful lives.",
        languages: [languages.typescript, languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://balancedlife-a993e.web.app/",
        team: true,
        members: [
            {name: "Vineeth", url:"https://github.com/VineethNareddy"},
            {name: "Advait", url:"https://github.com/AdvaitBorkar"},
            {name: "Felipe", url:"https://github.com/fdesena"},
        ]
    },
    {
        name: "LunchBox.io",
        repoUrl: "https://github.com/leonkoech/Lunchbox.io",
        details: "PHP | like medium it offers \
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
        repoUrl: "https://github.com/leonkoech/Easydjango",
        details: "A script for creating and running django webapps\
         (both projects and apps) with one command",
        languages: [ languages.python],
        category: categories.scripting,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Websockets Chat App",
        repoUrl: "https://github.com/leonkoech/Websockets-Chat-App",
        details: "A simple RealTime TCP chat app for humans\
        made with tornado websocket\
         framework.",
        languages: [ languages.python],
        category: categories.networking,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Assembly Compiler",
        repoUrl: "https://github.com/leonkoech/Assembly-Language-Compiler",
        details: "A compiler that outputs your java or c or dott \
        (a combination of both based on my lex grammar) code in \
        Assembly language",
        languages: [ languages.python],
        category: categories.compilers,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Cat App",
        repoUrl: "https://github.com/leonkoech/CatApp",
        details: " Flutter | An encyclopedia \
        for cats, a community for Q&A's about your cat, \
        posts about your cat and tracking your cat's health.",
        languages: [ languages.dart],
        category: categories.android,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Battery Level",
        repoUrl: "https://github.com/leonkoech/Battery-Level",
        details: "Flutter | get the battery level of an \
        android device using platform specific code ie. java",
        languages: [ languages.dart, languages.java],
        category: categories.android,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Easy Mail",
        repoUrl: "https://github.com/leonkoech/Easymail",
        details: "A simple automation script that sends emails \
        to any number of addresses",
        languages: [ languages.python],
        category: categories.scripting,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Easy Git",
        repoUrl: "https://github.com/leonkoech/Easygit",
        details: "Create projects on github \
        and locally then push it to github both with separate \
        one line commands",
        languages: [ languages.python],
        category: categories.scripting,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Dynamic Gauge",
        repoUrl: "https://codepen.io/leonkoech/pen/dymXYMp",
        details: "Dynamic gauge based on three levels",
        languages: [ languages.javascript],
        category: categories.frontEnd,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Text transitions",
        repoUrl: "https://codepen.io/leonkoech/pen/eYKVovP",
        details: "transitioning texts based on an input",
        languages: [ languages.javascript],
        category: categories.frontEnd,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Swahili",
        repoUrl: "https://github.com/leonkoech/swahili",
        details: "A rainmeter skin intended to translate swahili sayings to either english or japanese",
        languages: [ languages.lua],
        category: categories.scripting,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Map Me",
        repoUrl: "https://github.com/Ceaseless04/MapModel",
        details: "NextJs | Connect students from all over the \
        world based on places of origin with Google Maps Platform APIs",
        languages: [ languages.typescript,languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://mapme-66db2.web.app/",
        team: true,
        members: [
            {name: "Coral", url:"https://github.com/cmini004"},
            {name: "Camila", url:"https://github.com/catastrxphic"},
            {name: "Kristian", url:"https://github.com/Ceaseless04"},
        ]
    },
    {
        name: "Mi Art",
        repoUrl: "https://github.com/leonkoech/mhw",
        details: "Flutter |  marketplace for artists and creators to \
        tokenize both 2D and 3D art (murals, graffiti, installations, sculptures,\
         and other forms of art).",
        languages: [ languages.dart],
        category: categories.android,
        demoUrl: "https://devpost.com/software/mi-art",
        team: true,
        members: [
            {name: "Erbol", url:"https://devpost.com/nishanov-erbol"},
            {name: "Ceci", url:"https://devpost.com/cecigerva"},
            {name: "Moises", url:"https://devpost.com/moirendiles"},
        ]
    },
    {
        name: "Expressive Emotions VR",
        repoUrl: "https://github.com/Reality-Hack-2022/TEAM-43",
        details: "Chromotherapy in VR based on your level of enjoyment matched to \
        color. The perfect example of literally expressing yourself through art.",
        languages: [ languages["C#"],languages.java],
        category: categories.vrar,
        demoUrl: "https://devpost.com/software/expressive-emotion-vr",
        team: true,
        members: [
            {name: "Mayara", url:"https://devpost.com/mayaramars0"},
            {name: "Jiujun", url:"https://devpost.com/fengj130"},
            {name: "Abdi", url:"https://devpost.com/Hisaack"},
            {name: "Delmi", url:"https://devpost.com/delmiortega9"},
        ]
    },
    {
        name: "Focus Buddy",
        repoUrl: "https://github.com/leonkoech/focusBuddy",
        details: "NextJs | Improving productivity through focus tracking using the Neuos headband",
        languages: [ languages.javascript,languages.java],
        category: categories.fullStack,
        demoUrl: "https://devpost.com/software/focus-buddy-8fwa9g",
        team: true,
        members: [
            {name: "Coral", url:"https://github.com/cmini004"},
            {name: "Camila", url:"https://github.com/catastrxphic"},
            {name: "Kristian", url:"https://github.com/Ceaseless04"},
               ]
    },
] 