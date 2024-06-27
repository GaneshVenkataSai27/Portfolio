import aboutImg from '../assets/ITC_Main.jpg'
import { ABOUT_TEXT } from '../constants';
import {motion} from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">About <span className="text-neutral-500">Me</span></h2>
        <div className="flex flex-wrap">
            <motion.div whileInView={{opacity:1, x: 0}} initial={{opacity:0, x: -100}} transition={{duration: 1}} className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="imageWidth rounded-3xl" src={aboutImg} alt="about" />
            </div>
            </motion.div>
            <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity:0 , x: 100}} transition={{duration: 1}} className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start pt-2">
              <p className="my-2 max-w-xl py-6 text-lg">
                <ul className="list-disc">
                  {ABOUT_TEXT.trim().split('\n').map((point, index) => (
                    <li key={index}>{point.trim().replace(/^\s*-\s*/, '')}</li>
            ))}
        </ul>
    </p>
</div>


            </motion.div>
        </div>
    </div>
  )
}

export default About