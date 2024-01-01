import { FaSearch, FaBars, FaGlobe, FaTv, FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-search-container">
          <FaBars color="black" />
          <div className="input-container">
            <FaSearch color="black" />
            <input className="nav-input" type="text" placeholder="seacrh" />
          </div>
        </div>
        <div className="nav-profile-container">
          <div className="nav-profile">
            <FaGlobe color="black" />
            <p>Help</p>
          </div>
          <div className="nav-profile">
            <FaTv color="black" />
            <p>Tour</p>
          </div>
          <div className="nav-profile">
            <img
              src="https://th.bing.com/th/id/OIP.qGgHCeoG9sF_pZymKJ1NhQHaHa?rs=1&pid=ImgDetMain"
              alt="avatar"
              className="nav-avatar"
            />
            <FaChevronDown />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
