import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="main">
        <div>
          <div id = "top-info">
            <div id ="top-image">
              <img
              id="logo-image"
              src="https://vignette.wikia.nocookie.net/naruto/images/7/71/Minato_Namikaze.png/revision/latest?cb=20160125175116"
              alt="logo"
              />
            </div>
            <div id="name">
              <h1>Alshyn Maratov</h1>
              <h4>AlmaU Student | DotaBoost</h4>
              <hr
              style={{
                width: "100%",
                marginBottom: 5,
                borderColor: "black"
              }} />
              <p>
              Information Systems Bachelor<br />UNECE Ambassador
              </p>
            </div>
          </div>
        </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>
                <img
                src="http://image.flaticon.com/icons/png/512/260/260354.png"
                alt="mail icon"
                className="img-icon"
                />{" "}
                <a
                href="mailto:example@example.com"
                className="contact-details"
                >
                alshyn96@gmail.com
                </a>
              </th>
              <th>
                <img
                src="https://us.123rf.com/450wm/piterk/piterk1605/piterk160500071/56521030-smartphone-cell-sign-simple-icon-on-background.jpg?ver=6"
                alt="mail icon"
                className="img-icon"
                />{" "}
                <a href="tel:555-555-5555" className="contact-details">
                8-701-111-30-08
                </a>
              </th>
            </tr>
            <tr>
              <th>
                <img
                src="http://s1.iconbird.com/ico/2013/8/429/w256h2561377938389185040mappinstreamline2.png"
                alt="mail icon"
                className="img-icon"
                />{" "}
                Almaty, Kazakhstan
                </th>
              <th>
                <img
                src="http://pngimage.net/wp-content/uploads/2018/06/%D0%B8%D0%BA%D0%BE%D0%BD%D0%BA%D0%B0-%D0%B4%D0%BB%D1%8F-%D1%81%D0%B0%D0%B9%D1%82%D0%B0-png-.png"
                alt="mail icon"
                className="img-icon"
                />{" "}
                naruto-fan.net
              </th>
            </tr>
            <tr>
              <th>
                <img
                src="https://st3.depositphotos.com/1144386/12540/v/950/depositphotos_125404764-stock-illustration-modern-black-circle-linkedin-icon.jpg"
                alt="mail icon"
                className="img-icon"
                />{" "}
                alshyn_cz
              </th>
              <th>
                <img
                src="https://image.flaticon.com/icons/svg/25/25231.svg"
                alt="mail icon"
                className="img-icon"
                />{" "}
                <a
                id="profile-link"
                href="https://github.com/Minato007/minato007"
                target="_blank"
                className="contact-details"
                >
                {" "}
                Minato007
                </a>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div style={{ height: "7em", overflow: "hidden" }}>
        <h2 style={{ color: "#CA6F1E" }}>Expertise</h2>
        <hr
        style={{
          width: "100%",
          marginBottom: 5,
          borderColor: "#CA6F1E"
        }}
        />
        <button>Artifical Intelligence</button>
        <button>Machine Learning</button>
        <button>Javascript</button>
        <button>Python 3</button>
        <button>HTML</button>
        <button>CSS</button>
        <button>iOS development</button>
        <button>NumPy</button>
        <button>matplotlib</button>
        <button>Pandas</button>
        <button>Java SE</button>
        <button>neuron nets</button>
        <button>Digital Marketing</button>
        <button>Databases</button>
        <button>IT service</button>
      </div>
      <div>
        <h2 style={{ color: "#CA6F1E" }}>Professional Experience</h2>
        <hr
        style={{
          width: "100%",
          marginBottom: 5,
          borderColor: "#CA6F1E"
        }}
        />
        <p className="position">
        Инженер-системотехник<br />
        <span className="job">IT Support</span>
        <br />
        <span className="details">
        04/2016 - 08/2016<br />Навыки:
        </span>
        </p>
        <ul>
          <li>
          Установка, настройка ПО, администрирование, настройка и
          организация работы ЛВС.
          </li>
          <li>
          Администрирование различных СУБД (Oracle, MSSQL Server, Firebird, RedSoft, Sybase).
          </li>
          <li>
          Администрирование серверных операционных систем семейства
          Windows Server (2000, 2003, 2008R2); операционных систем
          семейства Windows на основе NT (2000, XP, Vista, 7, 8);
          офисных пакетов MS Office (XP, 2003, 2010, 2013), OpenOffice,
          LibreOffice.
          </li>
          <li>
          Организация резервного копирования и архивирования информации,
          обеспечение информационной безопасности предприятия.
          </li>
          <li>
          Настройка сетевой антивирусной защиты, межсетевых экранов.
          </li>
          <li>
          Навыки самостоятельной сборки, настройки, ремонта и
          модернизации ПК.
          </li>
          <li>Хорошее знание "железа", офисной оргтехники.</li>
          <li>
          Сопровождение бухгалтерского и финансового прикладного ПО.
          </li>
        </ul>
      </div>
    </div>
      );
    }
  }

  export default App;
