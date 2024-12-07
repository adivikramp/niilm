// #a60101 - red
// #165d23 - green

import AcademicSection from "../components/academic/AcademicSection";
import AdmissionSection from "../components/admission/AdmissionSection";
import CampusSection from "../components/campus/CampusSection";
import CollabPartnerSection from "../components/collab-partner/CollabPartnerSection";
import InternationalSection from "../components/international/InternationalSection";
import SocialSection from "../components/social/SocialSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <main className="w-full h-auto">
      <AcademicSection />
      <InternationalSection />
      <CampusSection />
      <CollabPartnerSection />
      <SocialSection />
      <AdmissionSection />
      <Footer />
    </main>
  );
};

export default HomePage;
