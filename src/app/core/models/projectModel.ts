export interface language{
    name: string;
    color: string
}
export interface member{
    name: string;
    url: string;
}
export interface project{
    name: string,
    id: string,
    about: string,
    repoUrl: string,
    details: string,
    languages: language[],
    category: string,
    demoUrl: string,
    team: boolean,
    thumbnail: string,
    members: member[] | null,
}