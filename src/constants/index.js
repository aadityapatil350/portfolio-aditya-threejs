import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
   
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software engineer Intern",
      company_name: "Climate Connect Digital",
      icon: tesla,
      iconBg: "#383E56",
      date: "June 2021 - September 2021",
      points: [
        "Assisted in the development of web applications using PHP Laravel framework.",
        "Worked on front-end development using HTML, CSS, Bootstrap, and JavaScript.",
        "Collaborated with other developers to troubleshoot and debug issues in the codebase.",
        "Learned and applied best practices in software development, including version control and testing.",
        "Demonstrated a strong work ethic and eagerness to learn, contributing to the success of the team."
      ],
    },
    {
      title: "Jr. Software engineer",
      company_name: "Climate Connect Digital",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "October 2021 - Present",
      points: [
        "Developed and maintained web applications using PHP Laravel framework, with expertise in front-end technologies such as JavaScript, Bootstrap, HTML, and CSS.",
        "Utilized Git for version control and Docker for containerization to improve the efficiency and scalability of software development.",
        "Worked in an Agile development environment, collaborating with a team of developers, product managers, and stakeholders to deliver software solutions sprint-wise.",
        "Maintained a high level of motivation and commitment to learning, seeking opportunities to enhance technical skills and improve productivity.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Quick News",
      description:
        "Quick News is a news app that provides brief and crisp summaries of news articles in just 60 words.",
      tags: [
        {
          name: "reactnative",
          color: "blue-text-gradient",
        },
        {
          name: "Nodejs",
          color: "green-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/aadityapatil350/Quick-News",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };