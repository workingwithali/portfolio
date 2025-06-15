"use client"
import Image from 'next/image';
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaFigma,
  FaDatabase, FaJava, FaCuttlefish
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiTypescript, SiCsharp, SiCplusplus,
  SiBootstrap, SiExpress, SiRedux, SiChatbot, SiReactrouter, SiTensorflow, SiScikitlearn
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { MdOutlineSmartToy } from "react-icons/md";
// about
const about = {
  title: "About Me",
  description: "I'm Ali Rashid, a passionate Software Engineer from the University of Agriculture, Faisalabad. I specialize in Frontend Development using React.js and Next.js, and I'm deeply interested in Generative AI and Machine Learning. With hands-on experience in building AI-powered apps and participating in national hackathons, I love crafting elegant digital experiences and constantly pushing the boundaries of innovation.",

  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ali Rashid'
    },
    {
      fieldName: 'Whatsapp',
      fieldValue: '03326275882'
    },
    {
      fieldName: 'Experience',
      fieldValue: '2+ Year'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Pakistani'
    },
    {
      fieldName: 'LinkedIn',
      fieldValue: 'workingwithali'
    },
    {
      fieldName: 'Email',
      fieldValue: 'alirashid@email.com'
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available'
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Urdu'
    },
  ]
}
// experience
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I'm a Software Engineer skilled in React.js, Next.js, and Python. I've solved over 250 LeetCode problems, contributed to open-source, and participated in international AI hackathons.",
  items: [
    {
      position: "Frontend Developer",
      company: "Freelance / Open Source",
      duration: "2023 - Present",
    },
    {
      position: "AI Developer",
      company: "Lablab Hackathons",
      duration: "2023 - Present",
    },
    {
      position: "Open Source Contributor",
      company: "GitHub",
      duration: "Ongoing",
    },
    {
      position: "LeetCode Problem Solver",
      company: "Self-Learning",
      duration: "2022 - Present",
    },
  ],
};

// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "A journey of continuous learning in software engineering, full-stack development, and AI technologies.",
  items: [
    {
      institution: "University of Agriculture, Faisalabad (UAF)",
      degree: "BS Software Engineering",
      duration: "2023 - 2027"
    },
    {
      institution: "Apna College",
      degree: "Frontend Development Course",
      duration: "2024"
    },
    {
      institution: "Apna College",
      degree: "Data Structures & Algorithms (DSA)",
      duration: "2024"
    },
    {
      institution: "CodeWithHarry",
      degree: "MERN Stack Development",
      duration: "2024"
    },
    {
      institution: "CodeWithHarry",
      degree: "Next.js Full Stack Development",
      duration: "2024"
    },
    {
      institution: "Self-Learning",
      degree: "AI/ML Journey & Roadmap (via GitHub)",
      duration: "2024 - Present"
    }
  ]
}

// skill
const skill = {
  title: "My Skills",
  description: "I’m a full-stack developer with experience in AI, ML, and chatbot development. From building responsive interfaces to backend APIs and intelligent assistants, here’s what I bring to the table:",
  skillList: [
    // Programming Languages
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiCsharp />, name: "C#" },
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJs />, name: "JavaScript (ES6+)" },
    { icon: <SiTypescript />, name: "TypeScript" },

    // Web Development
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <SiBootstrap />, name: "Bootstrap 5" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiReactrouter />, name: "React Router" },
    { icon: <SiRedux />, name: "State Management" },
    { icon: <SiNextdotjs />, name: "Next.js" },

    // Mobile Development
    { icon: <FaReact />, name: "React Native" },

    // Backend Development
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express.js" },
    { icon: <FaPython />, name: "Python (Backend)" },

    // Version Control
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },

    // APIs & Databases
    { icon: <TbApi />, name: "REST APIs" },
    { icon: <SiMongodb />, name: "MongoDB" },

    // AI/ML & Chatbots
    { icon: <MdOutlineSmartToy />, name: "AI-Powered Chatbots" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { icon: <SiChatbot />, name: "Chatbot Design" },

    // UI/UX
    { icon: <FaFigma />, name: "Figma" },
  ]
};
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Resume = () => {
  return (
    <motion.section initial="hidden" animate="visible">
      <motion.div variants={textAnimation} className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience" className="flex items-center gap-2">
                <Image
                  src={experience.icon}
                  alt="Experience icon"
                  width={20}
                  height={20}
                  className="filter invert-0 brightness-0"
                />
                Experience
              </TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skill">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
            {/* content */}
            <div className="max-h-[70vh] w-full ">
              {/* experience */}
              <TabsContent value="experience" className='w-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                  <h3 className="text-4xl font-bold capitalize " >{experience.title}</h3>
                  <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0" >{experience.description}</p>
                  <ScrollArea className="h-[400px] overflow-y-auto">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                      {experience.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#111] h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 rounded-md flex flex-col justify-center items-center xl:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-2xl font-semibold capitalize max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-accent">{item.company}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>


                </div>
              </TabsContent>
              {/* education */}
              <TabsContent value="education" className='w-full'>
                <div className="flex flex-col gap-[30px] text-center xl:text-left" >
                  <h3 className="text-4xl font-bold capitalize" >{education.title}</h3>
                  <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0" >{education.description}</p>
                  <ScrollArea className="h-[400px] overflow-y-auto">
                    <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => {
                        return (
                          <li
                            key={index}
                            className="bg-[#111] h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 rounded-md flex flex-col justify-center items-center xl:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-2xl font-semibold capitalize max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-accent">{item.institution}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </ScrollArea>


                </div>
              </TabsContent>
              {/* skill */}
              <TabsContent value="skill" className="w-full h-full">
                <div className="flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-[30px] text-center xl:text-left">
                    <h3 className="text-4xl capitalize font-bold">{skill.title}</h3>
                    <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0">
                      {skill.description}
                    </p>
                  </div>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]" >
                    {skill.skillList.map((skill, index) => {
                      return <li key={index}>
                        <TooltipProvider delayDuration={100} >
                          <Tooltip>
                            <TooltipTrigger className="group w-full h-[150px] flex justify-center items-center bg-[#111]  rounded-xl group" >
                              <div className="text-6xl text-primary group-hover:text-accent transition-all duration-300" >{skill.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize " >{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>;
                    })}
                  </ul>
                </div>
              </TabsContent>
              {/* about */}
              <TabsContent value="about" className='w-full text-center xl:text-left'>
                <div className="flex flex-col gap-[30px] ">
                  <h3 className=" text-4xl font-bold capitalize " >{about.title}</h3>
                  <p className="max-w-[600px] text-gray-800 mx-auto xl:mx-0">{about.description}</p>
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 ">
                    {about.info.map((item, index) => {
                      return <li key={index} className="flex items-center justify-center xl:justify-start gap-4" >
                        <span className="text-accent" >{item.fieldName}</span>
                        <span className="text-xl" >{item.fieldValue}</span>
                      </li>
                    })}
                  </ul>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

      </motion.div>
    </motion.section>

  )
}

export default Resume