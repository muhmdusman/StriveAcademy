const ContactInner = () => {
  return (
    <>
      <section className='contact py-120'>
        <div className='container'>
          <div className='section-heading text-center'>
            <div className='flex-align d-inline-flex gap-8 mb-16'>
              <span className='text-main-600 text-2xl d-flex'>
                <i className='ph-bold ph-chats-circle' />
              </span>
              <h5 className='text-main-600 mb-0'>Get In Touch</h5>
            </div>
            <h2 className='mb-24'>We&apos;re Here to Help</h2>
            <p>
              Have questions about our programs or want to enroll? We&apos;re here to assist you. 
              Reach out to us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className='row gy-4'>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-map-pin-line' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Our Location</h4>
                  <p className='text-neutral-500'>
                    Main Campus, Education Avenue<br/>
                    Lahore, Pakistan
                  </p>
                  <a
                    href='#'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Find Location
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-envelope-open' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Email Address</h4>
                  <p className='text-neutral-500'>Strivestarsacademy01@gmail.com</p>
                  <a
                    href='mailto:Strivestarsacademy01@gmail.com'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Send Us Email
                  </a>
                </div>
              </div>
            </div>
            <div className='col-xl-4 col-md-6'>
              <div className='contact-item bg-main-25 border border-neutral-30 rounded-12 px-32 py-40 d-flex align-items-start gap-24 hover-bg-main-600 transition-2 hover-border-main-600'>
                <span className='contact-item__icon w-60 h-60 text-32 flex-center rounded-circle bg-main-600 text-white flex-shrink-0'>
                  <i className='ph ph-phone-call' />
                </span>
                <div className='flex-grow-1'>
                  <h4 className='mb-12'>Phone Number</h4>
                  <p className='text-neutral-500'>0336-1401532</p>
                  <p className='text-neutral-500'>0348-4396862</p>
                  <p className='text-neutral-500'>0305-4082035</p>
                  <a
                    href='tel:+923361401532'
                    className='text-main-600 fw-semibold text-decoration-underline mt-16'
                  >
                    Call Us Today!
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='contact-form-section py-240 bg-main-25 position-relative z-1'>
        <img
          src='assets/images/bg/wave-bg.png'
          alt=''
          className='position-absolute top-0 start-0 w-100 h-100 z-n1 d-lg-block d-none'
        />
        <div className='container'>
          <div className='row gy-5 align-items-center'>
            <div className='col-xl-7 col-lg-6 pe-lg-5'>
              <div className='mb-40 md-xl-5'>
                <div className='flex-align d-inline-flex gap-8 mb-16'>
                  <span className='text-main-600 text-2xl d-flex'>
                    <i className='ph-bold ph-envelope' />
                  </span>
                  <h5 className='text-main-600 mb-0'>Contact Us</h5>
                </div>
                <h2 className='mb-24'>
                  Have Questions? We&apos;re Here to Help
                </h2>
                <p className='text-neutral-500 text-line-3 max-w-636'>
                  At Strive Star Academy, we believe in open communication with our students and their families. 
                  Whether you need information about our programs, want to schedule a consultation, or have specific 
                  questions about enrollment, our team is ready to assist you.
                </p>
                <div className='mt-32'>
                  <h5 className='mb-16'>Why Choose Strive Star Academy?</h5>
                  <ul className='list-inside'>
                    <li className='text-neutral-500 mb-12'>✓ Expert and qualified tutors</li>
                    <li className='text-neutral-500 mb-12'>✓ Personalized learning approach</li>
                    <li className='text-neutral-500 mb-12'>✓ Proven track record of success</li>
                    <li className='text-neutral-500 mb-12'>✓ Comprehensive coverage from Class 6 to A-Levels</li>
                    <li className='text-neutral-500 mb-12'>✓ IELTS preparation by certified trainers</li>
                  </ul>
                </div>
              </div>
              <div className='mt-40'>
                <h6 className='mb-12'>Office Hours</h6>
                <p className='text-neutral-500 mb-8'>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p className='text-neutral-500'>Sunday: Closed</p>
              </div>
            </div>
            <div className='col-xl-5 col-lg-6'>
              <div className='p-24 bg-white rounded-12 box-shadow-md'>
                <div className='border border-neutral-30 rounded-8 bg-main-25 p-24'>
                  <form action='#' id='contactForm'>
                    <h4 className='mb-0'>Send Us a Message</h4>
                    <span className='d-block border border-neutral-30 my-24 border-dashed' />
                    <div className='mb-24'>
                      <label
                        htmlFor='name'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Your Name
                      </label>
                      <input
                        type='text'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='name'
                        placeholder='Enter your name...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='email'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Email Address
                      </label>
                      <input
                        type='email'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='email'
                        placeholder='Enter your email...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='phone'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Phone Number
                      </label>
                      <input
                        type='tel'
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='phone'
                        placeholder='Enter your phone number...'
                      />
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='subject'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Subject
                      </label>
                      <select
                        className='common-input rounded-pill border-transparent focus-border-main-600'
                        id='subject'
                      >
                        <option value=''>Select a subject...</option>
                        <option value='enrollment'>Enrollment Inquiry</option>
                        <option value='class6-8'>Class 6-8 Information</option>
                        <option value='class9-10'>Class 9 & 10 Information</option>
                        <option value='class11-12'>Class 11 & 12 Information</option>
                        <option value='olevels'>O/A Levels Information</option>
                        <option value='ielts'>IELTS Preparation</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                    <div className='mb-24'>
                      <label
                        htmlFor='message'
                        className='text-neutral-700 text-lg fw-medium mb-12'
                      >
                        Your Message
                      </label>
                      <textarea
                        id='message'
                        className='common-input rounded-24 border-transparent focus-border-main-600 h-110'
                        placeholder='Write your message here...'
                        defaultValue={""}
                      />
                    </div>
                    <div className='mb-0'>
                      <button
                        type='submit'
                        className='btn btn-main rounded-pill flex-center gap-8 w-100'
                      >
                        Send Message
                        <i className='ph-bold ph-paper-plane-tilt d-flex text-lg' />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactInner;
