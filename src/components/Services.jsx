import React from "react";
import { motion } from "framer-motion";
import {AiFillDatabase,  AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { DiGit} from "react-icons/di";



const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Statastic && Role</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>7+</h3>
          <p>Projects</p>
        </motion.div>
        

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <AiFillDatabase />
          <span>250+ DSA Problems</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          < DiGit />
          <span>50+ Git Commands</span>
        </motion.div>


        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <MdComputer />
          <span>Full Stack Development</span>
        </motion.div>


      </section>
    </div>
  );
};

export default Services;
