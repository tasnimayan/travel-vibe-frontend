import { useState } from "react";

const CreateReview = () => {

  const [review, setReview] = useState({name:'', rating:1,review:'', image:[]})

  let handleChange = (name, value) => {
      setReview({...review, [name] : value})
  }

      // let handleSubmit = async () => {
    //     if(!contact.name || !review.rating){
    //         return toast.error("Fields can't be empty")
    //     }
    //     // Set function for review API
    //     // let res = await SendReview(review)
    //     let res = false 
    //     console.log(contact)
    //     if(res){
    //         toast.success("Your review has been Submitted")
    //     }
    //     else{
    //         toast.error("Failed to submit!")
    //     }
    // }
    
  return (
    <div className=" rounded-xl py-6 bg-gradient-to-br from-[#f7fafd] to-[#fbf2fc] max-w-xl mx-auto">
    <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl tracking-tight text-gray-900">Leave a review</h2>
    </div>

    <div className="mx-auto mt-6 max-w-lg">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        
        <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Your Name</label>
            <div className="mt-2.5">
            <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>handleChange('name',e.target.value)} />
            </div>
        </div>


        <div className="sm:col-span-2">
            <label htmlFor="rating" className="block text-sm font-semibold leading-6 text-gray-900">Rating 
                <span className="ms-3 fs-lg float-right">{review.rating}</span>
            </label>
            <div className="mt-2.5">
            <input type="range" min={1} max={5} step={.5} id="rating" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 focus:outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6" onChange={(e)=>handleChange('rating',e.target.value)}/>

            </div>
        </div>
        
        <div className="sm:col-span-2">
            <label htmlFor="review" className="block text-sm font-semibold leading-6 text-gray-900">Review</label>
            <div className="mt-2.5">
            <textarea name="review" id="review" rows="4" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" onChange={(e)=>handleChange('review',e.target.value)}></textarea>
            </div>
        </div>


        <div className="sm:col-span-2">
            <label htmlFor="image" className="block text-sm font-semibold leading-6 text-gray-900">Image</label>
            <div className="mt-2.5">
            <input type="file" name="image" id="image" multiple accept="image/*" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6" onChange={(e)=>handleChange('image',e.target.files)} />
            </div>
        </div>

        </div>
        <div className="mt-10">
        <button type="submit" className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
        </div>
    </div>

</div>
  );
};

export default CreateReview;