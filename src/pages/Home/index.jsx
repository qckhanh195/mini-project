import "./Home.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <a href="https://github.com/qckhanh195/mini-project">
              <img
                src="https://img.shields.io/badge/GitHub-Mini--Project-black?style=for-the-badge&logo=github"
                alt="GitHub Badge"
              />
            </a>
            <span class="label-badge">FRONT END</span>
            <h1 className="display-hero">
              qckhanh195
              <span className="dot">.</span>
              github
              <span className="dot">.</span>
              io
            </h1>
            <p className="notion-quote">
              <code>Trang tổng hợp các mini-project mình đã thực hiện !! 
              <br />
              Đã điều chỉnh phù hợp :DDDD
              </code>
            </p>
          </div>
          <div className="hero-right">
            <div className="code-window">
              <div className="code-header">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
              <div className="code-content">
                <code>
                  <span className="keyword">console</span>.
                  <span className="method">log</span>(
                  <span className="string">"Hello World!"</span>);
                </code>
                <code>
                  <span className="keyword">const</span>{" "}
                  <span className="variable">status</span> ={" "}
                  <span className="string">"Building..."</span>;
                </code>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <div className="project-grid">
          <article className="card">
            <div className="card-content">
              <i className="fa-solid fa-gamepad card-icon-fa"></i>
              <h3 className="card-title">Quick Game</h3>
              <p className="card-description">
                Thử thách phản xạ với trò chơi tốc độ cao.
              </p>
              <a href="./project-1--quick_game/" className="card-link">
                Explore <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article className="card">
            <div className="card-content">
              <i className="fa-solid fa-calculator card-icon-fa"></i>
              <h3 className="card-title">Calculator</h3>
              <p className="card-description">
                Công cụ tính toán cơ bản với giao diện tối giản.
              </p>
              <a href="./project-2--calculator/" className="card-link">
                Explore <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article className="card">
            <div className="card-content">
              <i className="fa-solid fa-cloud-sun card-icon-fa"></i>
              <h3 className="card-title">Weather App</h3>
              <p className="card-description">
                Dự báo thời tiết thời gian thực qua OpenWeather API.
              </p>
              <a href="./project-3--weather_app/" className="card-link">
                Explore <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article className="card">
            <div className="card-content">
              <i className="fa-solid fa-list-check card-icon-fa"></i>
              <h3 className="card-title">To-Do List</h3>
              <p className="card-description">
                Quản lý công việc hàng ngày hiệu quả hơn.
              </p>
              <a href="./project-4--todo_list/" className="card-link">
                Explore <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </article>
        </div>
      </main>

      <div className="carousel-wrapper">
        <div className="carousel-track">
          <div className="carousel-item">
            <i className="fa-brands fa-html5"></i> HTML
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-css3-alt"></i> CSS
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-js"></i> JavaScript
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-react"></i> React
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-github"></i> GitHub
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-html5"></i> HTML
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-css3-alt"></i> CSS
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-js"></i> JavaScript
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-react"></i> React
          </div>
          <div className="carousel-item">
            <i className="fa-brands fa-github"></i> GitHub
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
