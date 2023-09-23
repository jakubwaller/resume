import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.png';
import porfolioImage5 from '../images/portfolio/portfolio-5.png';
import porfolioImage6 from '../images/portfolio/portfolio-6.png';
import porfolioImage7 from '../images/portfolio/portfolio-7.png';
import porfolioImage8 from '../images/portfolio/portfolio-8.png';
import porfolioImage9 from '../images/portfolio/portfolio-9.png';
import porfolioImage10 from '../images/portfolio/portfolio-10.png';
import porfolioImage11 from '../images/portfolio/portfolio-11.gif';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Jakub Waller',
  description: "Jakub Waller's resume website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jakub Waller.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Hamburg based <strong className="text-stone-100">Data Scientist</strong>, currently looking for
        a job in climate. Because there is no Planet B.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me travelling the <strong className="text-stone-100">Planet A</strong>,
        cycling so that I win the Strava competition organised by
        my <strong className="text-stone-100">Strava Telegram Bot</strong> against my friends,
        building more Telegram bots such as the <strong className="text-stone-100">Probable Futures Bot</strong>,
        reading a <strong className="text-stone-100">good book</strong>,
        or playing a <strong className="text-stone-100">guitar</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: <p className="prose prose-sm text-gray-300 sm:prose-base">For the past almost six years I was working as a Data Scientist/Engineer at Qimia GmbH
  on a number of various projects involving Data Science, Machine Learning and Big Data topics
  using a wide range of technologies.
  <br></br>
  Then I took a year off to travel around our beautiful Planet A.
  After returning, I knew that I want to dedicate my career not only to data, but to climate and data.
  <br></br>
  <br></br>
  I graduated from the Czech Technical University in Prague with a master's thesis focused on
  time series classification using artificial neural networks.
  During my studies I also gained practical experience,
  where the most significant is a cooperation with Datamole, s.r.o. on the above mentioned thesis
  and one data mining project and with Mibcon a.s. programming SAP portal applications in Java,
  AngularJS and HTML.
  <br></br>
  I have gained other valuable experience during two semesters at the Tallinn University of Technology, Estonia
  and the University of Waterloo, Canada.</p>,
  aboutItems: [
    {label: 'Location', text: <>Hamburg, Germany</>, Icon: MapIcon},
    {label: 'Age', text: <>31</>, Icon: CalendarIcon},
    {label: 'Nationality', text: <>Czech</>, Icon: FlagIcon},
    {label: 'Interests', text: <>Cycling, books, music</>, Icon: SparklesIcon},
    {label: 'Study', text: <>Czech Technical University of Prague,<br></br>University of Waterloo,<br></br>TalTech – Tallinn University of Technology</>, Icon: AcademicCapIcon},
    {label: 'Employment', text: <>Loading...</>, Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Czech',
        level: 10,
      },
      {
        name: 'English',
        level: 9,
      },
      {
        name: 'German',
        level: 8,
      }
    ],
  },
  {
    name: 'Data Science',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Spark',
        level: 9,
      },
    ],
  },
  {
    name: 'Machine Learning',
    skills: [
      {
        name: 'xgboost',
        level: 8,
      },
      {
        name: 'scikit-learn',
        level: 8,
      },
      {
        name: 'metaflow+mlflow',
        level: 6,
      },
    ],
  },
  {
    name: 'Cloud',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Azure',
        level: 9,
      },
      {
        name: 'GCP',
        level: 6,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Probable Futures Bot',
    description: "Probable Futures Bot is a Telegram Bot that is connected to the Probable Futures API and sends Probable Future scenarios for either an address or a location.",
    url: 'https://github.com/jakubwaller/probable-futures-bot',
    image: porfolioImage4,
  },
  {
    title: 'Cat Bot',
    description: 'This Telegram CatBot can send images/gifs of cats on request. Either randomly or by breed.',
    url: 'https://github.com/jakubwaller/catbot',
    image: porfolioImage5,
  },
  {
    title: 'Dog Bot',
    description: 'This Telegram DogBot can send images/gifs of dogs on request. Either randomly or by breed.',
    url: 'https://github.com/jakubwaller/dogbot',
    image: porfolioImage6,
  },
  {
    title: 'Leipzig Appointments Bot',
    description: 'Tired of refreshing the page with available appointments at the Leipzig city office? The bot in this channel checks them for you and every minute sends available appointments.',
    url: 'https://github.com/jakubwaller/leipzigappointmentsbot',
    image: porfolioImage7,
  },
  {
    title: 'DALL·E Bot',
    description: 'This cool Telegram Bot can send images generated by OpenAI’s DALL·E.',
    url: 'https://github.com/jakubwaller/dallebot',
    image: porfolioImage8,
  },
  {
    title: 'Resume',
    description: "Who doesn't like recursion",
    url: 'https://github.com/jakubwaller/resume',
    image: porfolioImage9,
  },
  {
    title: 'Twitter Bot Tutorial',
    description: 'Learn how to create a Twitter Bot in 15 minutes.',
    url: 'https://github.com/jakubwaller/twitter-bot-tutorial',
    image: porfolioImage10,
  },
  {
    title: 'Budget Bot',
    description: 'This Telegram Bot keeps track of your budget.',
    url: 'https://github.com/jakubwaller/budgetbot',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2014-2017',
    location: 'Czech Technical University in Prague',
    title: "Master of Science in Informatics",
    content: <>Study Field: Knowledge Engineering; Main Topics: Pattern Recognition, Data Mining Algorithms, Data Preprocessing, Enterprise Data Warehouse Systems, Parallel Algorithms
               <br></br>Master’s Thesis: “Time Series Classification with Artificial Neural Networks” (B/1.5)</>,
  },
  {
    date: '05/2016-09/2016',
    location: 'University of Waterloo',
    title: 'Exchange semester',
    content: <>Main topics: Artificial Intelligence, Forecasting</>,
  },
  {
    date: '08/2014-01/2015',
    location: 'TalTech – Tallinn University of Technology',
    title: 'Erasmus programme',
    content: <>Main topics: Robotics, Malware, Analysis of Programming Languages</>,
  },
  {
    date: '2011-2014',
    location: 'Czech Technical University in Prague',
    title: "Bachelor of Science in Informatics",
    content: <>Study Field: Computer Science; Main Topics: Programming Languages and Compilers, Algorithms, Operating Systems, Database Systems, Security, Artificial Intelligence
               <br></br>Bachelor’s Thesis: “Simulation of a Quantum Particle on a Twisted 2D Waveguide” (B/1.5)</>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2017 - November 2022',
    location: 'Qimia GmbH',
    title: 'Data Scientist',
    content: (
      <p>
        Working on many interesting data science, data engineering and machine learning projects either internally, or for various large and small German and American companies.
      </p>
    ),
  },
  {
    date: 'February 2017 - October 2017',
    location: 'Czech Technical University in Prague',
    title: 'Research Scientist',
    content: (
      <p>
        Comparing various architectures of artificial neural networks (convolutional neural networks, long short-term memory neural networks, and gated recurrent units) on a set of time series classification data sets in terms of the ability to learn, the effectivity of the training process, and the classification performance.
      </p>
    ),
  },
  {
    date: 'March 2015 - October 2016',
    location: 'Mibcon a.s.',
    title: 'Java & JavaScript Developer',
    content: (
      <p>
        Programming SAP portal applications in Java, AngularJS and HTML for a web portal for ČEZ Distribuce, a.s.
      </p>
    ),
  },
  {
    date: 'April 2013 - October 2017',
    location: 'Charles University in Prague',
    title: 'Network Administrator',
    content: (
      <p>
        Maintenance of computers and other technical devices at the Institute of Immunology and Microbiology.
      </p>
    ),
  },
  {
    date: 'September 2013 - June 2014',
    location: 'The National Institute of Public Health',
    title: 'Bioinformatics Analyst',
    content: (
      <p>
        Extracting information from rRNA using various bioinformatics software.
      </p>
    ),
  },
];


/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Let's chat!",
  description: "",
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@jakubwaller.eu',
      href: 'mailto:reachout@jakubwaller.eu',
    },
    {
      type: ContactType.LinkedIn,
      text: 'jakubwaller',
      href: 'https://www.linkedin.com/in/jakubwaller/',
    },
    {
      type: ContactType.Github,
      text: 'jakubwaller',
      href: 'https://github.com/jakubwaller',
    },
    {
      type: ContactType.Twitter,
      text: '@aloissiola42',
      href: 'https://twitter.com/aloissiola42',
    },
    {
      type: ContactType.Instagram,
      text: '@alois_siola',
      href: 'https://www.instagram.com/alois_siola/',
    },
    {
      type: ContactType.Location,
      text: 'Hamburg, Germany',
      href: 'https://maps.app.goo.gl/f3yxsRpANsE8tHVa6',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/jakubwaller'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/7844121/aloissiola'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jakubwaller/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/alois_siola/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/aloissiola42'},
];
