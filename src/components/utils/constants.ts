type Service = {
  title: string;
  description: string;
  imgSrc: string;
};

type Project = {
  title: string;
  description: string;
  img: string;
};

type WorkProcessPoint = {
  title: string;
  description: string;
  short_description: string;
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

export const servicesCategory: Record<string, Service[]> = {
  design: [
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
  maintenance: [
    {
      title: "Application Maintenance and Support",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=869&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "24/7 Support",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Disaster Recovery and Business Continuity Planning",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1484662020986-75935d2ebc66?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Data Migration",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&q=80&w=1102&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  consulting: [
    {
      title: "IT Consulting",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1663047145996-cdb1ef24a17a?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Digital Transformation",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Product Strategy and Roadmapping",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1664476348783-33fb49529d6d?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Competitive Analysis",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=876&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "QA & Security": [
    {
      title: "Quality Assurance and Testing",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Cybersecurity Services",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&fit=crop&q=80&w=1030&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Compliance and Regulatory Support",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Competitive Analysis",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?auto=format&fit=crop&q=80&w=876&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  management: [
    {
      title: "Infrastructure Management",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Cloud Services",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1684522168034-32f22b4b7eef?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Scalability Planning",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1664476348783-33fb49529d6d?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Partnership and Collaboration Opportunities",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "User Experience": [
    {
      title: "User Experience (UX) and User Interface (UI) Design",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&q=80&w=901&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Open Source Software Contributions",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&q=80&w=888&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Legal and Intellectual Property Support",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "Data & Analytics": [
    {
      title: "Data Analytics and Business Intelligence",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1115&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "Big Data Solutions",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661301037210-47bf02c98ded?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "AI and Machine Learning Services",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1032&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Localization and Globalization",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1638202950928-83a735a11058?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "Business Solutions": [
    {
      title: "ERP (Enterprise Resource Planning) Systems",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661301087289-a9067c2f933f?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      title: "E-commerce Solutions",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1684785617123-8dd039cdb2c2?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "CRM (Customer Relationship Management) Systems",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Industry-Specific Solutions",
      description: "mobile and applicaion designing services",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661301037210-47bf02c98ded?auto=format&fit=crop&q=80&w=870&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

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
    short_description:
      "Kalodhunga Creation starts with a thorough understanding of your objectives and project scope, collaborating closely to define goals, functionalities, and desired outcomes, guiding us to create innovative, tailored software solutions.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Plan and Strategize",
    description:
      "Once we perceive your objectives, our experienced team of strategists and developers precisely plan every step of the software development journey. We design a comprehensive roadmap that outlines the development stages, technology stack, and project timelines. Our strategic approach involves identifying potential challenges and designing effective solutions to ensure a seamless development process. We believe in transparency and keep you informed at every stage, ensuring that our strategy aligns perfectly with your expectations.",
    short_description:
      "Our team of strategists and developers meticulously plan the software development journey, creating a comprehensive roadmap, identifying challenges, and designing effective solutions, ensuring transparency and alignment with your expectations.",
    img: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&q=80&w=2068&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Execute and implement",
    description:
      "With a robust strategy in place, our skilled development team swings into action. We execute the planned phases of development with precision and expertise. Using cutting-edge technologies and agile methodologies, we transform concepts into functional, user-friendly software applications. Our developers work collaboratively, adhering to best coding practices, industry standards, and quality benchmarks. We take pride in delivering high-quality, scalable, and secure software solutions that exceed your expectations. Timely delivery and flawless execution are our hallmarks.",
    short_description:
      "Our skilled development team uses cutting-edge technologies and agile methodologies to transform concepts into functional, user-friendly software applications. We adhere to industry standards, delivering high-quality, scalable, and secure solutions.",
    img: "https://images.unsplash.com/photo-1574790398664-0cb03682ed1c?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "monitor and evaluate",
    description:
      "Our commitment to excellence doesn't end with the deployment of your software. We understand the importance of continuous improvement and monitoring. Our team conducts precise testing, quality assurance, and performance evaluations to ensure your software operates seamlessly in real-world scenarios. We proactively identify and address any issues, making sure your software functions optimally. Moreover, we provide ongoing support and maintenance services, keeping your software up-to-date and resilient to evolving challenges.",
    short_description:
      "Our commitment to excellence extends beyond software deployment, involving continuous improvement, monitoring, and maintenance. We conduct rigorous testing, quality assurance, and performance evaluations, proactively addressing issues and maintaining software resilience.",
    img: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const teamInfo: TeamInfo[] = [
  {
    id: 1,
    name: "Sumit Yadav",
    position: "C.E.O. / Co-founder",
    imgSrc: "/assets/sumit_yadav.jpg",
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
    position: "Project Lead",
    imgSrc: "/assets/hrithik_karn.jpg",
  },
  {
    id: 4,
    name: "Ayusha Duwal",
    position: "Human Resource",
    imgSrc: "/assets/ayusha.jpg",
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
    position: "Lead Mobile developer",
    imgSrc: "/assets/shiwam_karn.jpg",
  },
  {
    id: 7,
    name: "Sunil Shah",
    position: "Frontend Engineer",
    imgSrc: "/assets/sunil_shah.jpg",
  },
  {
    id: 8,
    name: "Ravi Roshan Jha",
    position: "Flutter Developer",
    imgSrc: "/assets/ravi_jha.png",
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
