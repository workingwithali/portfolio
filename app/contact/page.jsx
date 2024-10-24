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
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt  />,
    title: "Phone",
    description: "03326275882",
  },
  {
    icon: <FaEnvelope  />,
    title: "Email",
    description: "Youremail@gamil.com",
  },
  {
    icon: <FaMapMarkerAlt  />,
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
      <motion.div variants={textAnimation} className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="flex-1 xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 sm:p-10 bg-[#111] rounded-md">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-primary">
                Join Forces with Us
              </h3>
              <p className="text-accent text-sm sm:text-base md:text-lg">
                Together, we can create and secure the future.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input type="text" placeholder="First Name" />
                <Input type="text" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="cst">Web Development</SelectItem>
                    <SelectItem value="cqt">App Development</SelectItem>
                    <SelectItem value="cwt">UI/UX Design</SelectItem>
                    <SelectItem value="cet">SEO Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea className="h-[120px] sm:h-[150px] md:h-[180px]" placeholder="Type your message here." />
              <Button size="sm" className="max-w-40 outline outline-1 outline-primary  items-center">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-center order-1 xl:order-none mb-8 xl:mb-0">
            <div className="text-accent space-y-4 sm:space-y-6">
              {info.map((item, index) => (
                <div key={index} className="flex items-center space-x-4 sm:space-x-6">
                  <div className="w-[40px] h-[40px] sm:w-[52px] sm:h-[52px] xl:w-[72px] xl:h-[72px] text-accent bg-[#111] rounded-md flex items-center justify-center">
                    <div className="text-lg sm:text-xl">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-primary text-sm sm:text-base">{item.title}</h4>
                    <p className="text-gray-800 text-base sm:text-lg">{item.description}</p>
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
