import About from "./components/About/About";
import Banner from "./components/Banner/Banner";

export default function Home() {
  return (
   <div className="">
 <section id="banner">
   <Banner/>
 </section>
 <section id='about'>
  <About/>
 </section>
   </div>
  );
}
