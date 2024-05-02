import Navbar from "../component/Header/HeaderTop";
import Headerbutton from "../component/Header/HeaderButton"
import FooterButton from "../component/Footer/footerButton";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Headerbutton/>
      {/* Add other components or content here */}
      <div className="flex items-end">
        <FooterButton/>
      </div>
    </div>
  );
};

export default Home;
