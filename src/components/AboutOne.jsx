import Link from "next/link";

const AboutOne = () => {
  return (
    <section className='about py-120 position-relative z-1 mash-bg-main mash-bg-main-two'>
      <div className='position-relative'>
        <div className='container'>
          <div className='row gy-xl-0 gy-5 align-items-center'>
            <div className='col-xl-6'>
              <div className='about-content'>
                <div className='mb-40'>
                  <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                    <span className='w-8 h-8 bg-main-600 rounded-circle' />
                    <h5 className='text-main-600 mb-0'>About Strive Stars Academy</h5>
                  </div>
                  <h2 className='mb-24 wow bounceIn'>
                    Empowering Students to Achieve Excellence
                  </h2>
                  <p className='text-neutral-500 wow bounceInUp'>
                    At Strive Stars Academy, we believe in nurturing academic potential through personalized attention and expert guidance. Our dedicated team of experienced tutors works closely with each student to build confidence, strengthen fundamentals, and achieve outstanding results.
                  </p>
                  <p className='text-neutral-500 mt-16 wow bounceInUp'>
                    Whether you&apos;re preparing for board exams, Cambridge assessments, or IELTS, we provide a supportive learning environment tailored to your individual needs and goals.
                  </p>
                </div>
                <div
                  className='flex-align align-items-start gap-28 mb-32'
                  data-aos='fade-right'
                  data-aos-duration={200}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <i className='ph-bold ph-target text-main-600 text-3xl' />
                  </span>
                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Mission</h4>
                    <p className='text-neutral-500'>
                      To provide high-quality, accessible education that empowers students to reach their full academic potential and beyond.
                    </p>
                  </div>
                </div>
                <div
                  className='flex-align align-items-start gap-28 mb-0'
                  data-aos='fade-right'
                  data-aos-duration={400}
                >
                  <span className='w-80 h-80 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0'>
                    <i className='ph-bold ph-eye text-main-600 text-3xl' />
                  </span>
                  <div className='flex-grow-1'>
                    <h4 className='text-neutral-500 mb-12'>Our Vision</h4>
                    <p className='text-neutral-500'>
                      To be the leading academy that transforms students into confident, knowledgeable individuals ready to excel in their academic journey.
                    </p>
                  </div>
                </div>
                <div
                  className='pt-40 border-top border-neutral-50 mt-40 border-dashed border-0'
                  data-aos='fade-right'
                  data-aos-duration={600}
                >
                  <Link
                    href='/about'
                    className='btn btn-main rounded-pill flex-align gap-8 d-inline-flex'
                  >
                    Learn More About Us
                    <i className='ph-bold ph-arrow-up-right d-flex text-lg' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-xl-6'>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                gap: '16px',
                height: '480px',
                width: '100%',
              }}>
                {/* Left image – spans both rows */}
                <img
                  src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80&auto=format&fit=crop'
                  alt='Students studying diligently at Strive Stars Academy, Lahore Pakistan'
                  className='rounded-12'
                  style={{
                    gridColumn: '1',
                    gridRow: '1 / 3',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                {/* Expert box – top right */}
                <div
                  className='bg-main-600 rounded-12 d-flex flex-column align-items-center justify-content-center text-center px-2'
                  data-aos='fade-left'
                  style={{ gridColumn: '2', gridRow: '1' }}
                >
                  <h2 className='mb-0 text-white'>Expert</h2>
                  <span className='text-white'>Qualified Tutors</span>
                </div>
                {/* Classroom image – bottom right */}
                <img
                  src='https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80&auto=format&fit=crop'
                  alt='Modern classroom and learning environment at Strive Stars Academy Pakistan'
                  className='rounded-12'
                  style={{
                    gridColumn: '2',
                    gridRow: '2',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutOne;
