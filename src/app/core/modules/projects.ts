import { categories,languages } from "./projectCats"
import { member } from "../models/projectModel"
export const projects = [
    {
        name: "Zux Burgers",
        repoUrl: "https://github.com/leonkoech/Zux-Burgers-App",
        details: "A burger shop website with vanilla js and firebase for Mwania and Zuki (Zux)",
        languages: [languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://zux-burgers.web.app/",
        team: false,
        members: []
    },
    {
        name: "Color QR generator",
        repoUrl: "https://github.com/leonkoech/Color-QR-Generator",
        details: "Generate \
        colorful QR codes based on the text input and the colors selected",
        languages: [languages.python, languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://qrcodegen-app.herokuapp.com/",
        team: false,
        members: []

    },
    {
        name: "Umoja",
        repoUrl: "https://github.com/leonkoech/umoja",
        details: "An application that provides free therapy through crowd funding",
        languages: [languages.dart],
        category: categories.fullStack,
        demoUrl: "https://devpost.com/software/umoja",
        team: false,
        members: []

    },
    {
        name: "Life Scale",
        repoUrl: "https://github.com/leonkoech/BalancedLife",
        details: "Helping people live more balanced and meaningful lives.helping \
        our users live more balanced and meaningful lives.",
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
        details: "A webapp  similar to medium .\
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
        details: "An automation script for creating and running django webapps\
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
        (robots and cats also included) made with tornado webwocket\
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
        details: "An encyclopedia \
        for cats, a community Q&A's about your cat, \
        where you can add your cat and track it's health.",
        languages: [ languages.dart],
        category: categories.android,
        demoUrl: "",
        team: false,
        members: []
    },
    {
        name: "Battery Level",
        repoUrl: "https://github.com/leonkoech/Battery-Level",
        details: "A flutter app that gets the battery level of an \
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
        details: "A website that connects students from all over the \
        world based on places of origin with some Google Maps APIs",
        languages: [ languages.typescript,languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://mapme-66db2.web.app/",
        team: true,
        members: [
            {name: "Coral", url:"https://github.com/cmini004"},
            {name: "Cami", url:"https://github.com/catastrxphicr"},
            {name: "Kristian", url:"https://github.com/Ceaseless04"},
        ]
    },
    {
        name: "Mi Art",
        repoUrl: "https://github.com/leonkoech/mhw",
        details: "platform that creates a marketplace for artists and creators to \
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
        details: "Improving productivity through focus tracking using the Neuos headband",
        languages: [ languages.javascript,languages.java],
        category: categories.fullStack,
        demoUrl: "https://devpost.com/software/focus-buddy-8fwa9g",
        team: true,
        members: [
            {name: "Coral", url:"https://github.com/cmini004"},
            {name: "Cami", url:"https://github.com/catastrxphicr"},
            {name: "Kristian", url:"https://github.com/Ceaseless04"},
               ]
    },
] 