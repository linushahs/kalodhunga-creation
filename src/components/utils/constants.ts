type Service = {
  name: string;
  img_lg: string;
  img_sm: string;
};

type Category = {
  title: string;
  services?: Service[];
};

type Project = {
  title: string;
  description: string;
  img: string;
};

type WorkProcessPoint = {
  title: string;
  description: string;
  img: string;
};

type Social = {
  name: string;
  link: string;
};

type Testimonial = {
  comment: string;
  author: string;
  position: string;
  companyLogo: string;
};

type TeamInfo = {
  id: number;
  name: string;
  position: string;
  imgSrc: string;
};

export const servicesCategory: Category[] = [
  {
    title: "Design",
    services: [
      {
        name: "Web and mobile\ndesign",
        img_lg: "/assets/design1_lg.png",
        img_sm: "/assets/design1.png",
      },
      {
        name: "Graphics and logo\ndesign",
        img_lg: "/assets/design2_lg.png",
        img_sm: "/assets/design2.png",
      },
      {
        name: "banner and poster\ndesign",
        img_lg: "/assets/design3_lg.png",
        img_sm: "/assets/design3.png",
      },
      {
        name: "social media and\n3d model",
        img_lg: "/assets/design4_lg.png",
        img_sm: "/assets/design4.png",
      },
    ],
  },
  {
    title: "Maintenance",
  },
  {
    title: "Testing",
  },
  {
    title: "Machine Learning",
  },
  {
    title: "Consultation",
  },
  {
    title: "Data",
  },
  {
    title: "Mobile App",
  },
  {
    title: "User Experience",
  },
  {
    title: "User Interface",
  },
  {
    title: "User Experience",
  },
  {
    title: "User Interface",
  },
];

export const projects: Project[] = [
  {
    title: "pulsewave mobile ui design",
    description: "web design, visual identity",
    img: "/assets/workcard-pic1.png",
  },
  {
    title: "bonewa mobile app development",
    description: "web design, visual identity",
    img: "/assets/workcard-pic3.png",
  },
  {
    title: "pulsewave mobile ui design",
    description: "web design, visual identity",
    img: "/assets/workcard-pic2.png",
  },
  {
    title: "bonewa mobile app development",
    description: "web design, visual identity",
    img: "/assets/workcard-pic3.png",
  },
];

export const workProcessPoints: WorkProcessPoint[] = [
  {
    title: "Define Objectives and Scope",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    img: "/assets/process1.png",
  },
  {
    title: "Plan and Strategize",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    img: "/assets/process1.png",
  },
  {
    title: "Execute and implement",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    img: "/assets/process1.png",
  },
  {
    title: "monitor and evaluate",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    img: "/assets/process1.png",
  },
];

export const teamInfo: TeamInfo[] = [
  {
    id: 1,
    name: "Sumit Yadav",
    position: "C.E.O. / Co-founder",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 2,
    name: "Prajwol Jung Kuwar",
    position: "C.T.O",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 3,
    name: "Hritik Raj Karn",
    position: "V.P.",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 4,
    name: "Ayusha Duwal",
    position: "Human Resource",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 5,
    name: "Sharad Guragain",
    position: "UI/UX designer",
    imgSrc: "/assets/sharad_gn.jpg",
  },
  {
    id: 6,
    name: "Shivam Karn",
    position: "Head Mobile developer",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 7,
    name: "Sunil Shah",
    position: "Frontend Engineer",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 8,
    name: "Ravi Roshan Jha",
    position: "Flutter Developer",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 9,
    name: "Bibek Gautam",
    position: "Head backend developer",
    imgSrc: "/assets/member-pic.png",
  },
  {
    id: 10,
    name: "Gaurav Thagunna",
    position: "Data Analyst/ML Engineer",
    imgSrc: "/assets/member-pic.png",
  },
];

export const socials: Social[] = [
  {
    name: "facebook",
    link: "facebook.com/",
  },
  {
    name: "instagram",
    link: "instagram.com/",
  },
  {
    name: "twitter",
    link: "twitter.com/",
  },
  {
    name: "behance",
    link: "behance.com/",
  },
];

export const testimonials: Testimonial[] = [
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringillaLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    author: "Harry Wells",
    position: "Co founder & ceo of bitkub",
    companyLogo: "/assets/bitkub-logo.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringillaLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    author: "Barry Wells",
    position: "Co founder & ceo of bitkub",
    companyLogo: "/assets/bitkub-logo.png",
  },
  {
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringillaLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet maximus neque. Phasellus vestibulum velit non velit molestie, eu tincidunt ex tristique. Proin at vulputate nibh, eu mollis metus. In fringilla",
    author: "Harrison Wells",
    position: "Co founder & ceo of bitkub",
    companyLogo: "/assets/bitkub-logo.png",
  },
];
