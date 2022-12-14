import React, { useRef } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import "./HomeScreen.scss"

/* Images */
import smallEarth from "../../assets/smallEarth.png"
import smallClouds from "../../assets/smallClouds.png"
import smallBlackhole from "../../assets/smallBlackhole.png"
import smallWater from "../../assets/smallWater.png"
import grayVector from "../../assets/grayVector.png"
import redCircle from "../../assets/redCircle.png"
import redVector from "../../assets/redVector.png"
import coupleDancing from "../../assets/coupleDancing.png"

function HomeScreen(props) {

  return (
    <div className='homeScreen'>

          <Nav
            home={props.home}
            aboutUs={props.aboutUs}
            cennik={props.cennik}
            scrollToSection={props.scrollToSection}
          />
          <MobileNav 
            home={props.home}
            aboutUs={props.aboutUs}
            cennik={props.cennik}
            scrollToSection={props.scrollToSection}
          />

        <main>
          <div className='homeScreen__text'>
            <h4>Film ze ślubu i wesela</h4>
            <h1>Stworzymy dla Was <br></br>wyjątkową pamiątkę!</h1>
            <p>Twoja pamiątka ślubna, jest bardzo ważnym punktem wspomnień, które potrafi cieszyć oko przez bardzo długie lata. Zdajemy sobie sprawę z powagi zlecenia i nie bagatelizujemy go. Do każdego klienta podchodzimy indywidualnie, a więc ze świeżym pomysłem i podejściem. Dbamy również o to, aby każdy klient był jak najbardziej zadowolony ze zleconego nam zadania.</p>
            <div className='homeScreen__text__buttons'>
              <button>Sprawdź ofertę</button>
              <button className='portfolio__button'>Portfolio</button>
            </div>
          </div>
        </main>

        <div className='absolute_elemnts'>
          <img className='smallWater' src={smallWater} alt="water" />
          <img className='smallEarth' src={smallEarth} alt="earth" />
          <img className='smallClouds' src={smallClouds} alt="clouds" />
          <img className='smallBlackhole' src={smallBlackhole} alt="blackhole" />
          <img className='grayVector' src={grayVector} alt="grayVector" />
          <img className='redVector' src={redVector} alt="redVector" />
          <img className='coupleDancing' src={coupleDancing} alt="coupleDancing" />
          <img className='redCircle' src={redCircle} alt="redCircle" />
        </div>
    </div>
  )
}

export default HomeScreen