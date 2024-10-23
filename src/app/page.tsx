import HeroSection from '@/components/HeroSection';
import { Spotlight } from '@/components/ui/Spotlight';
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from '@/components/FeaturedWabinars';
import Footer from '@/components/Footer';
import React from 'react'

const page = () => {
  return(

    <div>

<HeroSection/>
<Spotlight/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWabinars/>
<Footer/>

    </div>
  )
}

export default page