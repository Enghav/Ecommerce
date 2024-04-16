import Navbar from "../component/Header/HeaderTop";
import Headerbutton from "../component/Header/HeaderButton"
import SignPW from "./signPW";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Headerbutton/>
      <SignPW/>
      {/* Add other components or content here */}
    </div>
  );
};

export default Home;
