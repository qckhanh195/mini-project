import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-content">
          <a href="/" className="logo-wrapper">
            <div className="logo">
              <i className="fa-solid fa-terminal logo-icon"></i>
              <b>Qika__195</b>
            </div>
          </a>
          <div className="social-links">
            <a
              href="https://github.com/qckhanh195"
              target="_blank"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://www.facebook.com/qckhanh.195"
              target="_blank"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/qckhanh__195/"
              target="_blank"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;