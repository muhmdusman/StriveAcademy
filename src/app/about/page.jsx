import Breadcrumb from "@/components/Breadcrumb";
import CounterOne from "@/components/CounterOne";
import FaqOne from "@/components/FaqOne";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TestimonialsOne from "@/components/TestimonialsOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "About Us - Strive Star Academy",
  description:
    "Learn more about Strive Star Academy - empowering students to achieve academic excellence through personalized tutoring and expert guidance.",
};

const page = () => {
  return (
    <>
      <Animation />
      <HeaderOne />
      <Breadcrumb title={"About Us"} />
      
      {/* About Section */}
      <section className='about py-120 position-relative z-1'>
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-lg-6'>
              <div className='pe-lg-5'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='w-8 h-8 bg-main-600 rounded-circle' />
                  <h5 className='text-main-600 mb-0'>About Strive Star Academy</h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>
                  Empowering Students to Achieve Excellence
                </h2>
                <p className='text-neutral-500 wow bounceInUp'>
                  At Strive Star Academy, we are committed to providing exceptional educational support to students across all academic levels. Our mission is to nurture academic potential through personalized attention, innovative teaching methods, and unwavering dedication to student success.
                </p>
                <p className='text-neutral-500 mt-16 wow bounceInUp'>
                  Founded with a vision to make quality education accessible to all, we have successfully helped hundreds of students achieve their academic goals. From foundational learning in middle school to advanced preparation for Cambridge examinations and IELTS, we provide a comprehensive learning experience tailored to individual needs.
                </p>
                <p className='text-neutral-500 mt-16 wow bounceInUp'>
                  Our team of highly qualified and experienced tutors brings subject expertise, proven teaching methodologies, and genuine care for each student's academic journey. We believe that with the right guidance, every student can unlock their full potential and excel in their studies.
                </p>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='row gy-4'>
                <div className='col-sm-6' data-aos='fade-up'>
                  <img
                    src='assets/images/thumbs/about-img1.png'
                    alt='Strive Star Academy'
                    className='rounded-12 w-100'
                  />
                </div>
                <div className='col-sm-6' data-aos='fade-up' data-aos-delay='200'>
                  <div className='bg-main-600 rounded-12 text-center py-32 px-20 mb-24'>
                    <h2 className='text-white mb-8'>Expert</h2>
                    <span className='text-white'>Qualified Tutors</span>
                  </div>
                  <img
                    src='assets/images/thumbs/about-img2.png'
                    alt='Learning Environment'
                    className='rounded-12 w-100'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className='row gy-4 mt-80'>
            <div className='col-lg-4 col-md-6' data-aos='fade-up'>
              <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100'>
                <span className='w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20'>
                  <i className='ph-bold ph-target text-3xl' />
                </span>
                <h4 className='mb-12'>Our Mission</h4>
                <p className='text-neutral-500'>
                  To provide high-quality, accessible education that empowers students to reach their full academic potential and beyond.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay='200'>
              <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100'>
                <span className='w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20'>
                  <i className='ph-bold ph-eye text-3xl' />
                </span>
                <h4 className='mb-12'>Our Vision</h4>
                <p className='text-neutral-500'>
                  To be the leading academy that transforms students into confident, knowledgeable individuals ready to excel in their academic journey.
                </p>
              </div>
            </div>
            <div className='col-lg-4 col-md-6' data-aos='fade-up' data-aos-delay='400'>
              <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center h-100'>
                <span className='w-80 h-80 bg-main-600 text-white rounded-circle flex-center d-inline-flex mb-20'>
                  <i className='ph-bold ph-star text-3xl' />
                </span>
                <h4 className='mb-12'>Our Values</h4>
                <p className='text-neutral-500'>
                  Excellence, integrity, personalized attention, and commitment to student success guide everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterOne />
      <TestimonialsOne />
      <FaqOne />
      <FooterOne />
    </>
  );
};

export default page;
