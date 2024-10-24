'use client';
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Creating powerful and scalable web applications using NestJS, ensuring exceptional performance and maintainability.',
    href: '/web-development'
  },
  {
    num: '02',
    title: 'App Development',
    description: 'Delivering high-quality mobile applications with React Native, offering a seamless user experience across both iOS and Android platforms.',
    href: '/app-development'
  },
  {
    num: '03',
    title: 'UI/UX Design',
    description: 'Designing stunning and user-centered interfaces in Figma, focusing on aesthetics and functionality to elevate user engagement.',
    href: '/ui-ux-design'
  },
  {
    num: '04',
    title: 'SEO Optimization',
    description: 'Boosting your online presence with strategic SEO optimization, driving organic traffic and maximizing visibility in search results.',
    href: '/seo-optimization'
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const Services = () => {
  return (
    <motion.section className="min-s-[80vh] flex flex-col justify-center py-12 xl:py-0" initial="hidden" animate="visible"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={textAnimation}
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
                className="flex-1 flex flex-col justify-center gap-6 group p-4 md:p-6 lg:p-8" >
                <div className="w-full flex justify-between items-center">
                  <div className="text-3xl md:text-5xl font-extrabold text-outline
                  text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] rounded-full bg-primary group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-black text-2xl md:text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="text-2xl md:text-[42px] font-bold leading-none text-accent
                group-hover:text-accent-hover transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-gray-800">{service.description}</p>
                {/* border */}
                <hr className="border-primary w-full" />
              </div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Services