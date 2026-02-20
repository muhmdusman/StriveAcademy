import AboutOne from "@/components/AboutOne";
import BannerOne from "@/components/BannerOne";
import FaqOne from "@/components/FaqOne";
import FeaturesOne from "@/components/FeaturesOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import ResultsSection from "@/components/ResultsSection";
import TestimonialsOne from "@/components/TestimonialsOne";
import TopAchieversSlider from "@/components/TopAchieversSlider";
import Animation from "@/helper/Animation";

export const metadata = {
  title:
    "Strive Star Academy | Best Tutors in Pakistan – Class 6–12, O/A Levels & IELTS",
  description:
    "Strive Star Academy is a leading study academy in Lahore, Pakistan offering expert tutoring for Class 6–8, Class 9–10, Class 11–12, O-Level, A-Level, and IELTS preparation. Achieve top grades in Matric, FSc, and Cambridge board exams with our qualified tutors and personalized learning programs.",
  keywords:
    "Strive Star Academy, study academy Pakistan, tuition centre Lahore, IELTS preparation Pakistan, O-Level tutor, A-Level tutor, Matric preparation, FSc classes, best academy Pakistan, private tutoring Lahore",
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

      {/* Section 5 - Our Top Achievers Image Slider */}
      <TopAchieversSlider />

      {/* Section 6 - Testimonials */}
      <TestimonialsOne />

      {/* Section 7 - Frequently Asked Questions */}
      <FaqOne />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
