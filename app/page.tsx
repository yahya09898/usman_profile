import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Press from "@/components/Press";
import Services from "@/components/Services";
import Brands from "@/components/Brands";
import Values from "@/components/Values";
import Team from "@/components/Team";
import TestimonialContact from "@/components/TestimonialContact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      {/* <Press /> */}
      <Services />
      <Brands />
      <Values />
      <Team />
      <TestimonialContact />
    </>
  );
}