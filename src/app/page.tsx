import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { Spotlight } from "@/components/ui/Spotlight";
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from "@/components/FeaturedWabinars";
import React from "react";
import TestiMonialCard from "@/components/TestiMonialCard";




export const page = () => {
  return (
    <div>
      
      <HeroSection/>
      <FeaturedWabinars/>
      <Spotlight/>
      <WhyChooseUs/>
      <FeaturedCourses/>
      <TestiMonialCard/>
    
      <Footer/>


    </div>
  )
}

export default page