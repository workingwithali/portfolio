'use client';
import { motion } from "framer-motion"
import Image from "next/image"
const Photo = () => {
  return (
    <div className="w-ful h-ful relative">
        <motion.div>
            <motion.div className="w-[298px] h-[298px] xl:w-[]">
                <Image src="/assets/photo.png" alt="" priority quality={100} fill className="object-contain" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Photo