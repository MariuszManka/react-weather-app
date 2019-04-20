import React, { Component } from "react";
import "./css/App.css";
import Header from "./Header";
import Info from "./Info";
import Image from "./Image";
import Temperature from "./Temperature";
import Hamburger from "./Hamburger";

const API_key = "288f6eab4f8a85fc1c207e194d70f482";

class App extends Component {
  state = {
    date: "",
    city: "Warszawa",
    temp: "",
    sunrise: "",
    sunset: "",
    wind: "",
    pressure: "",
    weather: "",
    error: false,
    value: ""
  };

  //__________________INICJALIZOWANIE DANYCH (POCZĄTKOWE MIASTO - LUBLINIEC_______________________//

  componentDidMount() {
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${
      this.state.city
    }&APPID=${API_key}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }

        throw Error(response.statusText);
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleDateString();

        // const city = this.state.firstLoad ? "Lubliniec" : this.state.value;
        this.setState({
          date: time,
          temp: data.main.temp.toFixed(),
          wind: data.wind.speed.toFixed(),
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          pressure: data.main.pressure.toFixed(),
          weather: data.weather[0].description,
          value: ""
        });
      })
      .catch(error => {
        console.log(error);
        this.setState(prevState => ({
          error: true,
          city: "Lubliniec",
          value: ""
        }));
      });
  }

  //____________________PONOWNE WYSZUKIWANIE MIASTA TYM RAZEM PO VALUE______________________________//

  handleCityChange = e => {
    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.value
    }&APPID=${API_key}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response;
        }

        throw Error(response.statusText);
      })
      .then(response => response.json())
      .then(data => {
        const time = new Date().toLocaleDateString();
        this.setState(prevState => {
          return {
            city: prevState.value,
            date: time,
            temp: data.main.temp.toFixed(),
            wind: data.wind.speed.toFixed(),
            sunrise: data.sys.sunrise,
            sunset: data.sys.sunset,
            pressure: data.main.pressure.toFixed(),
            weather: data.weather[0].description,
            isMenuActive: !prevState.isMenuActive,
            value: ""
          };
        });
      })
      .catch(error => {
        this.setState(prevState => ({
          error: true,
          value: ""
        }));
      });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const actualTime = new Date().getTime() / 1000; //Pobieranie aktualnej daty jako liczby minisekund

    const { temp, isMenuActive, value, sunset, weather, error } = this.state; //Destrukturyzacja

    const dayBulid = (
      <div className="App day">
        <Hamburger
          text={value}
          change={this.handleInputChange}
          cityChange={this.handleCityChange}
          classN={"day"}
          err={error}
        />{" "}
        <Header info={this.state} class={"day"} /> <Image class={"day"} />{" "}
        <Temperature info={temp} weatherStatus={weather} class={"day"} />{" "}
        <Info info={this.state} class={"day"} />{" "}
      </div>
    );

    const nightBulid = (
      <div className="App night">
        <Hamburger
          click={this.handleMenuActive}
          isActive={isMenuActive}
          text={value}
          change={this.handleInputChange}
          cityChange={this.handleCityChange}
          classN={"night"}
          err={error}
        />{" "}
        <Header info={this.state} class={"night"} /> <Image class={"night"} />{" "}
        <Temperature info={temp} weatherStatus={weather} class={"night"} />{" "}
        <Info info={this.state} class={"night"} />{" "}
      </div>
    );
    if (actualTime <= sunset) {
      return <> {dayBulid} </>;
    } else {
      return <> {nightBulid} </>;
    }
  }
}

export default App;
