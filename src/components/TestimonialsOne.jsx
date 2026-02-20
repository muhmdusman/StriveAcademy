"use client";
import { useEffect } from "react";

const TestimonialsOne = () => {
  useEffect(() => {
    const loadSlick = async () => {
      if (typeof window !== "undefined") {
        const $ = (await import("jquery")).default;
        require("slick-carousel");

        const mainSlider = $(".testimonials__slider");

        if (mainSlider.length) {
          // Initialize the sliders
          mainSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            rtl: $("html").attr("dir") === "rtl",
            focusOnSelect: true,
            nextArrow: "#testimonials-next",
            prevArrow: "#testimonials-prev",
          });
        }
      }
    };

    loadSlick();

    return () => {
      if (typeof window !== "undefined") {
        const $ = require("jquery");
        // Destroy sliders on unmount
        $(".testimonials__slider").slick("unslick");
      }
    };
  }, []);
  return (
    <section className='testimonials py-80 py-md-120 position-relative z-1 bg-main-25' style={{ height: 'auto' }}>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape six animation-scalation'
      />
      <img
        src='assets/images/shapes/shape3.png'
        alt=''
        className='shape four animation-rotation'
      />
      <div className='container'>
        <div className='row gy-5'>
          <div className='col-lg-8 col-xl-7 mx-auto'>
            <div className='testimonials__content text-center'>
              <style>{`
                .testimonials__content .flex-align { justify-content: center; }
                .testimonials__content p, .testimonials__content h4, .testimonials__content span { text-align: center; }
                .testimonials__content .section-heading { margin-bottom: 24px; }
                @media (max-width: 767px) {
                  .testimonials { padding: 60px 0 !important; }
                }
              `}</style>
              <div className='section-heading text-center'>
                <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                  <span className='w-8 h-8 bg-main-600 rounded-circle' />
                  <h5 className='text-main-600 mb-0'>What Our Students Say</h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>
                  Testimonials from Happy Learners at Strive Star Academy
                </h2>
                <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                  Real experiences from our students and their families
                </p>
              </div>
              <div className='testimonials__slider'>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    "I had a wonderful experience at Strive Star Academy. The academy provides an excellent learning environment for students. The faculty is dedicated and knowledgeable, creating an atmosphere that fosters both academic growth and personal development. Overall, Strive Star Academy is a great place for students to learn and grow in a nurturing environment."
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    Arsam Khan
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    Student
                  </span>
                </div>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    "Highly recommended academy for any class students. High quality education!!"
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    Ibrahim Khan
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    Student
                  </span>
                </div>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    "Highly recommended this academy, qualified teacher, friendly environment... this academy gives best result. 🙂"
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    Humaira Mehmood
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    Parent
                  </span>
                </div>
                <div className='testimonials-item'>
                  <ul
                    className='flex-align gap-8 mb-16'
                    data-aos='fade-left'
                    data-aos-duration={800}
                  >
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                    <li className='text-warning-600 text-xl d-flex'>
                      <i className='ph-fill ph-star' />
                    </li>
                  </ul>
                  <p
                    className='text-neutral-700'
                    data-aos='fade-left'
                    data-aos-duration={1200}
                  >
                    "Well qualified and experienced teachers. One of the best academy in Lahore."
                  </p>
                  <h4 className='mt-48 mb-8' data-aos='fade-left'>
                    Sheikh Usama
                  </h4>
                  <span className='text-neutral-700' data-aos='fade-left'>
                    Student
                  </span>
                </div>
              </div>
              <div className='flex-align justify-content-center gap-16 mt-40'>
                <button
                  type='button'
                  id='testimonials-prev'
                  className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                >
                  <i className='ph ph-caret-left' />
                </button>
                <button
                  type='button'
                  id='testimonials-next'
                  className=' slick-arrow flex-center rounded-circle border border-gray-100 hover-border-main-600 text-xl hover-bg-main-600 hover-text-white transition-1 w-48 h-48'
                >
                  <i className='ph ph-caret-right' />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsOne;
