import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import MyStack from "./components/My-Stack/MyStack";

export default function Home() {
  return (
   <div className="">
 <section  className="lg:h-screen">
   <Banner/>
 </section>
 <section >
  <About/>
 </section>
 <section >
  <MyStack/>
 </section>
   </div>
  );
}
