import Link from "next/link";

const BannerOne = () => {
  return (
    <section className='banner py-80 position-relative overflow-hidden'>
      <img
        src='assets/images/shapes/shape1.png'
        alt=''
        className='shape one animation-rotation'
      />
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape3.png'
        alt=''
        className='shape three animation-walking'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape four animation-scalation'
      />
      <img
        src='assets/images/shapes/shape5.png'
        alt=''
        className='shape five animation-walking'
      />
      <div className='container'>
        <div className='row gy-5 align-items-center'>
          <div className='col-xl-6'>
            <div className='banner-content pe-md-4'>
              <div className='flex-align gap-8 mb-16' data-aos='fade-down'>
                <span className='w-8 h-8 bg-main-600 rounded-circle' />
                <h5 className='text-main-600 mb-0'>
                  Strive Star Academy
                </h5>
              </div>
              <h1 className='display2 mb-24 wow bounceInLeft'>
                Knowledge{" "}
                <span
                  className='text-main-two-600 wow bounceInRight'
                  data-wow-duration='2s'
                  data-wow-delay='.5s'
                >
                  is
                </span>
                {" "}Power
              </h1>
              <p className='text-neutral-500 text-line-2 wow bounceInUp'>
                Welcome to Strive Star Academy, where we empower students to achieve academic excellence. From middle school to A-Levels and IELTS preparation, we provide personalized tutoring that unlocks every student&apos;s potential.
              </p>
              <div className='buttons-wrapper flex-align flex-wrap gap-24 mt-40'>
                <Link
                  href='/about'
                  className='btn btn-main rounded-pill flex-align gap-8'
                  data-aos='fade-right'
                >
                  Learn More About Us
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
                <Link
                  href='/contact'
                  className='btn btn-outline-main rounded-pill flex-align gap-8'
                  data-aos='fade-left'
                >
                  Contact Us
                  <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                </Link>
              </div>
            </div>
          </div>
          <div className='col-xl-6'>
            <div className='banner-thumb position-relative'>
              <img
                src='https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80&auto=format&fit=crop'
                alt='Student achieving academic excellence with expert tutoring at Strive Star Academy Pakistan'
                className='banner-thumb__img rounded-12 wow bounceIn w-100'
                style={{ objectFit: 'cover', maxHeight: '520px' }}
                data-wow-duration='3s'
                data-wow-delay='.5s'
                data-tilt=''
                data-tilt-max={12}
                data-tilt-speed={500}
                data-tilt-perspective={5000}
                data-tilt-full-page-listening=''
                data-tilt-scale='1.02'
              />
              {/* curve-arrow decorative asset removed */}
              <div className="banner-boxes-wrapper">
                <style>{`
                  @media (max-width: 767px) {
                    .banner-boxes-wrapper {
                      display: grid;
                      grid-template-columns: 1fr 1fr;
                      gap: 16px;
                      margin-top: 24px;
                      position: relative;
                      z-index: 10;
                    }
                    .banner-boxes-wrapper .banner-box {
                      position: static !important;
                      transform: none !important;
                      width: 100% !important;
                      padding: 16px !important;
                      animation: none !important;
                    }
                    .banner-boxes-wrapper .banner-box.three {
                      grid-column: span 2;
                    }
                    .banner-box__icon {
                      width: 36px !important;
                      height: 36px !important;
                      font-size: 18px !important;
                    }
                  }
                `}</style>
                <div
                  className='banner-box one px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg d-inline-block'
                  data-aos='fade-down'
                >
                  <span className='text-main-600'>Expert</span> Qualified Teachers
                  <div className='mt-12'>
                    <span className='text-neutral-500 text-sm'>Personalized learning for every student</span>
                  </div>
                </div>
                <div
                  className='banner-box two px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'
                  data-aos='fade-up'
                >
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 bg-purple-400 text-white text-2xl flex-center rounded-circle'>
                    <i className='ph ph-graduation-cap' />
                  </span>
                  <div>
                    <h6 className='mb-4'>All Levels</h6>
                    <span className='text-sm'>Class 6 to A-Levels</span>
                  </div>
                </div>
                <div
                  className='banner-box three px-24 py-12 rounded-12 bg-white fw-medium box-shadow-lg flex-align d-inline-flex gap-16'
                  data-aos='fade-left'
                >
                  <span className='banner-box__icon flex-shrink-0 w-48 h-48 bg-main-50 text-main-600 text-2xl flex-center rounded-circle'>
                    <i className='ph ph-certificate' />
                  </span>
                  <div>
                    <span className=''>IELTS Preparation</span>
                    <span className='mt-8 fw-medium text-sm d-block text-main-600'>
                      Score Higher with Us
                    </span>
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

export default BannerOne;
