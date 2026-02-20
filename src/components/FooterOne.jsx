import Link from "next/link";
import LogoSVG from "./LogoSVG";

const FooterOne = () => {
  return (
    <footer className='footer bg-main-25 position-relative z-1'>
      <div className='py-60 '>
        <div className='container container-two'>
          <div className='row row-cols-lg-3 row-cols-sm-2 row-cols-1 gy-5'>
           
            <div className='col' data-aos='fade-up' data-aos-duration={300}>
              <div className='footer-item'>
                <div className='footer-item__logo mb-24'>
                  <Link href='/' className='flex-align gap-10'>
                    <LogoSVG className="academy-logo-svg" style={{ maxWidth: '100%', height: 'auto', width: '260px' }} />
                  </Link>
                </div>
                <p className='my-32'>
                  Empowering students to achieve academic excellence through personalized teaching and expert guidance. From Class 6 to A-Levels and IELTS preparation.
                </p>
                <ul className='social-list flex-align gap-24'>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.facebook.com/share/1Ar9JLcdw1/'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-facebook-logo' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='mailto:Strivestarsacademy01@gmail.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                      aria-label='Email Strive Star Academy'
                    >
                      <i className='ph-bold ph-envelope-simple' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.linkedin.com'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-linkedin-logo' />
                    </Link>
                  </li>
                  <li className='social-list__item'>
                    <Link
                      href='https://www.instagram.com/strivestarsacademy/?hl=en'
                      className='text-main-600 text-2xl hover-text-main-two-600'
                    >
                      <i className='ph-bold ph-instagram-logo' />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 2: Navigation */}
            <div className='col' data-aos='fade-up' data-aos-duration={400}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>Quick Links</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <Link
                      href='/'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Home
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/about'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      About Us
                    </Link>
                  </li>
                  <li className='mb-16'>
                    <Link
                      href='/terms-and-conditions'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className='mb-0'>
                    <Link
                      href='/contact'
                      className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
                <h4 className='footer-item__title mb-32 mt-40'>Our Programs</h4>
                <ul className='footer-menu'>
                  <li className='mb-16'>
                    <span className='text-neutral-500'>Class 6-8</span>
                  </li>
                  <li className='mb-16'>
                    <span className='text-neutral-500'>Class 9 & 10</span>
                  </li>
                  <li className='mb-16'>
                    <span className='text-neutral-500'>Class 11 & 12</span>
                  </li>
                  <li className='mb-16'>
                    <span className='text-neutral-500'>O/A Levels</span>
                  </li>
                  <li className='mb-0'>
                    <span className='text-neutral-500'>IELTS Preparation</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact Details */}
            <div className='col' data-aos='fade-up' data-aos-duration={600}>
              <div className='footer-item'>
                <h4 className='footer-item__title mb-32'>Contact Details</h4>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-phone' />
                  </span>
                  <div>
                    <Link
                      href='tel:+923361401532'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      0336-1401532
                    </Link>
                    <Link
                      href='tel:+923484396862'
                      className='text-neutral-500 d-block hover-text-main-600 mb-4'
                    >
                      0348-4396862
                    </Link>
                    <Link
                      href='tel:+923054082035'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      0305-4082035
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-envelope-open' />
                  </span>
                  <div>
                    <Link
                      href='mailto:Strivestarsacademy01@gmail.com'
                      className='text-neutral-500 d-block hover-text-main-600 mb-0'
                    >
                      Strivestarsacademy01@gmail.com
                    </Link>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-24'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-map-trifold' />
                  </span>
                  <div>
                    <span className='text-neutral-500 d-block mb-4'>
                      Main Campus, Education Avenue
                    </span>
                    <span className='text-neutral-500 d-block mb-0'>
                      Lahore, Pakistan
                    </span>
                  </div>
                </div>
                <div className='flex-align gap-20 mb-0'>
                  <span className='icon d-flex text-32 text-main-600'>
                    <i className='ph ph-clock' />
                  </span>
                  <div>
                    <span className='text-neutral-500 d-block mb-2'>
                      Mon - Sat: 9:00 AM - 7:00 PM
                    </span>
                    <span className='text-neutral-500 d-block'>
                      Sunday: Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        {/* bottom Footer */}
        <div className='bottom-footer bg-main-25 border-top border-dashed border-main-100 border-0 py-32'>
          <div className='container container-two'>
            <div className='bottom-footer__inner flex-between gap-3 flex-wrap'>
              <p className='bottom-footer__text'>
                Copyright © 2014 <span className='fw-semibold'>Strive Star Academy </span>
                All Rights Reserved.
              </p>
              <div className='footer-links'>
                <Link
                  href='/terms-and-conditions'
                  className='text-neutral-500 hover-text-main-600 hover-text-decoration-underline'
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
