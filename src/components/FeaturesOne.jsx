const FeaturesOne = () => {
  const categories = [
    {
      icon: 'ph-bold ph-book-open',
      title: 'Class 6 - 8',
      description: 'Strong foundation building in core subjects including Mathematics, Science, English, and Social Studies for middle school students.',
      delay: 200,
    },
    {
      icon: 'ph-bold ph-graduation-cap',
      title: 'Class 9 & 10',
      description: 'Comprehensive preparation for board examinations with focused attention on all major subjects and exam techniques.',
      delay: 400,
    },
    {
      icon: 'ph-bold ph-certificate',
      title: 'Class 11 & 12',
      description: 'Advanced level coaching for higher secondary students in Science, Commerce, and Arts streams with career-oriented guidance.',
      delay: 600,
    },
    {
      icon: 'ph-bold ph-globe-hemisphere-west',
      title: 'O/A Levels',
      description: 'Expert tutoring for Cambridge O-Level and A-Level curricula, helping students excel in international examinations.',
      delay: 800,
    },
    {
      icon: 'ph-bold ph-translate',
      title: 'IELTS',
      description: 'Targeted IELTS preparation covering Reading, Writing, Listening, and Speaking modules with practice tests and strategies.',
      delay: 1000,
    },
  ];

  return (
    <section className='features py-120 position-relative overflow-hidden'>
      <img
        src='assets/images/shapes/shape2.png'
        alt=''
        className='shape two animation-scalation'
      />
      <img
        src='assets/images/shapes/shape4.png'
        alt=''
        className='shape six animation-walking'
      />
      <div className='container'>
        <div className='section-heading text-center'>
          <h2 className='mb-24 wow bounceIn'>
            Our Students
          </h2>
          <p className='wow bounceInUp'>
            We offer expert tutoring across multiple academic levels, ensuring every student receives the guidance they need to succeed.
          </p>
        </div>
        <div className='row gy-4 justify-content-center'>
          {categories.map((cat, index) => (
            <div className='col-lg-4 col-md-6' key={index} data-aos='zoom-in' data-aos-duration={cat.delay}>
              <div className='features-item item-hover animation-item bg-main-25 border border-neutral-30 rounded-16 transition-1 hover-bg-main-600 hover-border-main-600 text-center p-32'>
                <span className='mb-24 w-110 h-110 flex-center bg-white rounded-circle d-inline-flex'>
                  <i className={`${cat.icon} text-main-600 text-4xl`} />
                </span>
                <h4 className='mb-16 transition-1 item-hover__text'>
                  {cat.title}
                </h4>
                <p className='transition-1 item-hover__text'>
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesOne;
