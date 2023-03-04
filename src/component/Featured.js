import React from 'react'

import techcrunchLogo from '../img/logos/techcrunch.png'
import businessInsiderLogo from '../img/logos/business-insider.png'
import newYorkTimesLogo from '../img/logos/the-new-york-times.png'
import forbesLogo from '../img/logos/forbes.png'
import usaTodayLogo from '../img/logos/usa-today.png'

export default function Featured() {
  return (
    <div>
        <section className="section-featured">
        <div className="container">
          <h2 className="heading-featured-in">As featured in</h2>
          <div className="logos">
            <img src={techcrunchLogo} alt="Techcrunch logo" />
            <img
              src={businessInsiderLogo}
              alt="Business Insider logo"
            />
            <img
              src={newYorkTimesLogo}
              alt="The New York Times logo"
            />
            <img src={forbesLogo} alt="Forbes logo" />
            <img src={usaTodayLogo} alt="USA Today logo" />
          </div>
        </div>
      </section>
    </div>
  )
}
