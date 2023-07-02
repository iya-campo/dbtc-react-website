export interface INews {
    id: number,
    title: string,
    datePosted: string,
    content: string,
    image: string,
    tags: string[],
}

export const News: INews[] = [
    {
        id: 0,
        title: 'Finalist in the 2016 MACC Painting Cometition! #TinapayNgBuhay',
        datePosted: 'December 11, 2017',
        content: 'Recently, selected students from the Don Bosco Architecture Departments were chosen to represent the college in the 2 nd National Student Summit on Hospitals Safe from Disasters held on September 5, 2017 at Ciudad Christia 9 Waves Resort, San Mateo Rizal. This event was hosted by the Department of Health (Health Facility Development Bureau and Health Emergency Management Bureau)',
        image: 'archifinalist.jpg',
        tags: ['archi'],
    },
    {
        id: 1,
        title: 'Architecture department represents in 2nd National Summit',
        datePosted: 'December 11, 2017',
        content: 'The DB Architecture Department is also engaged in community outreach programs. In this photo, the Architecture department conducted a face-lift project at Brgy. Vergara by painting a mural in partnership with Boysen Paints and Philippine Institute of Architects, Manila Section.',
        image: 'boysen.png',
        tags: ['archi'],
    },
    {
        id: 2,
        title: 'The Don Bosco Architecture Program celebrated its 10th year Anniversary',
        datePosted: 'December 11, 2017',
        content: 'The Don Bosco Architecture Program celebrated its 10th year Anniversary and held its first ever Alumni Homecoming attended by Alumni, Faculty, guests, sponsors and students at the Max’s Restaurant, Mandala Park last July 21. The said event is also dedicated to the Bosconian Architects who bring such honour to the name of the school. There are already 13 Bosconian who are already Licensed Architects namely: Arch. Philippe Ador, Arch. Gabriele Sam Alviola, Arch. David Louie Falcon, Arch. Ma. Theresa Felix, Arch. Marben Galvan, Arch. Rafael Hipolito, Arch. Mark Angelo Jacinto, Arch. Dennis Lee, Arch. Rodrigo Malunhao, Arch. Patrick Mari Rodriguez, Arch. Jose Daniel Rosales, Arch. Mon Jekris Serviňo, Arch. Erwin John Tejada.',
        image: 'archilicense.png',
        tags: ['archi'],
    },
    {
        id: 3,
        title: 'World Architecture Day & Nationwide Architecture Day',
        datePosted: 'December 11, 2017',
        content: 'The DB Architecture Department is also engaged in community outreach programs. In this photo, the Architecture department conducted a face-lift project at Brgy. Vergara by painting a mural in partnership with Boysen Paints and Philippine Institute of Architects, Manila Section.',
        image: 'archiathletics.png',
        tags: ['archi'],
    },
    {
        id: 4,
        title: 'The Architecture department\'s involvement in other organizations',
        datePosted: 'December 11, 2017',
        content: 'The department is also an active member of the Philippine Institute of Architecture junior and United Architects of the Philippines Student Auxiliary.',
        image: 'activemember.png',
        tags: ['archi'],
    },
    {
        id: 5,
        title: 'Congratulations ECE + ECT Board Passers 2016-2017!',
        datePosted: 'December 11, 2017',
        content: `
            2017 ECE Board Exam: First Timers: 75%
            <br />
            National Passing Rate: 46.72%
            <br />
            DBTC Passing Rate: 56.56%
        `,
        image: 'ECE+ECT-Board-Passers-2017+2016.jpg',
        tags: ['ece'],
    },
    {
        id: 6,
        title: 'Amateur Radio Club WPX, 1st Place',
        datePosted: 'December 11, 2017',
        content: 'Amataur Radio club won 1st place in the recently concluded World-Wide WPX Contest. The club is composed of BSECE/BSCPE and BSIT students.',
        image: 'Amateur-Radio-Club-WPX-1st-Place.png',
        tags: ['ece'],
    },
    {
        id: 7,
        title: 'Winning 3rd Place in the recent ICPEP Quiz Bowl Challenge',
        datePosted: 'December 11, 2017',
        content: 'Angelo Arden Sison Brual, Carl Joseph Castillon, and Paulo Nunez for ICPEP Quiz Bowl is an event which aims to promote camaraderie, sportsmanship, and integrity among different member regions in the Philippines. It is also a avenue for the member schools per region to develop their comprehension and familiarity with the core subjects of the Computer Engineering Program.',
        image: 'ICPEP-Quiz-Bowl-Challenge-2017.png',
        tags: ['cpe'],
    },
    {
        id: 8,
        title: 'PLDT Innolab Project Revalida, 1st Place',
        datePosted: 'December 11, 2017',
        content: `
            Congratulations to Paulo Martin D. Nuñez of Computer Engineering Department for the awards received in The Project Revalida held at PLDT Innolab 3/F last July 26, 2017. Together with the two students from UST, they were awarded with the following certifications: Top 1 Overall, Top 2 Project Revalida and Top 1 Project Expo. Industry partners.
            <br />
            Analog Devices (scholarship internship)
            <br />
            Rohm Electronics (created INTEGRATED circuit)
        `,
        image: 'PLDT-Innolab-Project-Revalida-1st-place.jpg',
        tags: ['cpe'],
    },
    {
        id: 9,
        title: 'Congratulations to the CPE department for being CHAMPION in the CPE Challenge 2013',
        datePosted: 'December 11, 2017',
        content: 'Attaining the title of CHAMPION in the acer-ICPEP CPE Challenge 2014 they received the trophy symbolizing their victory as well as an Acer Iconia Tablet and PHP5,000 in cash.',
        image: 'cpe3.png',
        tags: ['cpe'],
    },
    {
        id: 10,
        title: 'Shell Mileage Marathon',
        datePosted: 'December 11, 2017',
        content: 'The SEM may be new to Asia but it began in 1939 as the “Shell Mileage Marathon” in the United States. Scientists at a Shell laboratory challenged one another to determine whose car gave the best mileage.',
        image: 'ecomarathon.jpg',
        tags: ['me'],
    },
    {
        id: 11,
        title: 'The Servant One Electric Jeepney',
        datePosted: 'December 11, 2017',
        content: 'Don Bosco Technical College Mechanical Engineering students Rodette Astoriano, Michale Tan and Joseph Santos who assembled the “Servant One” electric jeepney. Photo by Aries Joseph Hegina/INQUIRER.net Astoriano shared his group’s plans for the future of the electric jeepney, which is seen as the future of land transportation in the country. He said that he wants the Servant One to utilize solar energy and to become sustainable.',
        image: 'jeepney.jpg',
        tags: ['me'],
    },
    {
        id: 12,
        title: 'Congratulations to the first batch of graduates of BS Entrep!',
        datePosted: 'December 11, 2017',
        content: 'Congratulations to the first ever graduates of BS in Entepreneurship of Don Bosco Technical College',
        image: 'entrepgraduate.png',
        tags: ['entrep'],
    },
    {
        id: 13,
        title: 'New course Aircraft Maintenance(AMT)!',
        datePosted: 'December 11, 2017',
        content: 'The school has reputable industry partners where the students spend their “supervised in plant training” (SIPT) and serve as venues for job placements (locally and globally). Furthermore, the school ensures a solid network of companies where the students can find work immediately after graduation and through the course of their professional careers.',
        image: 'amt.png',
        tags: ['amt'],
    },
    {
        id: 14,
        title: 'Congratulations to the IT/CS Department for being the finalist in the IBM Bluemix Challenge',
        datePosted: 'December 11, 2017',
        content: 'Represented by Ronald Amos and Jerome Bonganay. Retrieving the trophy symbolizing their achievement. Given this 18th day of September 2014. AIM Conference Center, Makati City',
        image: 'Itcspic1.png',
        tags: ['it', 'cs'],
    },
    {
        id: 15,
        title: 'Congratulations to the IT/CS Department for winning 2nd place in WEBCoding Intercollegiate PHP Programming Competition',
        datePosted: 'December 11, 2017',
        content: 'Don Bosco Technical College\'s IT/CS department achieved 2nd place at the 2011 WEBCoding Intercollegiate PHP Programming Competition held in Adamson Univesity last October 1, 2011',
        image: 'Itcspic2.png',
        tags: ['it', 'cs'],
    },
    {
        id: 16,
        title: 'The IT/CS Department are champions at JRU-COMSOC\'s ICT Week-Interschool Competition',
        datePosted: 'December 11, 2017',
        content: 'Outstanding achievement in JRU-COMSOC\'s ICT Week-Interschool Competition held on February 16, 2011, at Jose Rizal University.',
        image: 'Itcspic3.png',
        tags: ['it', 'cs'],
    },
    {
        id: 17,
        title: 'The IT/CS Department are champions at JRU-COMSOC\'s ICT week-Interschool Competition',
        datePosted: 'December 11, 2017',
        content: 'Held at the University of Makati in celebration of its 40th Founding Anniversary. Given this 1st day of March, 2012 at the Mini-Theater University of Makati.',
        image: 'Itcspic4.png',
        tags: ['it', 'cs'],
    },
    {
        id: 18,
        title: 'The CS department are one of the finalists at the 4th PSITE-NCR Research Symposium',
        datePosted: 'December 11, 2017',
        content: 'The Computer Science department\'s Luigi Navas, Justin Maaba, Joaquin Loleng, and Adrian Villamayor. Accompanied by Ms. Shiela Dala, become one of the finalists on UST\'s Event...',
        image: 'Itcspic5.png',
        tags: ['it', 'cs'],
    },
]

export default News;