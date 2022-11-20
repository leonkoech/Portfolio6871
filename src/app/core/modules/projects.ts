import { categories,languages } from "./projectCats"
export const projects = [
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.python, languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.dart, languages.javascript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages.java, languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: true
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages["C++"], languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false
    },
    {
        name: "test project",
        repoUrl: "https://github.com",
        details: "A cool repo and stuff",
        languages: [languages["C#"], languages.typescript],
        category: categories.fullStack,
        demoUrl: "https://google.com",
        team: false
    },
] 