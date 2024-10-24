'use client'
import { motion } from "framer-motion"
import Image from "next/image"

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            {/* Photo container */}
            <div>
                {/* glitch photo */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1, transition: { delay: 0.75, duration: 0.25 } }}
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute shadow-lg rounded-lg overflow-hidden "
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 1, duration: 0.5 } }}
                    >
                        <Image
                            src="/assets/photo.png"
                            alt=""
                            priority
                            quality={100}
                            fill
                            className="object-contain filter contrast-150 brightness-75 grayscale glitch z-10 rounded-full "
                        />
                    </motion.div>
                    
                    <div className="absolute inset-0 flex items-center justify-center text-green-400 font-mono text-lg animate-pulse z-20">
                        <span>ACCESS GRANTED</span>
                    </div>
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
                        initial={{ strokeDasharray: "24 12 8 8" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "4 250 22 22",
                                "16 72 92 72",
                                "4 150 30 20",
                                "4 250 22 22"
                            ],
                            rotate: [0, 45, 120, 240, 360],
                            transition: {
                                duration: 12,  // Faster animation
                                repeat: Infinity,
                                repeatType: "mirror",  // Adds a glitchy effect by reversing
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1], // Control timing for glitchy effect
                            },
                        }}
                    />
                </motion.svg>
            </div>
        </div>


    );
};

export default Photo;