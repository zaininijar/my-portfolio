import React from "react";
import { PageHead, Home } from "@/components";

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
