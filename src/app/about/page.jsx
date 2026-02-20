import Breadcrumb from "@/components/Breadcrumb";
import CounterOne from "@/components/CounterOne";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import PrincipalSection from "@/components/PrincipalSection";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title:
    "About Us | Strive Star Academy – Expert Study Academy in Lahore, Pakistan",
  description:
    "Learn about Strive Star Academy – Lahore's trusted study academy empowering students in Class 6–12, O-Level, A-Level, and IELTS. Meet our expert tutors, understand our mission to deliver academic excellence, and discover why hundreds of students choose us for their board exam and Cambridge preparation.",
  keywords:
    "about Strive Star Academy, academy Lahore Pakistan, expert tutors Pakistan, O-Level academy, A-Level coaching, IELTS Lahore, Matric FSc tuition, study centre Pakistan",
};

const page = () => {
  return (
    <>
      <Animation />
      <HeaderOne />
      <Breadcrumb title={"About Us"} />

      {/* About Section */}
      <section
        className="about py-120 position-relative z-1"
        aria-label="About Strive Star Academy"
      >
        <div className="container">
          <div className="row gy-5 align-items-center">
            <div className="col-lg-6">
              <div className="pe-lg-5">
                <div className="flex-align gap-8 mb-16 wow bounceInDown">
                  <span className="w-8 h-8 bg-main-600 rounded-circle" />
                  <h5 className="text-main-600 mb-0">About Strive Star Academy</h5>
                </div>
                <h2 className="mb-24 wow bounceIn">
                  Empowering Students to Achieve Excellence
                </h2>
                <p className="text-neutral-500 wow bounceInUp">
                  At Strive Star Academy, we are committed to providing exceptional educational support to students across all academic levels. Our mission is to nurture academic potential through personalized attention, innovative teaching methods, and unwavering dedication to student success.
                </p>
                <p className="text-neutral-500 mt-16 wow bounceInUp">
                  Founded with a vision to make quality education accessible to all, we have successfully helped hundreds of students achieve their academic goals. From foundational learning in middle school to advanced preparation for Cambridge examinations and IELTS, we provide a comprehensive learning experience tailored to individual needs.
                </p>
                <p className="text-neutral-500 mt-16 wow bounceInUp">
                  Our team of highly qualified and experienced tutors brings subject expertise, proven teaching methodologies, and genuine care for each student&apos;s academic journey. We believe that with the right guidance, every student can unlock their full potential and excel in their studies.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row gy-4">
                <div className="col-sm-6" data-aos="fade-up">
                  <img
                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600&q=80&auto=format&fit=crop"
                    alt="Students studying together at Strive Star Academy Lahore Pakistan"
                    className="rounded-12 w-100"
                    style={{ objectFit: 'cover', height: '320px' }}
                  />
                </div>
                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                  <div className="bg-main-600 rounded-12 text-center py-32 px-20 mb-24">
                    <h2 className="text-white mb-8">Expert</h2>
                    <span className="text-white">Qualified Tutors</span>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=80&auto=format&fit=crop"
                    alt="Expert tutor guiding a student at Strive Star Academy Pakistan"
                    className="rounded-12 w-100"
                    style={{ objectFit: 'cover', height: '200px' }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="row gy-4 mt-80">
            <div className="col-lg-4 col-md-6" data-aos="fade-up">
              <div className="bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100">
                <span className="w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20">
                  <i className="ph-bold ph-target text-3xl" />
                </span>
                <h4 className="mb-12">Our Mission</h4>
                <p className="text-neutral-500">
                  To provide high-quality, accessible education that empowers students to reach their full academic potential and beyond.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
              <div className="bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100">
                <span className="w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20">
                  <i className="ph-bold ph-eye text-3xl" />
                </span>
                <h4 className="mb-12">Our Vision</h4>
                <p className="text-neutral-500">
                  To be the leading academy that transforms students into confident, knowledgeable individuals ready to excel in their academic journey.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
              <div className="bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100">
                <span className="w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20">
                  <i className="ph-bold ph-star text-3xl" />
                </span>
                <h4 className="mb-12">Our Values</h4>
                <p className="text-neutral-500">
                  Excellence, integrity, personalized attention, and commitment to student success guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principal Section */}
      <PrincipalSection />

      <CounterOne />
      <TestimonialsOne />
      <FaqOne />
      <FooterOne />
    </>
  );
};

export default page;
