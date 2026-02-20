const FaqOne = () => {
  return (
    <section className='faq py-120 position-relative'>
      <div className='container'>
        <div className='row gy-4 align-items-center'>
          <div className='col-lg-6 d-lg-block d-none'>
            <div className='faq-thumb'>
              <img
                src='https://images.unsplash.com/photo-1509062522246-3755977927d7?w=720&q=80&auto=format&fit=crop'
                alt='Expert teacher conducting an interactive class at Strive Star Academy Lahore'
                className='rounded-16 w-100'
                style={{ objectFit: 'cover', maxHeight: '520px' }}
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
                  Here are answers to some of the most common questions we receive about Strive Stars Academy and our programs.
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
                      What programs does Strive Stars Academy offer?
                    </button>
                  </h2>
                  <div
                    id='collapseOne'
                    className='accordion-collapse collapse show'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        We offer personalized coaching and professional guidance to help students excel in academics, entry tests, skill development, and overall confidence building. Our courses are structured to make learning easy and practical.
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
                      Who can join Strive Stars Academy?
                    </button>
                  </h2>
                  <div
                    id='collapseTwo'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Our academy is open to students of all ages who are looking to strengthen their academic foundation, prepare for competitive exams, or improve specific skills with expert mentorship and support.
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
                      How do I enroll in a course?
                    </button>
                  </h2>
                  <div
                    id='collapseThree'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Enrollment is simple! You can contact us via phone or visit our academy location in Lahore to get enrollment forms and guidance on course selection.
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
                      Do you provide online classes?
                    </button>
                  </h2>
                  <div
                    id='collapseFour'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Yes! We offer flexible learning options including online support, study materials, and guidance so students can learn from home if needed.
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
                      Are there test preparation sessions available?
                    </button>
                  </h2>
                  <div
                    id='collapseFive'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Absolutely. We provide structured test preparation for academic exams, competitive tests, and skill-based challenges to make sure students are confident and ready on test day.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className='accordion-item'
                  data-aos='fade-up-left'
                  data-aos-duration={1400}
                >
                  <h2 className='accordion-header'>
                    <button
                      className='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#collapseSix'
                      aria-expanded='false'
                      aria-controls='collapseSix'
                    >
                      How can parents track their child's progress?
                    </button>
                  </h2>
                  <div
                    id='collapseSix'
                    className='accordion-collapse collapse'
                    data-bs-parent='#accordionExample'
                  >
                    <div className='accordion-body'>
                      <p className='accordion-body__desc'>
                        Parents can stay updated through regular feedback sessions, progress reports, and teacher communication to understand how their child is improving.
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
