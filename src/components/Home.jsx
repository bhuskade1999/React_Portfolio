import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

 

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi👋, I Am <br /> Bhushan Bhuskade
          </motion.h1>

          <Typewriter
            options={{
              strings: ["Backend Developer", " Full Stack Developer", "Mern Stack Developer", ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="https://drive.google.com/drive/folders/1UE7xhh4AbfEG9e8ruoRVk_wNg4UJQIWy?usp=sharing">My Resume</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

           

          <aside>
             
            {/* <article data-special>
              <p>Contact</p>
              <span>bbhuskade123@gmail.com</span>
            </article> */}
            
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt = "Bhushan" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
