import React from "react";
import mealImg from "../img/hero.png";
import customer1Img from "../img/customers/customer-1.jpg";
import customer2Img from "../img/customers/customer-2.jpg";
import customer3Img from "../img/customers/customer-3.jpg";
import customer4Img from "../img/customers/customer-4.jpg";
import customer5Img from "../img/customers/customer-5.jpg";
import customer6Img from "../img/customers/customer-6.jpg";

export default function Hero() {
  return (
    <div>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="heading-primary">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="hero-description">
              The smart 365-days-per-year food subscription that will make you
              eat healthy again. Tailored to your personal tastes and
              nutritional needs.
            </p>
            <a href="#" className="btn btn--full margin-right-sm">
              Start eating well
            </a>
            <a href="#" className="btn btn--outline">
              Learn more &darr;
            </a>
            <div className="delivered-meals">
              <div className="delivered-imgs">
                <img src={customer1Img} alt="Customer photo" />
                <img src={customer2Img} alt="Customer photo" />
                <img src={customer3Img} alt="Customer photo" />
                <img src={customer4Img} alt="Customer photo" />
                <img src={customer5Img} alt="Customer photo" />
                <img src={customer6Img} alt="Customer photo" />
              </div>
              <p className="delivered-text">
                <span>250,000+</span> meals delivered last year!
              </p>
            </div>
          </div>
          <div className="hero-img-box">
            <img
              src={mealImg}
              className="hero-img"
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
