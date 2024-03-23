
import CreateReview from './CreateReview';

const Reviews = () => {
    // const {ReviewList, ReviewListRequest}=ProductStore();

    
    // useEffect(()=>{
    //     (async ()=>{
    //         await ReviewListRequest(productId)
    //     })()
    // },[])
    
    return (
      <div className="">
        <div className="flex text-2xl items-center gap-8">
            <p>Reviews (3)</p>
            <div className="w-96 border-b-2"></div>
        </div>
        <ul className="m-4 ">
          {
            [1,3,4].map((item,idx)=>{
              return (
                <li key={idx} className="mb-8">
                  <div className="flex flex-row gap-4 ">
                    <div className="">
                      <img src="" alt="" className="w-10 h-10 rounded-full border" />
                    </div>
                    <div className="border-b text-sm">
                      <h6 className="000000000000000000000text-base font-semibold mb-2">Tasnim ch <span className="text-sm ms-3 text-gray-500 font-thin">3 days ago</span></h6>

                      <p className="text-gray-500 leading-relaxed tracking-wide mb-4">Review text goes here Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam vel illo architecto necessitatibus fugit pariatur odio maxime iusto, sunt quos minus nihil ad, placeat, nisi eum dolorem fugiat modi harum?</p>
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