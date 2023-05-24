import React from "react";
import HomeDesktop from "./home-desktop";
import HomeMobile from "./home-mobile";

type HomeProps = {
  isMobile: boolean;
};

const Home = (props: HomeProps) => {
  const { isMobile } = props;

  if (isMobile) {
    return <HomeMobile />;
  }

  return <HomeDesktop />;
};

export default Home;
