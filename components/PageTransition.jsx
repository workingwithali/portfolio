'use client';
import { AnimatePresence, motion } from "framer-motion"
import { usePathname } from "next/navigation";

const PageTransition = ({children}) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      <div key = {pathname}>
        <motion.div
        initial = {{opacit:1}}
        animate = {{opacit:0, transition:{delay:1}}}
        />
        
        {children}
        </div>
      
    </AnimatePresence>
  )
}

export default PageTransition
