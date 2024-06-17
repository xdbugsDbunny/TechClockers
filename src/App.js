import "./App.css";
import OurServices from "./Pages/Services/OurServices";
import OurDomain from "./Pages/Domains/OurDomain"
import { motion, useScroll, useSpring } from "framer-motion";
import BlueBackground from "./Components/BackGround/BlueBackGround/BlueBackground";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing"
import AboutUs from "./Pages/AboutUs/AboutUs";
import ForStartUp from "./Pages/ForStartUp/ForStartUp";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop"
function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/services' element={<OurServices></OurServices>} />
          <Route path='/domains' element={<OurDomain></OurDomain>} />
          <Route path='/pricing' element={<Pricing></Pricing>} />
          <Route path='/aboutus' element={<AboutUs></AboutUs>} />
          <Route path='/forstartups' element={<ForStartUp></ForStartUp>} />
        </Routes>
      </BrowserRouter>
      <ScrollToTop/>
    </>
  );
}

export default App;
