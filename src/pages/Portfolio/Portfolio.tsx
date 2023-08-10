import { useState } from "react";
import "../../SCSS/Portfolio.scss";

import img1 from "../../assets/images/1.jpg";
import img2 from "../../assets/images/2.jpg";
import img3 from "../../assets/images/3.jpg";
import img4 from "../../assets/images/4.jpg";
import img5 from "../../assets/images/5.jpg";
import img6 from "../../assets/images/6.jpg";
import Clients from "../../components/Clients/Clients";
import Plans from "../../components/Plans/Plans";

const Portfolio = () => {
  const [current, setCurrent] = useState("all");
  return (
    <>
      <div className="portfolio">
        <section className="container">
          <div className="portfolio-head">
            <div className="infos">
              <p className="subsubtitel">. PORTFOLIO .</p>
              <p className="titel">Awesome Portfolio</p>
            </div>
            <button>
              See More{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                strokeWidth="30"
                fill="#fff"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
          </div>
          <div className="fields">
            <button
              className={current === "all" ? "active" : ""}
              value="all"
              onClick={() => setCurrent("all")}
            >
              <span>.</span> All
            </button>
            <button
              className={current === "app" ? "active" : ""}
              value="app"
              onClick={() => setCurrent("app")}
            >
              <span>.</span> Mobile App
            </button>
            <button
              className={current === "cloud" ? "active" : ""}
              value="cloud"
              onClick={() => setCurrent("cloud")}
            >
              <span>.</span> Cloud
            </button>
            <button
              className={current === "data" ? "active" : ""}
              value="data"
              onClick={() => setCurrent("data")}
            >
              <span>.</span> Data Analysis
            </button>
            <button
              className={current === "hosting" ? "active" : ""}
              value="hosting"
              onClick={() => setCurrent("hosting")}
            >
              <span>.</span> Hosting
            </button>
          </div>
          <div className="feilds-list">
            {(current == "all" || current == "app") && (
              <div className="imgC">
                <img className="img" src={img1} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    <p>Mobile Apps</p>
                  </div>
                </div>
              </div>
            )}
            {(current == "all" || current == "cloud") && (
              <div className="imgC">
                <img className="img" src={img2} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    <p>Cloud</p>
                  </div>
                </div>
              </div>
            )}
            {(current == "all" || current == "data") && (
              <div className="imgC">
                <img className="img" src={img3} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    <p>Data Analysis</p>
                  </div>
                </div>
              </div>
            )}
            {(current == "all" || current == "app") && (
              <div className="imgC">
                <img className="img" src={img4} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    {" "}
                    <p>Mobile Apps</p>
                  </div>
                </div>
              </div>
            )}
            {(current == "all" || current == "hosting") && (
              <div className="imgC">
                <img className="img" src={img5} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    <p>Hosting</p>
                  </div>
                </div>
              </div>
            )}
            {(current == "all" || current == "app") && (
              <div className="imgC">
                <img className="img" src={img6} alt="" />
                <div className="ft">
                  <div className="arrow">&rarr;</div>
                  <div className="tt">
                    <p>Mobile Apps</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <Clients />
        <Plans />
      </div>
    </>
  );
};

export default Portfolio;
