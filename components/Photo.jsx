'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <motion.div className="w-full h-full relative">
            {/* Photo container */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
            >
                {/* glitch photo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 1.5, duration: 0.5 } }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
                    >
                        <Image
                            src="/assets/photo.png"
                            alt=""
                            priority
                            quality={100}
                            fill
                            className="object-contain glitch"
                        />
                    </motion.div>
                </motion.div>
                {/* circle animation */}
                <motion.svg
                    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="green"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 8 8" }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360],
                            transition: {
                                duration: 26,
                                repeat: Infinity,
                                repeatType: "reverse",
                            },
                        }}
                    />
                </motion.svg>
            </motion.div>
        </motion.div>
    );
};

export default Photo;