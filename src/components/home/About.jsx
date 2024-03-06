import { TbTargetArrow, TbUserStar  } from "react-icons/tb";

const About = () => {
  return (
    <div className="container-pad">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left column */}
        <div className="pr-8">
          <span className="about-us">About Us</span>
          <h2 className="text-3xl font-semibold text-black">
            Lets know About Our <br/> Journey For Travel Vibe
          </h2>
          
          <div className="my-4 space-x-8 font-semibold">
            <span>
              <TbTargetArrow className="inline-block mr-2 text-3xl -mt-1"/>
              Mission & Vision
            </span>
            <span>
              <TbUserStar className="inline-block mr-2 text-3xl -mt-1"/>
              Focus On Customer
            </span>
          </div>

          <p className="text-sm leading-loose  tracking-wider mb-6">
          Etiam ac tortor id purus commodo vulputate. Vestibulum porttitor erat felis and sed vehicula tortor malesuada gravida. Mauris volutpat enim quis pulv gont congue. Suspendisse ullamcorper, enim vitae tristique blandit, eratot augue torel tempo libero, non porta lectus tortor et elit. Quisque finibusot enim et eratourgt gravida, eu elementum turpis lacinia. Integer female go tellus ligula, attendora and condimentum.
          </p>

          <div>
            <button className="btn">More About</button>
          </div>

        </div>

        {/* Right Column */}
        <div className="hidden md:grid grid-cols-2 pl-8 gap-4 gap-y-4">
          <div className="space-y-4">
            <img src="https://images.unsplash.com/photo-1502003148287-a82ef80a6abc?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            className="h-48 w-full object-cover rounded-lg"/>
            <img src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            className="h-60 w-full object-cover rounded-lg"/>
          </div>
          <div className="space-y-4 mt-6">
            <img src="https://images.unsplash.com/photo-1682685797703-2bb22dbb885b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            className="h-32 w-full object-cover rounded-lg"/>
            <img src="https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80&w=1411&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
            className="h-64 w-full object-cover rounded-lg"/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;