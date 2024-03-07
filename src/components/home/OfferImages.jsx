
import SectionHeading from '../tour/SectionHeading';

const OfferImages = () => {
  return (
    <div className='container-pad'>
      <SectionHeading
        title = " Phenomenal Deals Offered"
        align = "center"
        />


        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>

          <div className='row-span-2 col-span-3'>
            <img src="https://img.freepik.com/free-vector/flat-travel-sale-background_23-2149059747.jpg?w=900&t=st=1709752765~exp=1709753365~hmac=845f7933da5b179086859d06293655698d3ca02fa536e94b0921d3e82adb8df1" alt="" className='h-full object-cover rounded-md'/>
          </div>

          <div className='col-span-5'>
            <img src="https://img.freepik.com/free-vector/flat-travel-sale-background_23-2149059747.jpg?w=900&t=st=1709752765~exp=1709753365~hmac=845f7933da5b179086859d06293655698d3ca02fa536e94b0921d3e82adb8df1" alt="" className='h-48 w-full object-cover rounded-md'/>
          </div>

          <div className='row-span-2 col-span-4'>
            <img src="https://img.freepik.com/free-vector/flat-travel-sale-background_23-2149059747.jpg?w=900&t=st=1709752765~exp=1709753365~hmac=845f7933da5b179086859d06293655698d3ca02fa536e94b0921d3e82adb8df1" alt="" className='h-full object-cover rounded-md'/>
          </div>

          <div className='col-span-5'>
            <img src="https://img.freepik.com/free-vector/flat-travel-sale-background_23-2149059747.jpg?w=900&t=st=1709752765~exp=1709753365~hmac=845f7933da5b179086859d06293655698d3ca02fa536e94b0921d3e82adb8df1" alt="" className='h-48 w-full object-cover rounded-md'/>
          </div>
        
        </div>      
    </div>
  );
};

export default OfferImages;