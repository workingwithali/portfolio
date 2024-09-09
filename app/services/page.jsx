'use client';
import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link";
import { motion } from "framer-motion";
const services = [
  {
    num: '01',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum in voluptate illo praesentium mollitia. Ipsa iste iure autem.',
    href: ''
  },
  {
    num: '02',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum in voluptate illo praesentium mollitia. Ipsa iste iure autem.',
    href: ''
  },
  {
    num: '03',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum in voluptate illo praesentium mollitia. Ipsa iste iure autem.',
    href: ''
  },
  {
    num: '04',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsum in voluptate illo praesentium mollitia. Ipsa iste iure autem.',
    href: ''
  },
]

const Services = () => {
  return (
    <section className="min-s-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          intital={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
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
                <h2 className="text-2xl md:text-[42px] font-bold leading-none text-primary
                group-hover:text-accent-hover transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-primary">{service.description}</p>
                {/* border */}
                <hr className="border-gray-800 w-full" />
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Services