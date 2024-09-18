"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from "react-icons/fa"
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
  title: "My exprience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  items: [
    {
      company: "ffgf",
      postion: "frontend",
      duration: "2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration: "2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration: "2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration: "2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration: "2024"
    },
  ]
}
// educatino
const educatino = {
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
      name: 'Nextjs.js'
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
      <motion.div variants={textAnimation}>
        alkkdfaj
      </motion.div>
    </motion.section>
  )
}

export default Resume
