import React from "react";

import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/119596549?v=4"}
          alt="Founder"
        />

        <h2> Bhushan Bhuskade</h2>
        <p>  I am a Full-Stack Developer and I'm passionate about learning<br/>   
           things and developing myself in  order to be a Champion one day!  </p> <br></br>
        <strong>  Drop a mail   @bbhuskade123@gmail.com </strong>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/bhushan-bhuskade/" target={"blank"}>
            < AiFillLinkedin />
          </a>
        
        <br></br>
          <a href="https://github.com/bhuskade1999" target={"blank"}>
            <AiFillGithub />
          </a>

          <br></br>
          <a href="#" target={"blank"}>
            <AiFillInstagram />
          </a>


        </article>

      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
