"use client";
import Slider from "react-slick";

const placeholderSlides = [
  { id: 1, src: "assets/images/Acheivers/acheiver-1.jpeg", alt: "Top Achiever – Strive Star Academy" },
  { id: 2, src: "assets/images/Acheivers/acheiver-2.jpeg", alt: "Academic Excellence – Strive Star Academy" },
  { id: 3, src: "assets/images/Acheivers/acheiver-3.jpeg", alt: "Student Success – Strive Star Academy Pakistan" },
  { id: 4, src: "assets/images/Acheivers/acheiver-4.jpeg", alt: "Star Performer – Strive Star Academy" },
  { id: 5, src: "assets/images/Acheivers/acheiver-5.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 6, src: "assets/images/Acheivers/acheiver-6.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 7, src: "assets/images/Acheivers/acheiver-7.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 8, src: "assets/images/Acheivers/acheiver-8.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 9, src: "assets/images/Acheivers/acheiver-9.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 10, src: "assets/images/Acheivers/acheiver-10.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 11, src: "assets/images/Acheivers/acheiver-11.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
  { id: 12, src: "assets/images/Acheivers/acheiver-12.jpeg", alt: "Board Exam Topper – Strive Star Academy" },
];

const PrevArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Previous achiever"
    className="achievers-arrow achievers-arrow-prev"
  >
    <i className="ph-bold ph-caret-left" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Next achiever"
    className="achievers-arrow achievers-arrow-next"
  >
    <i className="ph-bold ph-caret-right" />
  </button>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  swipe: true,
  touchThreshold: 10,
  arrows: true,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  dotsClass: "slick-dots achievers-dots",
  responsive: [
    {
      breakpoint: 992,
      settings: { slidesToShow: 2 },
    },
    {
      breakpoint: 576,
      settings: { slidesToShow: 1 },
    },
  ],
};

const TopAchieversSlider = () => {
  return (
    <section
      className="py-120 position-relative z-1"
      aria-label="Our Top Achievers"
      style={{ background: "var(--main-25, #f4f6ff)" }}
    >
      <div className="container">

        {/* ── Section Header ─────────────────────────── */}
        <div className="row justify-content-center mb-56">
          <div className="col-lg-7 text-center">
            <div className="flex-align gap-8 mb-16 justify-content-center wow bounceInDown">
              <span className="w-8 h-8 bg-main-600 rounded-circle" />
              <h5 className="text-main-600 mb-0">Celebrating Excellence</h5>
            </div>
            <h2 className="mb-16 wow bounceIn">Our Top Achievers</h2>
            <p className="text-neutral-500 wow bounceInUp">
              Strive Star Academy proudly celebrates outstanding results from our
              students across Matric, FSc, O&#8209;Level, A&#8209;Level and
              IELTS &mdash; Pakistan&apos;s finest academy for academic
              excellence in Lahore.
            </p>
          </div>
        </div>

        {/* ── Cards Slider ───────────────────────────── */}
        <div className="achievers-slider-outer wow bounceInUp">
          <Slider {...settings}>
            {placeholderSlides.map((slide) => (
              <div key={slide.id} className="achievers-slide-item px-12">
                <div className="achievers-card">
                  <div className="achievers-card__img-wrap">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="achievers-card__img"
                    />
                  </div>
                  {/* subtle badge */}
                  <div className="achievers-card__badge">
                    <i className="ph-bold ph-star-four me-6" />
                    Top Achiever
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* ── Scoped styles ──────────────────────────── */}
      <style>{`
        /* Card */
        .achievers-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.10);
          background: #fff;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .achievers-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(91,114,238,0.18);
        }

        /* Image */
        .achievers-card__img-wrap {
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
        }
        .achievers-card__img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s;
        }
        .achievers-card:hover .achievers-card__img {
          transform: scale(1.05);
        }

        /* Badge */
        .achievers-card__badge {
          position: absolute;
          bottom: 14px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--main-600, #5b72ee);
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 5px 14px;
          border-radius: 50px;
          white-space: nowrap;
          letter-spacing: 0.4px;
        }

        /* Slide padding */
        .achievers-slide-item {
          padding-bottom: 8px; /* room for card shadow */
        }

        /* Dots */
        .achievers-slider-outer {
          padding-bottom: 48px;
        }
        .achievers-dots {
          bottom: 0 !important;
        }
        .achievers-dots li button:before {
          font-size: 9px;
          color: var(--main-600, #5b72ee);
          opacity: 0.3;
        }
        .achievers-dots li.slick-active button:before {
          opacity: 1;
          color: var(--main-600, #5b72ee);
        }

        /* Arrows */
        .achievers-arrow {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: var(--main-600, #5b72ee);
          border: none;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 5;
          transition: background 0.2s, transform 0.2s;
          box-shadow: 0 3px 10px rgba(91,114,238,0.3);
        }
        .achievers-arrow:hover {
          background: #3a54d4;
          transform: scale(1.08);
        }

        /* Mobile & tablet */
        @media (max-width: 1024px) {
          .achievers-arrow {
            top: 40%;
            transform: translateY(-50%);
          }
          .achievers-arrow:hover {
            transform: translateY(-50%) scale(1.08);
          }
          .achievers-arrow-prev { left: -10px; right: auto; }
          .achievers-arrow-next { right: -10px; left: auto; }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .achievers-arrow { top: -52px; transform: none; }
          .achievers-arrow-prev { right: 56px; left: auto; }
          .achievers-arrow-next { right: 8px; left: auto; }
        }
      `}</style>
    </section>
  );
};

export default TopAchieversSlider;
