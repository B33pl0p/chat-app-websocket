"use client";

import React from "react";
import NavBar from "./components/NavBar";

 const Hero = () => {
  const navItems = ["About", "Footer"];

  return <NavBar navItems={navItems} />;
};

export default Hero