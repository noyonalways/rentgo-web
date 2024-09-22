import Banner from "./banner";
import CompanyHistory from "./company-history";
import Contact from "./contact";
import OurFleet from "./our-fleet";
import OurTeam from "./our-team";
import ValueCommitment from "./values-commitment";

interface IProps {}

const AboutUs: React.FC<IProps> = () => {
  return (
    <>
      <Banner />
      <CompanyHistory />
      <OurTeam />
      <OurFleet />
      <ValueCommitment />
      <Contact />
    </>
  );
};

export default AboutUs;
