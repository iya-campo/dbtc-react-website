export interface IPrograms {
    name: string,
    image: string,
    link?: string,
    desc?: string
}


export const Programs: IPrograms[] = [
    {
        name: 'Architecture',
        image: 'course-1.png',
        link: 'architecture'
    },
    {
        name: 'Information Technology',
        image: 'course-2.png',
        link: 'information-technology'
    },
    {
        name: 'Computer Science',
        image: 'course-3.png',
        link: 'computer-science'
    },
    {
        name: 'Computer Engineering',
        image: 'course-4.png',
        link: 'computer-engineering'
    },
    {
        name: 'Mechanical Engineering',
        image: 'course-5.png',
        link: 'mechanical-engineering'
    },
    {
        name: 'Electronics Engineering',
        image: 'course-6.png',
        link: 'electronics-engineering'
    },
    {
        name: 'Entrepreneurship',
        image: 'course-7.png',
        link: 'entrepreneurship'
    },
    {
        name: 'Associate in Computer Technology',
        image: 'course-8.png',
        link: 'assoc-in-computer-tech'
    },
]


export default Programs;