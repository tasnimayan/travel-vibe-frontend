
import ProfileAside from '../../components/aside/ProfileAside';
import SocialPost from '../Users/SocialPost';
import CreatePostCard from './../../components/user/CreatePostCard';
import PopularTours from '../../components/aside/PopularTours';
import CommunityMenu from '../../components/aside/CommunityMenu';
import Following from './../../components/aside/Following';
import ScrollLoader from './../../components/utility/ScrollLoader';

const FeedPage = () => {
  return (
    <div className='relative'>
      <ScrollLoader />
      <div className='grid grid-cols-12 gap-x-8 mb-8 px-12'>
        {/* Left Column starts from here */}
        <div className="col-span-3 flex flex-col gap-4">
          <CommunityMenu />
          <ProfileAside />
        </div>
        
        {/* Middle columns starts from here */}
        <div className="col-span-6">

        {/* Create Post Section */}
          <CreatePostCard />

        {/* Community Posts Section*/}
          <div className="flex flex-col gap-6">
            {
              [2, 5, 3].map((item)=>{
                return <SocialPost key={item}/>
              })
            }
          </div>
        </div>
        
        {/* Third Column starts from here */}
        <div className="col-span-3 relative">

          {/* right sidebar content here */}
          <div className="w-full space-y-4">
            <PopularTours />
            <Following /> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default FeedPage;