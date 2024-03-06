import React from 'react';
import SectionHeading from '../tour/SectionHeading';

const OfferImages = () => {
  return (
    <div className='container-pad'>
      <SectionHeading
        title = " Phenomenal Deals Offered"
        align = "center"
        />


        <div className='grid grid-cols-1 md:grid-cols-3'>
          <div className='row-span-2'>
            <span className="p-12 bg-yellow-100"></span>
          </div>

          <div>
            <span className="p-12 bg-rose-50"></span>
            <span className="p-12 bg-green-100"></span>
          </div>

          <div className='row-span-2'>
            <span className="p-12 bg-yellow-100"></span>
          </div>
        
        </div>      
    </div>
  );
};

export default OfferImages;