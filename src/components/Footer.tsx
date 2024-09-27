import logo from "../assets/logo-white.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/finado-twitter.png";

import "../css/footer.css";

export default () => {
  return (
    <>
      <footer className="container footer">
        <img src={logo} alt="Logo" width="176" height="33" />
        <hr />
        <div className="footer-content-wrapper">
          <div className="footer-content">
            <ul>
              <li>
                <a href="">Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-content">
            <ul>
              <li>
                <a href="#">
                  <img src={facebook} alt="facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="twitter" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
