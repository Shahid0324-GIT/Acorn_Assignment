import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <ul className="footer-links">
          <li className="footer-link">about us</li>
          <li className="footer-link">tour</li>
          <li className="footer-link">help</li>
          <li className="footer-link">blog</li>
          <li className="footer-link">chat</li>
          <li className="footer-link">data</li>
          <li className="footer-link">legal</li>
          <li className="footer-link">privacy policy</li>
          <li className="footer-link">work here</li>
          <li className="footer-link">contact us</li>
          <li className="footer-link">mobile</li>
        </ul>
        <ul className="links">
          <li className="footer-link">
            <FaFacebook />
          </li>
          <li className="footer-link">
            <FaTwitter />
          </li>
          <li className="footer-link">
            <FaLinkedin />
          </li>
        </ul>
      </div>
      <div className="bottom-footer">
        <div className="footer-technology">
          <h5>Technology</h5>
          <div className="technology-grid">
            <div className="col-1">
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Web Applications</p>
              <p className="footer-para">LaTex</p>
              <p className="footer-para">App Development</p>
              <p className="footer-para">Mobile</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Super USer</p>
              <p className="footer-para">Quantum Computing</p>
              <p className="footer-para">LaTex</p>
              <p className="footer-para">Web Applications</p>
            </div>
            <div className="col-2">
              <p className="footer-para">LaTex</p>
              <p className="footer-para">Data Analytics</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Web Applications</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Tensor Flow</p>
              <p className="footer-para">50+ more</p>
            </div>
          </div>
        </div>
        <div className="footer-technology">
          <h5>Life-Arts</h5>
          <div className="technology-grid">
            <div className="col-1">
              <p className="footer-para">Photography</p>
              <p className="footer-para">Science Fiction & Fantasy</p>
              <p className="footer-para">Graphics Design</p>
              <p className="footer-para">Movies & TV</p>
              <p className="footer-para">Home Development</p>
              <p className="footer-para">Blockbuster</p>
              <p className="footer-para">Anime </p>
              <p className="footer-para">Manga</p>
              <p className="footer-para">Comics</p>
              <p className="footer-para">50+ more</p>
            </div>
          </div>
        </div>
        <div className="footer-technology">
          <h5>Technology</h5>
          <div className="technology-grid">
            <div className="col-1">
              <p className="footer-para">LaTex</p>
              <p className="footer-para">Data Analytics</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Web Applications</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Tensor Flow</p>
              <p className="footer-para">50+ more</p>
            </div>
          </div>
        </div>
        <div className="footer-technology">
          <h5>Technology</h5>
          <div className="technology-grid">
            <div className="col-1">
              <p className="footer-para">Photography</p>
              <p className="footer-para">Science Fiction & Fantasy</p>
              <p className="footer-para">Graphics Design</p>
              <p className="footer-para">Movies & TV</p>
              <p className="footer-para">Home Development</p>
              <p className="footer-para">Blockbuster</p>
              <p className="footer-para">Anime </p>
              <p className="footer-para">Manga</p>
              <p className="footer-para">Comics</p>
              <p className="footer-para">50+ more</p>
            </div>
          </div>
        </div>
        <div className="footer-technology">
          <h5>Technology</h5>
          <div className="technology-grid">
            <div className="col-1">
              <p className="footer-para">LaTex</p>
              <p className="footer-para">Data Analytics</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Web Applications</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Game Development</p>
              <p className="footer-para">Stack OverFlow</p>
              <p className="footer-para">Tensor Flow</p>
            </div>
          </div>
        </div>
      </div>
      <p style={{ marginTop: "1rem" }}>Site design / logo © Stack Exchange</p>
    </footer>
  );
};

export default Footer;
