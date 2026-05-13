import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/Featuredcourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <>
    <HeroSection/>
    <FeaturedCourses/>
     <WhyChooseUs/>
     <TestimonialCards/>
     <UpcomingWebinars/>
     <Instructors/>
     <Footer/>
    
    </>

  );
}
