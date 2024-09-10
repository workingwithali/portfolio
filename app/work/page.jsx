import { motion } from 'framer-motion'
import React, {useState}  from 'react'
import {Swiper, swiperSlide} from 'swiper/react'
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import { DEFAULT_SERIF_FONT } from 'next/dist/shared/lib/constants';
const project = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    descrption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack:[
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image:"/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: '02',
    category: 'frontend',
    title: 'project 1',
    descrption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack:[
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image:"/assets/work/thumb1.png",
    live: "",
    github: "",
  },
  {
    num: '03',
    category: 'frontend',
    title: 'project 1',
    descrption:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack:[
      { name: 'Html' }, { name: 'Css 3' }, { name: 'javascript' }
    ],
    image:"/assets/work/thumb1.png",
    live: "",
    github: "",
  },

]
const Work = () => {
  const [project, setProject] = useState(project[0])
  return (
    <div>
      work page
    </div>
  )
}

export default Work
