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
      <div className="container mx-auto">
        <motion.div
          intital={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
          className="grid grid-col-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index}
                className=" flex-1 flex flex-col justify-center gap-6 group" >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold">{service.num}</div>
                  <Link href={service.href}>
                    <BsArrowDownRight />
                  </Link>
                </div>
                {/* title */}
                <h2>{service.title}</h2>
                {/* description */}
                <p>{service.description}</p>
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
