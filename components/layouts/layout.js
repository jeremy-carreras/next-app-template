import Header from "./header";
import Nav from "./nav";
import Footer from "./footer";

const Layout = (props) => {
  return (
    <div className="Layout">
      <Header />
      <Nav title={props.titleNav} userType={props.userType} />
      <div
        style={{
          backgroundImage: props.urlBackground,
          backgroundSize: "cover",
        }}
        className="Content py-5"
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
