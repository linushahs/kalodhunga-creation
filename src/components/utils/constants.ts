type Service = {
  title: string;
  description: string;
  imgSrc: string;
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
        title: "web and app design",
        description: "mobile and applicaion designing services",
        imgSrc: "/assets/webdesign.jpeg",
      },

      {
        title: "Graphics and logo design",
        description: "mobile and applicaion designing services",
        imgSrc: "/assets/graphicsdesign.jpeg",
      },
      {
        title: "Banner and poster design",
        description: "mobile and applicaion designing services",
        imgSrc: "/assets/servicepic-3.png",
      },
      {
        title: "Social media and 3d model",
        description: "mobile and applicaion designing services",
        imgSrc: "/assets/servicepic-4.png",
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
      "At kalodhunga Creation, our software development process begins with a clear understanding of your objectives and the scope of your project. We collaborate closely with you to define the goals, functionalities, and desired outcomes. By gaining a deep insight into your vision, we lay the foundation for a successful partnership. Your objectives become our guiding star, leading us towards creating innovative and tailored software solutions that precisely align with your business needs.",
    img: "/assets/objective.jpg",
  },
  {
    title: "Plan and Strategize",
    description:
      "Once we perceive your objectives, our experienced team of strategists and developers precisely plan every step of the software development journey. We design a comprehensive roadmap that outlines the development stages, technology stack, and project timelines. Our strategic approach involves identifying potential challenges and designing effective solutions to ensure a seamless development process. We believe in transparency and keep you informed at every stage, ensuring that our strategy aligns perfectly with your expectations.",
    img: "/assets/plan.jpg",
  },
  {
    title: "Execute and implement",
    description:
      "With a robust strategy in place, our skilled development team swings into action. We execute the planned phases of development with precision and expertise. Using cutting-edge technologies and agile methodologies, we transform concepts into functional, user-friendly software applications. Our developers work collaboratively, adhering to best coding practices, industry standards, and quality benchmarks. We take pride in delivering high-quality, scalable, and secure software solutions that exceed your expectations. Timely delivery and flawless execution are our hallmarks.",
    img: "/assets/execute.jpg",
  },
  {
    title: "monitor and evaluate",
    description:
      "Our commitment to excellence doesn't end with the deployment of your software. We understand the importance of continuous improvement and monitoring. Our team conducts precise testing, quality assurance, and performance evaluations to ensure your software operates seamlessly in real-world scenarios. We proactively identify and address any issues, making sure your software functions optimally. Moreover, we provide ongoing support and maintenance services, keeping your software up-to-date and resilient to evolving challenges.",
    img: "/assets/monitor&evaluate.jpg",
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
