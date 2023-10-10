type Service = {
  name: string;
  img_lg: string;
  img_sm: string;
};

type Category = {
  title: string;
  services?: Service[];
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
];
