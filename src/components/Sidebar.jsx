import { FaChevronLeft } from "react-icons/fa";
import { sidebarButtons } from "./constants.jsx";

import logo from "../assets/logo-stackoverflow.png";
import { useState } from "react";

console.log(sidebarButtons);

const Sidebar = () => {
  const [activeBtn, setActiveBtn] = useState(sidebarButtons[0].tag);
  return (
    <aside className="sidebar">
      <div>
        <img src={logo} alt="logo" className="sidebar-logo" />
        <ul className="sidebar-btn-container">
          <div className="back-icon">
            <FaChevronLeft size={10} color="black" />
          </div>
          {sidebarButtons.map((btn) => {
            const { icon, tag } = btn;

            return (
              <li
                key={tag}
                className={
                  activeBtn === tag ? "sidebar-btn active-tab" : "sidebar-btn"
                }
                onClick={() => setActiveBtn(tag)}
              >
                <div className="icon">{icon}</div>
                <a
                  href="#"
                  referrerPolicy="no-referrer"
                  className={
                    activeBtn === tag
                      ? "sidebar-links active-link"
                      : "sidebar-links"
                  }
                >
                  {tag}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
