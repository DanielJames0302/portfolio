export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Gestura",
    des: "Short-video platform that allows deaf-mute content creators to upload their creative videos using sign language and translate content videos into sign language.",
    img: "/images/gestura.jpg",
    iconLists: ["/nextjs.svg", "/tail.svg", "/fastapi.svg", "/mediapipe.png", "/opencv.svg"],
    technologies: ["Next.js", "Tailwind", "FastAPI", "MediaPipe", "OpenCV"],
    link: "https://github.com/DanielJames0302/Gestura",
  },
  {
    id: 2,
    title: "Foodie",
    des: "A social web application that enables foodies to search for recipes, share their cooking skills, and so o",
    img: "/images/foodie.png",
    iconLists: ["/react.svg", "/go.svg", "/postgresql.svg", "/pusher.svg"],
    technologies: ["React", "Go", "PostgresSQL", "Pusher"],
    link:  "https://github.com/DanielJames0302/Foodie",
  },
  {
    id: 3,
    title: "FootballAnalysis",
    des: "An AI system to analyze football videos to extract key football strategies and players' information",
    img: "/images/football.png",
    iconLists: ["/python.svg", "/tensorflow.svg", "/opencv.svg"],
    technologies: ["Python", "TensorFlow", "OpenCV"],
    link: "https://github.com/DanielJames0302/FootballAnalysis",
  },
  {
    id: 4,
    title: "Peerprep",
    des: "A collaborative coding practice platform",
    img: "/images/peerprep.png",
    iconLists: ["/nextjs.svg", "/kafka.svg", "/typescript.svg", "/socket.io.svg", "/mongodb.svg", "/redis.svg"],
    technologies: ["Next.js", "Kafka", "Typescript", "Socket.io", "MongoDB", "Redis"],
    link: "https://github.com/CS3219-AY2526Sem1/cs3219-ay2526s1-project-g13",
  },
];


export const technologies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const awards = [
  {
    id: 1,
    title: "Earth Rover Challenge (ERC) at IEEE International Conference on Robotics & Automation 2025",
    desc: "First Prize",
    className: "md:col-span-2",
    thumbnail: "/erc_2025.jpg",
    link: "https://arxiv.org/abs/2506.17960"
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
