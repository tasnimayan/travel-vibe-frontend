
import { useDispatch, useSelector } from 'react-redux';
import SectionHeading from './SectionHeading';
import SliderCard from './SliderCard';
import { useEffect } from 'react';
import { fetchDiscountedTours } from '../../redux/state/tour/tourSlice';

const DiscountedTours = () => {
  const dispatch = useDispatch()
  const {discountedTours, loading} = useSelector(state => state.tour)

  useEffect(()=>{
    dispatch(fetchDiscountedTours())
  },[dispatch])

  return (
    <div className="container-pad">
      <SectionHeading
        title = "Get Special Discount"
        align = "center"
        />
      <div className="flex gap-8 p-8">
        {
          discountedTours.map((item, idx)=><SliderCard tour={item} key={idx}/>)
        }
      </div>
    </div>
  );
};

export default DiscountedTours;