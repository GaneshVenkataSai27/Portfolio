import React from 'react'
import { CERTIFICATES, PROJECTS } from '../constants';
import { motion } from "framer-motion";


const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 flex flex-wrap justify-center lg:justify-between">
  <div className="w-full max-w-xl lg:w-1/2 lg:pr-4">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl"
    >
      Projects
    </motion.h2>
    <div>
      {PROJECTS.map((project, index) => (
        <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 1 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl"
          >
            <h6 className="mb-2 font-semibold text-center lg:text-left text-xl">
              {project.title}
            </h6>
            <p className="mb-4 text-neutral-400 text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
  <div className="w-full max-w-xl lg:w-1/2 lg:pl-4">
    <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
      className="my-20 text-center text-4xl"
    >
      Certificates
    </motion.h2>
    <div>
      {CERTIFICATES.map((certificate, index) => (
        <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="w-full max-w-xl"
          >
            <h6 className="mb-2 font-semibold text-center lg:text-left text-xl">
              {certificate.title}
            </h6>
            <p className="mb-4 text-neutral-400 text-lg">
              {certificate.description}
            </p>
            <div className="flex flex-wrap">
              {certificate.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-lg font-medium text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  </div>
</div>


  )
}

export default Certificates