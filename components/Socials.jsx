'use client'
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/workingwithali" },
  { icon: <SiLeetcode />, path: "https://leetcode.com/u/workingwithali/" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/workingwithali/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@workingwithali" },
];

const Socials = ({ containerStyle, iconStyle }) => {
  return (
    <div className={containerStyle}>
      {socials.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href={item.path} className={iconStyle} target="_blank">
            {item.icon}
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
