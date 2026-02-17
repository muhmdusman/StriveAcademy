const FaqOne = () => {
  return (
    <section className='faq py-120 position-relative'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='faq-thumb'>
              <img
                src='assets/images/thumbs/faq-img.png'
                alt='FAQ'
                data-tilt=''
                data-tilt-max={6}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
              />
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='faq-content'>
              <div className='mb-40'>
                <div className='flex-align d-inline-flex gap-8 mb-16 wow bounceInDown'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-question' />
                  </span>
                  <h5 className='text-main-600 mb-0'>
                    Frequently Asked Questions
                  </h5>
                </div>
                <h2 className='mb-24 wow bounceIn'>
                  Find Answers to Your Questions
                </h2>
                <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                  Here are answers to some of the most common questions we receive about Strive Star Academy and our programs.
                </p>
              </div>
              <div className='accordion common-accordion' id='accordionExample'>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={400}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseOne'
                      aria-expanded='true'
                      aria-controls='collapseOne'
                    >
                      How do I enroll my child at Strive Star Academy?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Enrolling is easy! Simply contact us via phone or email to schedule a consultation. We&apos;ll assess your child&apos;s needs, discuss suitable programs, and complete the registration process. You can also visit our campus during office hours.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={600}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseTwo'
                      aria-expanded='false'
                      aria-controls='collapseTwo'
                    >
                      What programs do you offer?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        We offer comprehensive tutoring for Class 6-8, Class 9 & 10, Class 11 & 12 (all streams), O/A Levels (Cambridge), and IELTS preparation. Our programs cover all major subjects with personalized attention to each student.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={800}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseThree'
                      aria-expanded='false'
                      aria-controls='collapseThree'
                    >
                      What are the class timings?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        We offer flexible class timings from Monday to Saturday, 9:00 AM to 7:00 PM. We work with students and parents to schedule classes at convenient times that suit everyone&apos;s schedule.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={1000}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFour'
                      aria-expanded='false'
                      aria-controls='collapseFour'
                    >
                      How do you track student progress?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        We conduct regular assessments and provide detailed progress reports to parents. We also schedule parent-teacher meetings to discuss student performance, strengths, and areas needing improvement.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={1200}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseFive'
                      aria-expanded='false'
                      aria-controls='collapseFive'
                    >
                      What is your fee structure?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Our fee structure varies based on the program and number of subjects. Please contact us directly for detailed information about fees. We offer competitive rates and flexible payment plans to make quality education accessible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
