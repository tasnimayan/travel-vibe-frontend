import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <ul className="footer-list">
          <li className="list-item">Countries</li>
          <li className="list-item">Regions</li>
          <li className="list-item">Cities</li>
          <li className="list-item">Districts</li>
          <li className="list-item">Airports</li>
          <li className="list-item">Hotels</li>
        </ul>
        <ul className="footer-list">
          <li className="list-item">Homes </li>
          <li className="list-item">Apartments </li>
          <li className="list-item">Resorts </li>
          <li className="list-item">Villas</li>
          <li className="list-item">Hostels</li>
          <li className="list-item">Guest houses</li>
        </ul>
        <ul className="footer-list">
          <li className="list-item">Unique places to stay </li>
          <li className="list-item">Reviews</li>
          <li className="list-item">Unpacked: Travel articles </li>
          <li className="list-item">Travel communities </li>
          <li className="list-item">Seasonal and holiday deals </li>
        </ul>
        <ul className="footer-list">
          <li className="list-item">Car rental </li>
          <li className="list-item">Flight Finder</li>
          <li className="list-item">Restaurant reservations </li>
          <li className="list-item">Travel Agents </li>
        </ul>
        <ul className="footer-list">
          <li className="list-item">Curtomer Service</li>
          <li className="list-item">Partner Help</li>
          <li className="list-item">Careers</li>
          <li className="list-item">Sustainability</li>
          <li className="list-item">Press center</li>
          <li className="list-item">Safety Resource Center</li>
          <li className="list-item">Investor relations</li>
          <li className="list-item">Terms & conditions</li>
        </ul>
      </div>
      <p className="copyright">Copyright © {new Date().getFullYear()} TasnimAyan.</p>
    </div>
  );
};

export default Footer;
