'use client';
import { motion, AnimatePresence} from 'framer-motion'

export const WrapperFromLeft = ({children}) => (
    <>
    <AnimatePresence>

    <motion.div
    initial={{opacity:0, y:30}}
    animate={{opacity:1, y:0}}
    exit={{opacity:0, y:15}}
    transition={{delay:.25}}

    >
        {children}
    </motion.div>
    </AnimatePresence>

</>
);