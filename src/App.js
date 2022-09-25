import React from "react";
import { Image } from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="menu">
          <div className="logo">
            <img src={require("./assets/logo.png")} height="80" width="180" />
          </div>
          <ul>
            <li>
              <a href="/Home">Home</a>
            </li>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/solutions">Solutions</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/transact">Transact</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
          </ul>
        </div>
        <div className="title-container">
          <div className="text-body">
            <div className="card-title">
              ENABLING CROSS-BORDER TRANSACTIONS AND PAYMENTS
            </div>
            <div className="card-info">
              Make the most secure and convenient
              <br /> payments to and from mobile money platforms and bank
              accounts.
            </div>
            <div className="download-btn">
              <button className="google">Download from GooglePlay</button>
              <button className="apple">Download from AppStore</button>
            </div>
          </div>
          <div className="images">
            <Image src={require("./assets/SendMoney.png")} className="img1" />
            <Image src={require("./assets/Success.png")} className="img2" />
          </div>
        </div>
        <div id="about">
          <div className="about-container">
            <div className="about-title">About Us</div>
            <div className="text-about">
              SendMoni is a Financial services company which deals with
              borderless transactions across africa and Asian countries like
              Dubai and others. We enable corperates, merchants and individuals
              to easily send payments and remittances across borders.
            </div>
          </div>
        </div>
        <div id="solutions">
          <div className="solutions-container">
            <div className="solutions-title">Our Solutions </div>
            <div className="text-solution">
              <p>🔴 Personal (peer to peer) Payments wallet to wallet</p>
              <p>🔴 Entreprise (B2B) Payments</p>
              <p>🔴 Payments to local mobile money</p>
              <p>🔴 Savings and loans</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
