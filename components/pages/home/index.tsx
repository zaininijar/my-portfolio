import React from "react";
import HomeDesktop from "./home-desktop";
import HomeMobile from "./home-mobile";
import Navbar from "../../general/navbar/navbar";

type HomeProps = {
  isMobile: boolean;
};

const Home = (props: HomeProps) => {
  const { isMobile } = props;

  return isMobile ? (
    <>
      <Navbar isMobile={isMobile} />
      <HomeMobile />
    </>
  ) : (
    <>
      <Navbar isMobile={isMobile} />
      <HomeDesktop />
    </>
  )

};

export default Home;
