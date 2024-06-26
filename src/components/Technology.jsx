import { RiReactjsLine } from "react-icons/ri";
import { SiSpringboot } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { animate, motion } from "framer-motion";

const iconVariants = (duration) =>(
    {
        inital: {y: -10},
        animate: {
            y: [10, -10],
            transition:{
                duration: duration,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
            },
        },
    }
)


const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>
        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1.5}} className="flex flex-wrap justify-center gap-4">
            <motion.div variants={iconVariants(2.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400 " />
            </motion.div>
            <motion.div variants={iconVariants(6.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiSpringboot className="text-7xl text-green-500 " />
            </motion.div>
            <motion.div variants={iconVariants(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl " />
            </motion.div>
            <motion.div variants={iconVariants(7.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl " />
            </motion.div>
            <motion.div variants={iconVariants(4.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Line className="text-7xl text-orange-600 " />
            </motion.div>
            <motion.div variants={iconVariants(3.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Line className="text-7xl text-blue-500 " />
            </motion.div>
            <motion.div variants={iconVariants(2.0)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-400 " />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technology