import '../../assets/images'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const WeatherApp = () => {
  return (
    <>
      <Navbar/>
      <div className="weather-app">
        <div className="card">
          <div className="search">
            <input type="text" placeholder="nhập tên thành phố" spellcheck="false" />
            <button><img src="images/search.png" alt="" /></button>
          </div>
          <div className="error">
            <p>Tên thành phố không hợp lệ!</p>
          </div>
          <div className="weather">
            <img src="" className="weather-icon" />
            <h1 className="temp"></h1>
            <h2 className="city"></h2>
            <div className="details">
              <div className="col">
                <img src="images/humidity.png" alt="" />
                <div>
                  <p className="humidity"></p>
                  <p>Humidity</p>
                </div>
              </div>
              <div className="col">
                <img src="images/wind.png" alt="" />
                <div>
                  <p className="wind"></p>
                  <p>Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default WeatherApp;