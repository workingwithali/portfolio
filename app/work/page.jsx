'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack: [{ name: 'HTML' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: "/assets/work/thumb1.png",
    live: "#",  // Update with actual URL or keep empty
    github: "#",  // Update with actual URL or keep empty
  },
  {
    num: '02',
    category: 'frontend',
    title: 'Project 2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack: [{ name: 'HTML' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: "/assets/work/thumb2.png",
    live: "#",  // Update with actual URL or keep empty
    github: "#",  // Update with actual URL or keep empty
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Project 3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eum a culpa quaerat illum soluta, iure reprehenderit odit eligendi non quod? Quibusdam, error esse.',
    stack: [{ name: 'HTML' }, { name: 'CSS 3' }, { name: 'JavaScript' }],
    image: "/assets/work/thumb3.png",
    live: "#",  // Update with actual URL or keep empty
    github: "#",  // Update with actual URL or keep empty
  },
];
const buttonVariants = {
  initial: { opacity: 0.8, scale: 1 },
  hover: { opacity: 1, scale: 1.1, transition: { duration: 0.3 } },
  glow: {
    animate: {
      boxShadow: [
        '0 0 5px rgba(0, 255, 0, 0.5)',
        '0 0 10px rgba(0, 255, 0, 0.5)',
        '0 0 15px rgba(0, 255, 0, 0.5)',
        '0 0 20px rgba(0, 255, 0, 0.5)',
      ],
      transition: { repeat: Infinity, repeatType: 'loop', duration: 1 },
    }
  }
};
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSliderChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section initial="hidden" animate="visible"> 
    <motion.div
      variants={textAnimation}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='group w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline group-hover:text-outline-hover transition-all duration-50'>{project.num}</div>
              {/* category */}
              <h2 className='text-[42px] font-bold leading-none text-accent group-hover:text-accent-hover transition-all duration-500 capitalize'>{project.category} Project</h2>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-xl text-green-800'>
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* description */}
              <p className='text-gray-800'>{project.description}</p>
              {/* border */}
              <div className='border border-primary/20'></div>
              {/* button */}
              <div className='flex items-center gap-4'>
                {/* Live project */}
                <Link href={project.live} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          animate="glow"
                          className='flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#111]/80 border border-[#00FF00]'>
                          <BsArrowUpRight className='text-[#00FF00] text-3xl' />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className='bg-[#111] text-[#00FF00]'>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* Github */}
                <Link href={project.github} passHref>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger>
                        <motion.div
                          variants={buttonVariants}
                          initial="initial"
                          whileHover="hover"
                          animate="glow"
                          className='flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#111]/80 border border-[#00FF00]'>
                          <BsGithub className='text-[#00FF00] text-3xl' />
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent className='bg-[#111] text-[#00FF00]'>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper spaceBetween={30} slidesPerView={1} onSlideChange={handleSliderChange} className='xl:h-[520px] mb-15'>
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div className='h-[460px] relative group flex justify-center items-center bg-accent'>
                    {/* overlay */}
                    <div className='absolute top-0 bottom-0 w-full h-full bg-accent/20 z-10'></div>
                    {/* image */}
                    <div className='relative w-full h-full'>
                      <Image src={project.image} layout='fill' className='object-cover' alt={`Project ${project.num} Image`} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex justify-between gap-2 absolute right-[0] bottom-[50%] xl:bottom-0 z-20 w-full xl:w-max xl:justify-none"
                btnStyles="bg-black hover:bg-primary text-accent text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all border border-primary shadow-neon-glow hover:shadow-[0_0_15px_5px_#00FF00] rounded-full"
                iconsStyles="text-primary"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
    </motion.section>
  );
}

export default Work;