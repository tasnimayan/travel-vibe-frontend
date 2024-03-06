
import Nav from "./Nav";
import Footer from "./Footer";

function CommunityLayout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  );
}

export default CommunityLayout;