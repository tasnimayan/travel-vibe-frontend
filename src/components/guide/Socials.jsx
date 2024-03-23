
import { FaFacebook, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Socials = ({links}) => {
  return (
    <div className='flex absolute bottom-3 bg-white py-2 px-4 rounded-full text-xl'>
      <a href={links.facebook} className='text-gray-500 hover:text-blue-500 hover:scale-105'><FaFacebook  className='mx-2'/></a>
      <a href={links.twitter} className='text-gray-500 hover:text-blue-500 hover:scale-105'><FaTwitter  className='mx-2'/></a>
      <a href={links.instagram} className='text-gray-500 hover:text-blue-500 hover:scale-105'><FaInstagram  className='mx-2'/></a>
    </div>
  );
};

export default Socials;