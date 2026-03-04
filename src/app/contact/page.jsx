import Breadcrumb from "@/components/Breadcrumb";
import ContactInner from "@/components/ContactInner";
import FooterOne from "@/components/FooterOne";
import HeaderOne from "@/components/HeaderOne";
import Animation from "@/helper/Animation";

export const metadata = {
  title: "Contact Us - Strive Stars Academy",
  description:
    "Get in touch with Strive Stars Academy. Contact us for enrollment inquiries, program information, or any questions about our tutoring services.",
};

const page = () => {
  return (
    <>
      <Animation />
      <HeaderOne />
      <Breadcrumb title={"Contact Us"} />
      <ContactInner />
      <FooterOne />
    </>
  );
};

export default page;
