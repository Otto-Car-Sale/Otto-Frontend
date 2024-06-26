import React from "react";
import "../styles/category-section.css";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import car from "../assets/categories/car.svg";
import van from "../assets/categories/van.svg";
import cab from "../assets/categories/cab.svg";
import truck from "../assets/categories/truck.svg";
import moterbike from "../assets/categories/bikes.svg";

const Categories = () => {
  return (
    <Helmet title="Cars">
      <CommonSection title="Categories" />
      <div className="justify-center flex-col row-span-2">
        <div className="cate-main">
          <h2>Main Categories in our sale</h2>
        </div>
        <div className="main-section">
          <a href="/cars">
            <div className="cate">
              <img className="px-3 -mt-2" src={car} alt="car" />
              <div className="cate-sub">
                <h4>Cars</h4>
              </div>
            </div>
          </a>
          <a href="/vans">
            <div className="cate">
              <img className="px-3 -mt-2" src={van} alt="car" />
              <div className="cate-sub">
                <h4>Vans</h4>
              </div>
            </div>
          </a>

          <a href="/cabs">
            <div className="cate">
              <img className="px-3 -mt-2" src={cab} alt="car" />
              <div className="cate-sub">
                <h4>Cabs</h4>
              </div>
            </div>
          </a>

          <a href="/trucks">
            <div className="cate">
              <img className="px-3 -mt-2" src={truck} alt="car" />
              <div className="cate-sub">
                <h4>Trucks</h4>
              </div>
            </div>
          </a>

          <a href="/bikes">
            <div className="cate">
              <img className="px-3 -mt-2" src={moterbike} alt="car" />
              <div className="cate-sub">
                <h4>Bikes</h4>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Helmet>
  );
};

export default Categories;
