import React from "react";
import Home from "../../components/pages/home";
import { PageHead } from "@/components/general";

const HomePage = (props: { isMobile: boolean }) => {
  const { isMobile } = props;

  return (
    <>
      <PageHead title="ZEN | Home" />
      <Home isMobile={isMobile} />
    </>
  );
};

export default HomePage;
