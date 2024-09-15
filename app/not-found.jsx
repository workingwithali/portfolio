'use client'
import React from "react";
import { motion } from "framer-motion";

const NotFound = () => {
    const glitchVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: {
            opacity: 1,
            scale: [1, 1.05, 1],
            textShadow: [
                "2px 2px 0 lime, -2px -2px 0 darkgreen",
                "-2px -2px 0 lime, 2px 2px 0 darkgreen",
                "2px 2px 0 lime, -2px -2px 0 darkgreen",
            ],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
            },
        },
    };

    return (
        <div className="h-screen bg-black flex flex-col justify-center items-center text-primary">
            <motion.div
                className="text-9xl font-extrabold"
                variants={glitchVariants}
                initial="initial"
                animate="animate"
            >
                404
            </motion.div>
            <motion.p
                className="text-lg mt-2"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Page Not Found
            </motion.p>
            <motion.p
                className="text-sm mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Looks like you're lost in the matrix...
            </motion.p>
        </div>
    );
};

export default NotFound;
