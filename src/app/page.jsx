import  Navbar from "../components/Navbar";
import  Hero  from "../components/Hero";
import Carousel from "../components/Skills";
import Projects from "../components/Projects"
import react from "../components/assets/react.gif"
import next from "../components/assets/nextjs.png"
import bootstrap from "../components/assets/bootstrap.png"
import git from "../components/assets/git.png"
import github from "../components/assets/github.png"
import graphql from "../components/assets/graphql.png"
import tailwind from "../components/assets/tailwind.png"
import webflow from "../components/assets/webflow.png"
// import About from "../components/About"
// import HowItWorks from "../components/HowItWorks";
// import Contact from "../components/Contact";
import Footer from "../components/Footer";
import './globals.css';


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Carousel
      img1={react}
      img2={next}
      img3={bootstrap}
      img4={git}
      img5={github}
      img6={graphql}
      img7={tailwind}
      img8={webflow}/>
      {/* <About/> */}
      <Projects/>
      {/* <HowItWorks/> */}
      
      {/* <Contact/> */}
      <Footer/>
     
    </>
  );
}
