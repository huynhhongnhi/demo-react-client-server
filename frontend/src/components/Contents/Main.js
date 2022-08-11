import React from "react";
import About from "./About";
import Facts from "./Facts";
import Skills from "./Skills";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Services from "./Services";
import Resume from "./Resume";
import Portfolio from "./Portfolio";

const Layout = () => {
  
  return (
    <main id="main">
        <About></About>
        <Facts></Facts>
        <Skills></Skills>
        <Resume></Resume>
        <Portfolio></Portfolio>
        <Services></Services>
        <Testimonials></Testimonials>
        <Contact></Contact>
    </main>
  )
}

export default Layout