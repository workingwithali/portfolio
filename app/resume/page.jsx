"use client"

import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs } from "react-icons/fa"
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"

// about
const about = {
  title: "about me",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ali Rashid'
    },
    {
      fieldName: 'Phone',
      fieldValue: '03326275882'
    },
    {
      fieldName: 'Experience',
      fieldValue: '12+ Year'
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Pakistani'
    },
    {
      fieldName: 'Skype',
      fieldValue: 'Ali Rashid'
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
  title: "My experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  items: [
    {
      company: "tech solution",
      position: "frontend",
      duration: "2023"
    },
    {
      company: "tech solution",
      position: "frontend",
      duration: "2023"
    },
    {
      company: "tech solution",
      position: "frontend",
      duration: "2023"
    },
    {
      company: "Ziza science Academy",
      position: "ux/ui",
      duration: "2024"
    },
    {
      company: "Uaf",
      position: "Full stack",
      duration: "2024-present"
    },
    {
      company: "webx",
      position: "frontend",
      duration: "2024"
    },
  ]
}
// education
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  items: [
    {
      institution: "apnacollage",
      degree: "frontend course",
      duration: "2024"
    },
    {
      institution: "apnacollage",
      degree: "DSA",
      duration: "2024"
    },
    {
      institution: "UAF",
      degree: "Software Engineering",
      duration: "2023-2027"
    },
    {
      institution: "apnacollage",
      degree: "frontend course",
      duration: "2024"
    },
  ]
}
// skill
const skill = {
  title: "My skill",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'Html 5'
    },
    {
      icon: <FaCss3 />,
      name: 'Css 3'
    },
    {
      icon: <FaJs />,
      name: 'Js'
    },
    {
      icon: <FaReact />,
      name: 'React.js'
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js'
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwindcss'
    },
    {
      icon: <FaNodeJs />,
      name: 'Node.js'
    },
    {
      icon: <FaFigma />,
      name: 'Figma'
    },

  ]
}
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
              <TabsTrigger value="experience">Experience</TabsTrigger>
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
                            className="bg-gray-800 h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-2xl font-semibold capitalize max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/50">{item.company}</p>
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
                            className="bg-gray-800 h-auto py-6 px-4 sm:px-6 md:px-8 lg:px-10 rounded-xl flex flex-col justify-center items-center xl:items-start gap-1"
                          >
                            <span className="text-accent">{item.duration}</span>
                            <h3 className="text-2xl font-semibold capitalize max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                            <div className="flex items-center gap-3">
                              {/* dot */}
                              <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                              <p className="text-white/50">{item.institution}</p>
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
                            <TooltipTrigger className="w-full h-[150px] flex justify-center items-center bg-gray-800  rounded-xl group" >
                              <div className="text-6xl text-primary hover:text-accent transition-all duration-300" >{skill.icon}</div>
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
                    {about.info.map((item ,index)=>{
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