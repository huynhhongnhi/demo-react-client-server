import React from "react";
import Header from "./Header";
import Session from "../Contents/Section";
import Main from "../Contents/Main";
import Footer from "./Footer"

const Layout = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Session></Session>
      <Main></Main>
      <Footer></Footer>
    </React.Fragment>
    
  )
}

export default Layout