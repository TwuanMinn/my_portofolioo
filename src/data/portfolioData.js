// Portfolio data configuration
export const getPortfolioData = (bioText) => ({
    name: "NGUYỄN HUỲNH MINH TUẤN",
    title: "Software Engineer",
    bio: bioText,
    email: "twuanminn47@gmail.com",
    github: "https://github.com/twuanmin",
    linkedin: "https://www.linkedin.com/in/twuan-min-a98356344/",
    figma: "https://www.figma.com",
    whatsapp: "https://wa.me/84934159597",
    discord: "https://discord.com/app",

    skills: [
        "JavaScript", "TypeScript", "Java", "Python",
        "ReactJS", "NextJS",
        "NodeJS (Express, NestJS)", "PostgreSQL",
        "Git", "Firebase", "Machine Learning",
        "Vercel", "Angular", "Docker", "Vue.js",
        "ExpressJS", "AWS", "Spring Boot", "Supabase"
    ],

    skillsProgress: [
        { name: "React Native", level: 87 },
        { name: "GitHub", level: 88 },
        { name: "Firebase", level: 92 },
        { name: "Tailwind CSS", level: 93 },
        { name: "Supabase", level: 78 }
    ],

    projects: [
        {
            id: 'proj-habit',
            title: "Habit Tracking Mobile Application",
            description: "Native Android app with Firebase backend. Features habit creation, monitoring, reminders, and progress visualization with intuitive UI design and real-time data sync.",
            link: "#"
        },
        {
            id: 'proj-lstm',
            title: "LSTM Machine Translation (EN → FR)",
            description: "LSTM Encoder-Decoder with Attention mechanism for English-French translation using PyTorch. Handled ML workflow including preprocessing, model training, and performance evaluation.",
            link: "#"
        },
        {
            id: 'proj-portfolio',
            title: "Resume Portfolio Website",
            description: "Responsive portfolio built with React and Tailwind CSS. Features AI-powered chatbot for visitor engagement, smooth animations, dark/light mode, and backend API integration.",
            link: "#"
        }
    ],

    certificates: [
        {
            title: "Full-Stack Web Development",
            issuer: "Coursera",
            date: "2024",
            description: "Completed a full-stack program covering React, Node.js, and REST APIs.",
            link: "#"
        },
        {
            title: "UI/UX Design Essentials",
            issuer: "Google",
            date: "2023",
            description: "Design fundamentals, user research, and wireframing best practices.",
            link: "#"
        },
        {
            title: "Cloud Fundamentals",
            issuer: "Microsoft",
            date: "2023",
            description: "Core cloud concepts, services, and security principles.",
            link: "#"
        }
    ],

    experience: [
        {
            role: "UI/UX Designer",
            period: "May 2024 - Present",
            description: "Crafting intuitive digital experiences with a focus on user-centric design. Specializing in high-fidelity prototyping, design systems, and bridging the gap between aesthetics and functionality using Figma and modern design principles."
        },
        {
            role: "English IELTS Teacher",
            period: "March 2023 - March 2024",
            description: "Delivered IELTS preparation lessons across all four skills. Developed exam-focused materials and provided personalized instruction to help students achieve higher band scores."
        },
        {
            role: "IT Support Volunteer",
            period: "February 2022 - May 2022",
            description: "Provided technical support for software and hardware issues. Assisted in setting up computer systems, network configurations, and created troubleshooting documentation."
        }
    ]
});

export const texts = [
    "A passionate software engineer with a strong foundation in full-stack development and machine learning. With hands-on experience in programming, problem-solving, and teamwork through practical projects, I bring a proactive willingness to learn new technologies and contribute effectively in professional IT environments.",
    "I am committed to continually setting higher standards for myself to expand my knowledge and expertise in this domain. I am willing to learn new technology stacks or take on different roles as needed. I look forward to the opportunity to join your team and contribute with full dedication."
];

export const popupMessages = [
    "Hi there!",
    "I'm Nguyen Huynh Minh Tuan",
    "I'm a software engineer & develop based in HCM City"
];
