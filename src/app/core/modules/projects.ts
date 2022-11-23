import { categories,languages } from "./projectCats"
import { member } from "../models/projectModel"
export const projects = [
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.python, languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false,
        members: []
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.dart, languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false,
        members: []

    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.java, languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: true,
        members: [
            {name: "test", url:"https//github.com"},{name: "test", url:"https//github.com"},{name: "test", url:"https//github.com"},{name: "test", url:"https//github.com"}
        ]
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages["C++"], languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false,
        members: []
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages["C#"], languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false,
        members: []
    },
] 