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
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "03326275882",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "Youremail@gamil.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Adress",
    description: "Pakistan",
  },
];
const textAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const Contact = () => {
  return (
    <motion.section className="py-6" initial="hidden" animate="visible">

      <motion.div
        variants={textAnimation}
        className="container mx-auto "
      >
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* form */}
          <div>
            <form>form</form>
          </div>
          {/* info */}
          <div>info</div>
        </div>
      </motion.div>
      
    </motion.section>
  )
}

export default Contact
