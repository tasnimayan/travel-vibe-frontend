
import { useSelector } from 'react-redux';
import CreateReview from './CreateReview';
import { useDispatch } from 'react-redux';
import { fetchReviews } from './../../redux/state/tour/reviewSlice';
import { useEffect } from 'react';

const Reviews = ({tourId}) => {

  const dispatch = useDispatch()
  const {reviews,loading}=useSelector(state => state.review);
    
  useEffect(()=>{
    dispatch(fetchReviews(tourId))
  },[dispatch])
    
  return (
    <div className="px-8">
      <div className="flex text-2xl items-center gap-8">
          <p>Reviews ({reviews.length})</p>
          <div className="w-96 border-b-2"></div>
      </div>
      <ul className="m-4 ">
        {
          reviews?.map((review,idx)=>{
            return (
              <li key={idx} className="mb-8">
                <div className="flex flex-row gap-4 ">
                  <div className="w-10 h-10 ">
                    <img src={review.user.photo} alt="" className=" h-full w-full object-cover rounded-full border" />
                  </div>
                  <div className="border-b text-sm w-full">
                    <h6 className="000000000000000000000text-base font-semibold mb-2">{review.user.name}
                    <span className="text-sm ms-3 text-gray-500 font-thin border p-1 rounded-md">{review.rating}</span>
                    </h6>
                    <span className="text-sm text-gray-500 font-thin">3 days ago</span>

                    <p className="text-gray-500 leading-relaxed tracking-wide mb-4">{review.review}</p>
                  </div>
                </div>
              </li>)
          })
        }
      </ul>
      
      <CreateReview />

    </div>
  );
};

export default Reviews;