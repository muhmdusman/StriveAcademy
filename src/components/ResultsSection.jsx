const ResultsSection = () => {
  return (
    <section className='py-120 position-relative z-1'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <div className='container'>
        <div className='row align-items-center gy-5'>
          <div className='col-lg-6'>
            <div className='pe-lg-5'>
              <div className='flex-align gap-8 mb-16 wow bounceInDown'>
                <span className='w-8 h-8 bg-main-600 rounded-circle' />
                <h5 className='text-main-600 mb-0'>Student Progress & Results</h5>
              </div>
              <h2 className='mb-24 wow bounceIn'>
                Results Will Be Shared As Per The Progress
              </h2>
              <p className='text-neutral-500 wow bounceInUp'>
                At Strive Star Academy, we believe in transparency and continuous improvement. We closely monitor each student&apos;s academic journey and share detailed progress reports regularly with students and parents.
              </p>
              <p className='text-neutral-500 mt-16 wow bounceInUp'>
                Our structured assessment system ensures that every milestone is tracked, every challenge is addressed, and every achievement is celebrated. Parents stay informed and students stay motivated.
              </p>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='row gy-4'>
              <div className='col-sm-6' data-aos='fade-up' data-aos-duration={200}>
                <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center hover-bg-main-600 transition-1 item-hover'>
                  <span className='w-80 h-80 bg-white rounded-circle flex-center d-inline-flex mb-16'>
                    <i className='ph-bold ph-chart-line-up text-main-600 text-3xl' />
                  </span>
                  <h4 className='mb-8 transition-1 item-hover__text'>Regular Assessments</h4>
                  <p className='transition-1 item-hover__text text-neutral-500'>Weekly and monthly tests to track improvement</p>
                </div>
              </div>
              <div className='col-sm-6' data-aos='fade-up' data-aos-duration={400}>
                <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center hover-bg-main-600 transition-1 item-hover'>
                  <span className='w-80 h-80 bg-white rounded-circle flex-center d-inline-flex mb-16'>
                    <i className='ph-bold ph-file-text text-main-600 text-3xl' />
                  </span>
                  <h4 className='mb-8 transition-1 item-hover__text'>Progress Reports</h4>
                  <p className='transition-1 item-hover__text text-neutral-500'>Detailed reports shared with parents regularly</p>
                </div>
              </div>
              <div className='col-sm-6' data-aos='fade-up' data-aos-duration={600}>
                <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center hover-bg-main-600 transition-1 item-hover'>
                  <span className='w-80 h-80 bg-white rounded-circle flex-center d-inline-flex mb-16'>
                    <i className='ph-bold ph-trophy text-main-600 text-3xl' />
                  </span>
                  <h4 className='mb-8 transition-1 item-hover__text'>Performance Tracking</h4>
                  <p className='transition-1 item-hover__text text-neutral-500'>Individual attention to each student&apos;s growth</p>
                </div>
              </div>
              <div className='col-sm-6' data-aos='fade-up' data-aos-duration={800}>
                <div className='bg-main-25 border border-neutral-30 rounded-16 p-32 text-center hover-bg-main-600 transition-1 item-hover'>
                  <span className='w-80 h-80 bg-white rounded-circle flex-center d-inline-flex mb-16'>
                    <i className='ph-bold ph-users text-main-600 text-3xl' />
                  </span>
                  <h4 className='mb-8 transition-1 item-hover__text'>Parent Meetings</h4>
                  <p className='transition-1 item-hover__text text-neutral-500'>Regular consultations to discuss progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
