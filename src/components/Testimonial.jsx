import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Chandrashekhar morya "}
          feedback={"I had the pleasure of working with Bhushan on a URL shortener project and I am proud to recommend him for any future endeavors. "}
        />

        <TestimonialCard
          name={"Samiksha Gurwe"}
          feedback={
            "I personally knows about bhushan he has all the skill and tech stack which makes him a good programmer."
          }
        />

        <TestimonialCard
          name={"Tirthankar Roy"}
          feedback={"Bhushan is a highly skilled and motivated individual who consistently exceeded expectations in his role."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
