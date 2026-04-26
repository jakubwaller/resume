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
import heroImage from '../images/header.png';
import porfolioImage1 from '../images/portfolio/portfolio-1.gif';
import porfolioImage2 from '../images/portfolio/portfolio-2.gif';
import porfolioImage4 from '../images/portfolio/portfolio-4.gif';
import porfolioImage5 from '../images/portfolio/portfolio-5.gif';
import porfolioImage6 from '../images/portfolio/portfolio-6.gif';
import porfolioImage7 from '../images/portfolio/portfolio-7.gif';
import porfolioImage8 from '../images/portfolio/portfolio-8.gif';
import porfolioImage9 from '../images/portfolio/portfolio-9.gif';
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
      <p className="prose-sm text-ink-200 sm:prose-base lg:prose-lg">
        I'm a Hamburg-based <a className="font-semibold text-white underline decoration-brand-500/50 underline-offset-4 transition-colors hover:text-brand-400 hover:decoration-brand-400" href="https://github.com/jakubwaller">Data Scientist</a>,
        working in climate, at <a className="font-semibold text-white underline decoration-emerald-500/50 underline-offset-4 transition-colors hover:text-emerald-300 hover:decoration-emerald-400" href="https://www.shipzero.com">shipzero</a>. Because there is no Planet B.
      </p>
      <p className="prose-sm text-ink-300 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <a className="font-medium text-ink-100 hover:text-brand-400" href="https://www.strava.com/athletes/22414933">cycling</a> Planet A,
        exploring its climate in various warming scenarios (+1.5°, +2.0°…) using my <a className="font-medium text-ink-100 hover:text-brand-400" href="https://t.me/ProbableFuturesBot">Probable Futures Bot</a>,
        coding <a className="font-medium text-ink-100 hover:text-brand-400" href="https://t.me/coronaimpftermine_hamburg">civic Telegram bots</a>,
        reading an <a className="font-medium text-ink-100 hover:text-brand-400" href="https://www.goodreads.com/user/show/121850617-jakub">interesting book</a>,
        or playing the <a className="font-medium text-ink-100 hover:text-brand-400" href="https://open.spotify.com/album/693WL6HmksSvOJv7pEbsDt?si=ay_RBOGuQeacbq5WaDa-qA">guitar</a>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/jakubwaller_resume.pdf',
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
  description: <p className="prose prose-sm text-zinc-300 sm:prose-base">For the past 2+ years I've been a Data Scientist at <a className="font-semibold text-zinc-100 hover:text-orange-400" href="https://www.shipzero.com">shipzero</a>,
  helping decarbonise global supply chains — building emission models, ML pipelines and data products that turn messy logistics
  data into actionable carbon insights. Because there is no Planet B.
  <br></br>
  <br></br>
  Before that, I spent five years at Qimia GmbH on a wide range of Data Science, Machine Learning and Data Engineering projects,
  then took a year off to travel around our beautiful Planet A. That trip is what convinced me to dedicate the rest of my career
  to climate and data.
  <br></br>
  <br></br>
  I graduated from the Czech Technical University in Prague with a master's thesis on time series classification using artificial
  neural networks, with exchange semesters at the University of Waterloo (Canada) and TalTech (Estonia). Earlier roles include
  Mibcon a.s. (SAP portal apps in Java/AngularJS) and bioinformatics work at the National Institute of Public Health.</p>,
  aboutItems: [
    {label: 'Location', text: <>Hamburg, Germany</>, Icon: MapIcon},
    {label: 'Age', text: <>34</>, Icon: CalendarIcon},
    {label: 'Nationality', text: <>Czech &amp; German</>, Icon: FlagIcon},
    {label: 'Interests', text: <>Cycling, books, music</>, Icon: SparklesIcon},
    {label: 'Study', text: <>Czech Technical University of Prague,<br></br>University of Waterloo,<br></br>TalTech – Tallinn University of Technology</>, Icon: AcademicCapIcon},
    {label: 'Employment', text: <>shipzero (2+ years)</>, Icon: BuildingOffice2Icon},
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
        name: 'XGBoost',
        level: 9,
      },
      {
        name: 'scikit-learn',
        level: 9,
      },
      {
        name: 'Metaflow+MLflow',
        level: 7,
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
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Probable Futures Bot',
    description: "Probable Futures Bot is a Telegram Bot that is connected to the Probable Futures API and sends Probable Future scenarios for either an address or a location.",
    url: 'https://github.com/jakubwaller/probable-futures-bot',
    image: porfolioImage4,
  },
  {
    title: 'Covid Vaccination Appointments Bot',
    description: 'This bot was notifying users about free covid vaccination appointments in four cities: Hamburg, Leipzig, Stuttgart, and Dresden.',
    url: 'https://t.me/coronaimpftermine_hamburg',
    image: porfolioImage2,
  },
  {
    title: 'DALL·E Bot',
    description: 'This cool Telegram Bot can send images generated by OpenAI’s DALL·E.',
    url: 'https://github.com/jakubwaller/dallebot',
    image: porfolioImage8,
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
    title: 'Strava Bot',
    description: 'Strava Bot sends you detailed statistics, graphs and maps after every ride/run/hike.',
    url: 'https://github.com/jakubwaller/strava-data-analysis',
    image: porfolioImage1,
  },
  {
    title: 'Budget Bot',
    description: 'This Telegram Bot keeps track of your budget.',
    url: 'https://github.com/jakubwaller/budgetbot',
    image: porfolioImage11,
  },
  {
    title: 'Cat Bot',
    description: 'This Telegram CatBot can send images/gifs of cats on request. Either randomly or by breed.',
    url: 'https://github.com/jakubwaller/catbot',
    image: porfolioImage5,
  },
  {
    title: 'Resume',
    description: "Who doesn't like recursion",
    url: 'https://github.com/jakubwaller/resume',
    image: porfolioImage9,
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
    content: <>Study Field: Knowledge Engineering
               <br></br>Main Topics: Pattern Recognition, Data Mining Algorithms, Data Preprocessing, Enterprise Data Warehouse Systems, Parallel Algorithms
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
    content: <>Study Field: Computer Science
               <br></br>Main Topics: Programming Languages and Compilers, Algorithms, Operating Systems, Database Systems, Security, Artificial Intelligence
               <br></br>Bachelor’s Thesis: “Simulation of a Quantum Particle on a Twisted 2D Waveguide” (B/1.5)</>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2024 — present',
    location: 'shipzero by Appanion Labs GmbH',
    title: 'Data Scientist',
    content: (
      <p>
        Decarbonising global supply chains. Building emission models, ML pipelines and data products
        that turn messy logistics data into actionable carbon insights for shippers and carriers.
      </p>
    ),
  },
  {
    date: 'November 2017 - November 2022',
    location: 'Qimia GmbH',
    title: 'Data Scientist',
    content: (
      <p>
        Working on various projects involving Data Science, Machine Learning and Data Engineering topics using a wide range of technologies.
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


export const certificates: TimelineItem[] = [
  {
    date: 'October 2023',
    location: 'LinkedIn Learning',
    title: '34 Things to Know about Carbon and Climate',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.linkedin.com/learning/certificates/ad65c2c4c6ad87bc476f8308bf3185805aa8a70071438cc6f0fde85b76a4c168?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOfP6%2BP6RTmSyvxLP6Olcig%3D%3D" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'October 2023',
    location: 'LinkedIn Learning',
    title: 'How to Get a Job in Climate',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.linkedin.com/learning/certificates/9c290adfe6810e8beeb79a99b78df0375d6d3f0c3636c9b7a053495641d79bd1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BOfP6%2BP6RTmSyvxLP6Olcig%3D%3D" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'October 2023',
    location: 'DeepLearning.AI',
    title: 'ChatGPT Prompt Engineering for Developers',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://learn.deeplearning.ai/chatgpt-prompt-eng" rel="noreferrer" target="_blank">
        <span>Course URL ↗</span>
      </a>
    ),
  },
  {
    date: 'November 2022',
    location: 'Kaggle',
    title: 'Data Visualization',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.kaggle.com/learn/certification/jakubwaller/data-visualization" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'July 2022',
    location: 'Coursera',
    title: 'Deploying Machine Learning Models in Production',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.coursera.org/account/accomplishments/certificate/53REXCQ5PHHX" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'July 2022',
    location: 'Coursera',
    title: 'Machine Learning Engineering for Production (MLOps)',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.coursera.org/account/accomplishments/specialization/certificate/ZM4TB7LFHRFA" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'April 2022',
    location: 'Coursera',
    title: 'Machine Learning Modeling Pipelines in Production',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.coursera.org/account/accomplishments/certificate/XST476L3DT42" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'November 2021',
    location: 'Coursera',
    title: 'Machine Learning Data Lifecycle in Production',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.coursera.org/account/accomplishments/certificate/5SGQK7P4T73Z" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'August 2021',
    location: 'Coursera',
    title: 'Introduction to Machine Learning in Production',
    content: (
      <a className="inline-flex items-center gap-x-2 text-sm text-ink-300 hover:text-brand-400 transition-colors" href="https://www.coursera.org/account/accomplishments/certificate/94AA8LVBEA3G" rel="noreferrer" target="_blank">
        <span className="inline-flex items-center gap-x-2"><ArrowDownTrayIcon className="h-4 w-4"/><span>Course Certificate</span></span>
      </a>
    ),
  },
  {
    date: 'May 2021',
    location: 'Microsoft',
    title: 'Microsoft Certified: Azure AI Fundamentals',
    content: (
      <>
        Course Certificate ID: H828-3446
      </>
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
];
