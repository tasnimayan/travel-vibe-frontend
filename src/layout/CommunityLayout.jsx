
import Nav from "./Nav";
import Footer from "./Footer";

function CommunityLayout(props) {
  return (
    <>
      <Nav />
      <div className="container mx-auto">
        {props.children}
      </div>
      <Footer />
    </>
  );
}

export default CommunityLayout;