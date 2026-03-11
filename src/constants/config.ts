type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    phone: string;
    socials: {
      github: string;
      linkedin: string;
    };
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Bhargavi Singh",
    fullName: "Bhargavi Singh",
    email: "bhargavisingh700@gmail.com",
    phone: "+91-6307150346", // Update with your phone number
    socials: {
      github: "https://github.com/bhargavi-singh",
      linkedin: "https://www.linkedin.com/in/bhargavii-singh/",
    },
  },
  hero: {
    name: "Bhargavi Singh",
    p: ["I develop scalable frontend solutions, integrate", "complex APIs and build modern web applications"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
  },
  sections: {
    about: {
      p: "Introduction",
      h2: "Overview.",
      content: `I'm a skilled Software Engineer with 3 years of experience in TypeScript and
      JavaScript, and expertise in frameworks like React, Next.js, and
      Three.js. I have a proven track record of architecting scalable UI components, 
      integrating complex APIs, and optimizing performance for enhanced user experiences. 
      Let's work together to bring your ideas to life!`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
