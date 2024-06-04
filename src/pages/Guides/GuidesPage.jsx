
import SectionHeading from "../../components/tour/SectionHeading";
import AllGuides from "./AllGuides";
import GuideSearch from "./GuideSearch";


const GuidesPage = () => {

  return (
    <>
        {/* Search Items */}
      <GuideSearch />

      <div className="p-12">
        <SectionHeading 
          title = "Travel Guides"
          align = "center"
          />
          {/* Guides profile card */}
        <AllGuides />
      </div>
      


    </>
  );
};

export default GuidesPage;