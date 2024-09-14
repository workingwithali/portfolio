'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt className="text-primary" />,
    title: "Phone",
    description: "03326275882",
  },
  {
    icon: <FaEnvelope className="text-primary" />,
    title: "Email",
    description: "Youremail@gamil.com",
  },
  {
    icon: <FaMapMarkerAlt className="text-primary" />,
    title: "Address",
    description: "Pakistan",
  },
];

const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.section className="py-6 bg-black" initial="hidden" animate="visible">
      <motion.div variants={textAnimation} className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className=" xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-gray-800 rounded-xl">
              <h3 className="text-4xl font-semibold text-accent">Let's Work Together</h3>
              <p className="text-primary">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta necessitatibus architecto voluptatem?
              </p>
              {/* input */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a serivce" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a serivce</SelectLabel>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="cqt">App Development</SelectItem>
                    <SelectItem value="cwt">UI/UX Design</SelectItem>
                    <SelectItem value="cet">SEO Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <div className="text-primary space-y-6">
              {info.map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="text-xl">{item.icon}</div>
                  <div>
                    <h4 className="text-accent">{item.title}</h4>
                    <p className="text-gray-800">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
