import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Headerbutton = () => {
  return (
    <div className="bg-[#232F3E] text-white">
      <div className="">
        <ul className="flex items-center text-sm tracking-wide">
          <li className="headHover gap-1 flex items-center px-2 py-2">
            <MenuIcon />
            All
          </li>
          <Link to="#" className="hidden md:inline-flex headHover px-2 py-2 scale">Today's Deals</Link>
          <Link to="#" className="hidden md:inline-flex headHover px-2 py-2 scale">Customer Service</Link>
          <Link to="#" className="hidden md:inline-flex headHover px-2 py-2 scale">Gift Cards</Link>
          <Link to="#" className="hidden md:inline-flex headHover px-2 py-2 scale">Registry</Link>
          <Link to="#" className="hidden md:inline-flex headHover px-2 py-2 scale">Sell</Link>
        </ul>
      </div>
    </div>
  );
};

export default Headerbutton;
