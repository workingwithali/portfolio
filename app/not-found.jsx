'use client'
import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import "./not-found.css"; // External CSS for CRT effect

const NotFound = () => {
    return (
        <div className="h-screen bg-black flex flex-col justify-center items-center text-green-400 crt">
            <motion.h1
                className="text-6xl font-bold mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0.8], transition: { duration: 1.5, repeat: Infinity } }}
            >
                ERROR 404
            </motion.h1>
            <div className="text-left">
                <motion.p
                    className="text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1.5 }}
                >
                    &gt; THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED, HAD ITS NAME <br />
                    &gt; CHANGED OR IS TEMPORARILY UNAVAILABLE.
                </motion.p>
                <motion.p
                    className="text-xl mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5 }}
                >
                    &gt; PLEASE TRY TO <Link href="#" className="text-white">[GO BACK]</Link> OR <Link href="#" className="text-white">[RETURN TO THE HOMEPAGE]</Link>.<br />
                    &gt; GOOD LUCK.
                </motion.p>
            </div>
        </div>
    );
};

export default NotFound;