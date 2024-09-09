'use client'
import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
    { num: 12, text: "Years of Experience" },
    { num: 26, text: "Projects Completed" },
    { num: 8, text: "Technologies Mastered" },
    { num: 500, text: "Code Commits" },
];

const statAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.2, duration: 0.6 },
    }),
};

const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((item, index) => (
                        <motion.div
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            variants={statAnimation}
                            key={index}
                            className="flex-1 flex flex-col items-center xl:flex-row xl:items-center gap-4 justify-center xl:justify-start"
                        >
                            <CountUp
                                end={item.num}
                                duration={5}
                                delay={2}
                                className="text-4xl xl:text-6xl font-extrabold text-neon"
                            />
                            <p
                                className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                                    } leading-snug text-accent text-center xl:text-left`}
                            >
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
