const person = {
  firstName: "Roel",
  lastName: "Macias",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Graphic Designer",
  avatar: "/images/avatar.jpg",
  email: "indeed@roelmacias.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "HTML", "JavaScript", "CSS", "React", "Node.js", "Git", "Linux", "MacOS", "iOS", "Android"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/just-do-it-right",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/solarwinds/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transitioning from web2.0 to web3</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">SolarWinds</strong></>,
    href: "/work/solarwinds",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} at SolarWinds, where I create high-impact visual campaigns and
      <br />design solutions. I have many years of experience
      <br />bringing ideas to life.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Roel is a Senior Graphic Designer with a passion for transforming ideas into reality using elegant design solutions.
        His work spans print, digital, interactive experiences, and the convergence of design and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "SolarWinds",
        timeframe: "NOV 2021 - Present",
        role: "Senior Graphic Design Specialist",
        achievements: [
          <>
            Design banners and emails that are eye-catching, creative, and produce high conversion rates; requires the ability to analyze and learn from the effectiveness of previous campaigns
          </>,
          <>
            Present visual comps to cross-functional teams in support of marketing programs and make modifications based on collaborative feedback
          </>,
          <>
            Create layout comps, rough and presentation material as requested
          </>,
          <>
            Contribute out-of-the-box ideas and innovative concepts to help meet aggressive growth targets for lead generation and corporate awareness
          </>,
          <>
            Collaborate successfully with design team, copywriters, web developers, product management and marketing programs teams
          </>,
          <>
            Effectively present creative materials and ideas to internal stakeholders
          </>,
          <>
            Develop and execute a project from concept to completion
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Hellas Construction",
        timeframe: "OCT 2019 - OCT 2022",
        role: "Graphic Designer",
        achievements: [
          <>
            Strategized, conceptualized, and executed marketing campaigns from ideation to completion, ensuring alignment with business goals and client needs.
          </>,
          <>
            Designed visually compelling banners, email campaigns, and digital assets optimized for high conversion rates; analyze performance metrics to refine future campaigns.
          </>,
          <>
            Created cut sheets, brochures, product launch materials, and physical pitch desks (RFPs) for sales teams to present to large and small organizations.
          </>,
          <>
            Developed in-stadium advertisements, trade show displays, and branded promotional materials tailored to athletic audiences.
          </>,
          <>
            Presented visual comps and layout drafts to cross-functional teams (sales, product management, leadership) and iterate based on feedback.
          </>,
          <>
            Produced presentation materials, including rough drafts and polished visuals, for internal and external use.
          </>,
          <>
            Generated innovative, out-of-the-box design concepts to support lead generation, client acquisition, and corporate visibility.
          </>,
          <>
            Presented creative work to stakeholders with clear rationale and adjustments based on strategic input.
          </>,
          <>
            Managed end-to-end execution of projects, ensuring timely delivery and adherence to brand standards.
          </>,
        ],
        images: [],
      },
      {
        company: "Adlucent",
        timeframe: "FEB 2012 - FEB 2015",
        role: "Lead Graphic Designer",
        achievements: [
          <>
            Owned and evolved Adlucent's visual identity, ensuring consistency across all digital and print materials, including logos, color systems, typography, and brand guidelines.
          </>,
          <>
            Created high-impact creative assets for paid search, social media, email marketing, and landing pages that align with campaign goals (e.g., lead generation, client acquisition, brand awareness).
          </>,
          <>
            Designed pitch decks, one-sheets, case studies, infographics, and RFP responses for the sales team to present to prospective clients.
          </>,
          <>
            Produced engaging content for social platforms, ads, and website updates that resonate with our target audience of marketers, agencies, and product managers.
          </>,
          <>
            Partnered with the marketing team to translate complex data and technical concepts into visually compelling narratives for reports, presentations, and client-facing materials.
          </>,
          <>
            Designed banners, booth graphics, and promotional items for industry events and conferences.
          </>,
          <>
            Established and maintain efficient workflows, templates, and brand assets to streamline design requests in a high-velocity startup environment.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "St. Edward's University",
        description: <>Honed my skills in graphic design, typography, and layout principles.</>,
      },
      {
        name: "Boston University",
        description: <>Studied abroad in London, England during the Summer of 2009.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Fluent in Adobe Creative Suite",
        description: <>I prefer the clean lines of vector so my favorite tool is Illustrator.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Vibe Coding",
        description: <>Able to create simple websites and apps with the help of AI.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "/work/solarwinds",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "/about",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
      link: "https://github.com/just-do-it-right",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
      link: "/work",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
      link: "https://www.linkedin.com/in/solarwinds/",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, work, gallery };
