import React from "react";
import daveImg from "../img/customers/dave.jpg";
import benImg from "../img/customers/ben.jpg";
import steveImg from "../img/customers/steve.jpg";
import hannahImg from "../img/customers/hannah.jpg";
import gallery1Img from "../img/gallery/gallery-1.jpg";
import gallery2Img from "../img/gallery/gallery-2.jpg";
import gallery3Img from "../img/gallery/gallery-3.jpg";
import gallery4Img from "../img/gallery/gallery-4.jpg";
import gallery5Img from "../img/gallery/gallery-5.jpg";
import gallery6Img from "../img/gallery/gallery-6.jpg";
import gallery7Img from "../img/gallery/gallery-7.jpg";
import gallery8Img from "../img/gallery/gallery-8.jpg";
import gallery9Img from "../img/gallery/gallery-9.jpg";
import gallery10Img from "../img/gallery/gallery-10.jpg";
import gallery11Img from "../img/gallery/gallery-11.jpg";
import gallery12Img from "../img/gallery/gallery-12.jpg";

export default function SectionTestimonial() {
  return (
    <div>
      <section className="section-testimonials">
        <div className="testimonials-container">
          <span className="subheading">Testimonials</span>
          <h2 className="heading-secondary">
            Once you try it, you can't go back
          </h2>

          <div className="testimonials">
            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="beautifull of customer Dave Bryson"
                src={daveImg}
              />
              <blockquote className="testimonial-text">
                Inexpensive, healthy and great-tasting meals, without even
                having to order manually! It feels truly magical.
              </blockquote>
              <p className="testimonial-name">&mdash; Dave Bryson</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="beautifull of customer Ben Hadley"
                src={benImg}
              />
              <blockquote className="testimonial-text">
                The AI algorithm is crazy good, it chooses the right meals for
                me every time. It's amazing not to worry about food anymore!
              </blockquote>
              <p className="testimonial-name">&mdash; Ben Hadley</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="beautifull of customer Steve Miller"
                src={steveImg}
              />
              <blockquote className="testimonial-text">
                Nutrafusion is a life saver! I just started a company, so
                there's no time for cooking. I couldn't live without my daily
                meals now!
              </blockquote>
              <p className="testimonial-name">&mdash; Steve Miller</p>
            </figure>

            <figure className="testimonial">
              <img
                className="testimonial-img"
                alt="beautifull of customer Hannah Smith"
                src={hannahImg}
              />
              <blockquote className="testimonial-text">
                I got Nutrafusion for the whole family, and it frees up so much
                time! Plus, everything is organic and vegan and without plastic.
              </blockquote>
              <p className="testimonial-name">&mdash; Hannah Smith</p>
            </figure>
          </div>
        </div>

        <div class="gallery">
          <figure class="gallery-item">
            <img src={gallery1Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery2Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery3Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery4Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery5Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery6Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery7Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery8Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery9Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery10Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery11Img} alt="beautifull of beautifully arranged food" />
          </figure>
          <figure class="gallery-item">
            <img src={gallery12Img} alt="beautifull of beautifully arranged food" />
          </figure>
        </div>
      </section>
    </div>
  );
}
