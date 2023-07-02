import { INews } from "@/data/NewsData"

export interface ICourseDetails {
    name: string,
    desc1: string,
    desc2?: string,
    desc3?: string,
    desc4?: string,
    skills?: string[],
    highlights?: INews[]
}
