import BootstrapInit from "@/helper/BootstrapInit";
import RouteScrollToTop from "@/helper/RouteScrollToTop";
import LoadPhosphorIcons from "@/helper/LoadPhosphorIcons";

import "./font.css";
import "./globals.scss";

export const metadata = {
  title: "Strive Star Academy - Knowledge is Power",
  description:
    "Strive Star Academy offers expert tutoring for Class 6-8, Class 9 & 10, Class 11 & 12, O/A Levels, and IELTS preparation. Empowering students to achieve academic excellence through personalized attention and proven teaching methodologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        <BootstrapInit />
        <LoadPhosphorIcons />

        <RouteScrollToTop />
        {children}
      </body>
    </html>
  );
}
