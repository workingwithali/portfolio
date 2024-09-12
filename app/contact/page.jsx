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

const Contact = () => {
  return (
    <div>
      contact
    </div>
  )
}

export default Contact
