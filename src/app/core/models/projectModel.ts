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
    repoUrl: string,
    details: string,
    languages: language[],
    category: string,
    demoUrl: string | null,
    team: boolean,
    members: member[] | null,
}