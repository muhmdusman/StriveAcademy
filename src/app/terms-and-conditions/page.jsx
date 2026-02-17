import Breadcrumb from "@/components/Breadcrumb";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import TermsConditionsInner from "@/components/TermsConditionsInner";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Terms and Conditions - Strive Star Academy",
  description:
    "Read the terms and conditions for enrolling at Strive Star Academy. Learn about our policies on enrollment, fees, attendance, and more.",
};

const page = () => {
  return (
    <>
      {/* Animation */}
      <Animation />

      {/* HeaderOne */}
      <HeaderOne />

      {/* Breadcrumb */}
      <Breadcrumb title={"Terms and Conditions"} />

      {/* TermsConditionsInner */}
      <TermsConditionsInner />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default page;
