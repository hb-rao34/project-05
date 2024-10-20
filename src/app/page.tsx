import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

import { Spotlight } from "@/components/ui/Spotlight";
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from "@/components/FeaturedWabinars";
import React from "react";


export const page = () => {
  return (
    <div>
      
      <HeroSection/>
      <Spotlight/>
      <WhyChooseUs/>
      <FeaturedWabinars/>
      <FeaturedCourses/>
      <Footer/>


    </div>
  )
}

export default page