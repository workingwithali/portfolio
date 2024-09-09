'use client';
import { motion } from "framer-motion"
import Image from "next/image"
const Photo = () => {
    return (
        <div className="w-ful h-ful relative">
            <motion.div initial={{ opacity: 0 }} animate={{
                opacity: 1,
                transition: { delay: 0.1, duration: 0.1, ease: "easeIn" },
            }} >
                <motion.div initial={{ opacity: 0 }} animate={{
                    opacity: 1,
                    transition: { delay: 0.3, duration: 0.1, ease: "easeInOut" },
                }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten">
                    <Image src="/assets/photo.png" alt="" priority quality={100} fill className="object-contain" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Photo