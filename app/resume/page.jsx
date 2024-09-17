"use client"
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, } from "react-icons/fa"
import { SiTailwindcss, SiNodedotjs } from "react-icons/si"

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
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My exprience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum commodi veritatis explicabo.",
  items:[
    {
      company: "ffgf",
      postion: "frontend",
      duration:"2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration:"2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration:"2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration:"2024"
    },
    {
      company: "ffgf",
      postion: "frontend",
      duration:"2024"
    },
  ]
}

const Resume = () => {
  return (
    <div>
      resume page
    </div>
  )
}

export default Resume
