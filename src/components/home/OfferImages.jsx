
import { useEffect } from 'react';
import SectionHeading from '../tour/SectionHeading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOffers } from '../../redux/state/tour/utilitySlice';

const OfferImages = () => {
  const dispatch = useDispatch()

  const {offers, loading} = useSelector(state => state.utility)
  
  useEffect(()=>{
    dispatch(fetchOffers())
  },[dispatch])

  if(offers.length === 0){
    return null
  }
  return (
    <div className='container mx-auto container-pad'>
      <SectionHeading
        title = " Phenomenal Deals Offered"
        align = "center"
        />
        <div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
          {
            offers[0] && <div className='row-span-2 col-span-3'>
                <img src={offers[0].image} alt="" className='h-full object-contain rounded-md'/>
              </div>
          }
          {
            offers[1] && <div className='row-span-2 col-span-3'>
                <img src={offers[1].image} alt="" className='h-full object-contain rounded-md'/>
              </div>
          }
          {
            offers[2] && <div className='row-span-2 col-span-3'>
                <img src={offers[2].image} alt="" className='h-full object-contain rounded-md'/>
              </div>
          }
          
        
        </div>      
    </div>
  );
};

export default OfferImages;