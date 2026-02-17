import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
import FeaturesOne from "@/components/FeaturesOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ResultsSection from "@/components/ResultsSection";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Strive Star Academy - Knowledge is Power",
  description:
    "Strive Star Academy offers expert tutoring for Class 6-8, Class 9 & 10, Class 11 & 12, O/A Levels, and IELTS preparation. Empowering students to achieve academic excellence.",
};

const page = () => {
  return (
    <>
      {/* HeaderOne */}
      <HeaderOne />

      {/* Animation */}
      <Animation />

      {/* BannerOne - Hero Section: Knowledge is Power */}
      <BannerOne />

      {/* Section 2 - Student Categories */}
      <FeaturesOne />

      {/* Section 3 - About the Academy */}
      <AboutOne />

      {/* Section 4 - Results & Progress */}
      <ResultsSection />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
