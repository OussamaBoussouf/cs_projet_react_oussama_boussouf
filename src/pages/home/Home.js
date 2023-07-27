import React from "react";
// IMPORT STYLE
import './Home.scss';



import {HeroSection} from './components/HeroSection/HeroSection';
import { ComingProduct } from "./components/ComingProduct/ComingProduct";
import { OurProducts } from "./components/OurProducts/OurProducts";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <ComingProduct />
      <OurProducts />
    </>
  );
};
