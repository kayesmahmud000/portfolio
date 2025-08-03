// import { cn } from "@/lib/utils";
import Headers from "../Custom/Headers";
// import { Spotlight } from "../ui/Spotlight";


const About = () => {
    return (
         <div id='about' className="lg:flex mx-auto w-full  items-center px-4 py-10  max-w-6xl">
      <div className="lg:flex-1/3 flex items-center justify-center">
          <Headers title={'About Me'}/>
      </div>
         <div className="lg:flex-2/3 z-10 mt-5 border-l border-red-700 " data-aos="fade-left"
     data-aos-offset="300"
      data-aos-duration="6000"
     data-aos-easing="ease-in-sine">
              <p className="text-neutral-300 pl-2"> I’m a passionate and dedicated  Web Developer with a strong focus on creating modern, responsive, and user-friendly web applications.

I specialize in JavaScript, React, Next.js, TypeScript, and Tailwind CSS, and I’m also experienced in working with MongoDB and MySQL for backend data management. With these technologies, I build scalable and high-performing digital solutions that align with both user needs and business goals.

I love the intersection of design and logic — turning ideas into clean, functional, and engaging user experiences is what drives me. I’m always eager to learn new technologies, improve my skills, and take on new challenges.

When I’m not coding, you’ll find me exploring creative ideas, reading about tech trends, or staying active to keep a balanced lifestyle.
<br />
<br />
Let’s build something amazing together!</p>
         </div>
      </div>
    );
};

export default About;
