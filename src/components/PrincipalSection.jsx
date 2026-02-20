"use client";

const PrincipalSection = () => {
    return (
        <section
            className="py-120 position-relative z-1"
            aria-label="Our Principal"
        >
            <div className="container">
                {/* Section Header */}
                <div className="flex-align gap-8 mb-16 wow bounceInDown justify-content-center justify-content-lg-start">
                    <span className="w-8 h-8 bg-main-600 rounded-circle" />
                    <h5 className="text-main-600 mb-0">Leadership & Vision</h5>
                </div>
                <h2 className="mb-48 text-center text-lg-start wow bounceIn">
                    Our Principal
                </h2>

                <div className="row gy-5 align-items-center">
                    {/* Principal Image */}
                    <div className="col-lg-5" data-aos="fade-right">
                        <div
                            className="principal-image-wrap position-relative"
                            style={{ borderRadius: "16px", overflow: "hidden" }}
                        >
                            <img
                                src="assets/images/Principal.png"
                                alt="Principal of Strive Star Academy – Leading Academic Excellence in Pakistan"
                                className="w-100 rounded-16"
                                style={{
                                    objectFit: "cover",
                                    maxHeight: "520px",
                                    display: "block",
                                }}
                                onError={(e) => {
                                    /* fallback if image not yet in assets */
                                    e.currentTarget.style.display = "none";
                                    e.currentTarget.nextSibling.style.display = "flex";
                                }}
                            />
                            {/* Fallback placeholder */}
                            <div
                                style={{
                                    display: "none",
                                    width: "100%",
                                    height: "420px",
                                    background:
                                        "linear-gradient(135deg, #5b72ee22 0%, #5b72ee44 100%)",
                                    borderRadius: "16px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    gap: "16px",
                                }}
                            >
                                <i
                                    className="ph ph-user-circle text-main-600"
                                    style={{ fontSize: "96px", opacity: 0.4 }}
                                />
                                <p className="text-main-600 fw-medium" style={{ opacity: 0.6 }}>
                                    Principal&apos;s Photo
                                </p>
                            </div>

                            {/* Decorative badge */}
                            <div
                                className="position-absolute bg-main-600 text-white px-24 py-12 rounded-12"
                                style={{ bottom: "24px", left: "24px" }}
                                data-aos="fade-up"
                            >
                                <span className="fw-semibold d-block">Principal</span>
                                <span className="text-sm opacity-75">Strive Star Academy</span>
                            </div>
                        </div>
                    </div>

                    {/* Principal Description */}
                    <div className="col-lg-7" data-aos="fade-left">
                        <div className="ps-lg-5">
                            <div className="mb-32">
                                <h3 className="mb-8 wow bounceIn">
                                    [Principal&apos;s Name]
                                </h3>
                                <p className="text-main-600 fw-semibold mb-24">
                                    Founder &amp; Principal, Strive Star Academy
                                </p>

                                <p className="text-neutral-500 wow bounceInUp mb-16">
                                    With over 12 years of experience in science education and academic leadership, the Principal holds an MPhil in Applied Physics, bringing a deep understanding of both subject matter and student development to the academy.
                                </p>
                                <p className="text-neutral-500 wow bounceInUp mb-16">
                                    Under this leadership, the academy focuses on empowering learners, strengthening fundamentals, and fostering confidence across all academic levels. The Principal champions a student-centered learning environment that blends conceptual clarity with practical application, ensuring every learner is well-prepared for academic challenges and future success.
                                </p>
                                <p className="text-neutral-500 wow bounceInUp">
                                    Driven by a commitment to excellence, the Principal emphasizes modern teaching practices, structured support, and continuous improvement, helping students achieve outstanding results and build strong foundations for higher education.
                                </p>
                            </div>

                            {/* Key highlights */}
                            <div className="row gy-3">
                                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                                    <div className="flex-align gap-12">
                                        <span className="w-48 h-48 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                                            <i className="ph-bold ph-graduation-cap text-main-600 text-xl" />
                                        </span>
                                        <div>
                                            <h6 className="mb-4">Expert Educator</h6>
                                            <span className="text-neutral-500 text-sm">
                                                Years of teaching experience
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                                    <div className="flex-align gap-12">
                                        <span className="w-48 h-48 bg-main-25 border border-neutral-30 flex-center rounded-circle flex-shrink-0">
                                            <i className="ph-bold ph-star text-main-600 text-xl" />
                                        </span>
                                        <div>
                                            <h6 className="mb-4">Excellence Driven</h6>
                                            <span className="text-neutral-500 text-sm">
                                                Committed to student success
                                            </span>
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

export default PrincipalSection;
