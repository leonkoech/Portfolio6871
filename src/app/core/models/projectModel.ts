export interface language{
    name: string;
    color: string
}
export interface project{
    name: string,
    repoUrl: string,
    details: string,
    languages: language[],
    category: string,
    demoUrl: string | null,
    team: boolean,
}