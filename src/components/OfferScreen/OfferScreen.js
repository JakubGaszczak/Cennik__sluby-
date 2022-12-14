import React from 'react'
import "./OfferScreen.scss"
import {ImCross} from "react-icons/im"
import {ImCheckmark} from "react-icons/im"

function OfferScreen(props) {
  return (
    <div ref={props.cennik} className='OfferScreen'>

        <div className='OfferScreen__title'>
            <h1>oferta ślubna</h1>
            <h2>2022</h2>
        </div>
        
        <div className='OfferScreen__table'>
            
            <div className='row__1'>
                <h5>Pakiet&nbsp;<span>filmowy</span></h5>
                <p>Dwóch operatorów na planie</p>
                <p>Minisesja plenerowa w dniu ślubu</p>
                <p>Perspektywa z lotu ptaka, użycie drona z śk. UAVO</p>
                <p>Teledysk z najlepszych momentów relacji ślubnej</p>
                <p>Długi film z całego wydarzenia ślubnego</p>
                <p>Drewniany pendrive z plikami + opakowanie</p>
                <p>Dyskretna technika filmowania Reccly</p>
                <h5>Ceny&nbsp;<span>brutto</span>&nbsp;pakietu:</h5>
            </div>

            <div className='row__2'>
                <h5>Pakiet&nbsp;<span>Ocean</span></h5>
                <p className='cell'><ImCross style={{color: "gray", fontSize: ".9rem"}} /></p>
                <p><ImCross style={{color: "gray", fontSize: ".9rem"}}/></p>
                <p><ImCheckmark /></p>
                <p className='video__time'>do&nbsp;<span>3 min</span></p>
                <p className='video__time'>do&nbsp;<span>30 min</span></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <h5><span>0000<br></br> PLN</span></h5>
            </div>

            <div className='row__3'>
                <h5 className='span__2'>Pakiet&nbsp;<span>Ziemia</span></h5>
                <p><ImCross style={{color: "gray", fontSize: ".9rem"}} /></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <p className='video__time'>do&nbsp;<span>3 min</span></p>
                <p className='video__time'>do&nbsp;<span>30 min</span></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <h5 className='span__2'><span className='crossed__zeros'>0000</span><span>0000<br></br> PLN</span></h5>
            </div>

            <div className='row__4'>
                <h5>Pakiet&nbsp;<span>Niebo</span></h5>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <p className='video__time'>do&nbsp;<span>3 min</span></p>
                <p className='video__time'>do&nbsp;<span>45 min</span></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <h5><span className='crossed__zeros'>0000</span><span>0000 PLN</span></h5>
            </div>

            <div className='row__5'>
                <h5>Pakiet&nbsp;<span>Kosmos</span></h5>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <p className='red__cel video__time'>do<span>6 min</span></p>
                <p className='red__cel video__time'>do<span>120 min</span></p>
                <p><ImCheckmark /></p>
                <p><ImCheckmark /></p>
                <h5><span className='red__cel'>0000<br></br> PLN</span></h5>
            </div>

        </div>

        <div className='OfferScreen__footer'>
            <p>Wkraczając na rynek serwujemy Państwu naprawdę konkurencyjne stawki, w stosunku do jakości, jaką bronią się nasze realizacje. Jeżeli jest to potrzebne, pomożemy Państwu w zorganizowaniu Waszej pamiątki, pytamy, w jaki sposób chcieliby Państwo, aby została ona uwieczniona, czy np. dłuższe nagranie całego wesela, czy skrót i pamiątka do opublikowania i wysłania znajomym. Jest naprawdę wiele form tego typu pamiątek, a więc o każdą, jeśli chcecie zapytamy i ewentualnie doradzimy, jaką byłoby warto w przypadku Państwa stworzyć 💑.</p>
            <h1>NIE ZNALEŹLIŚCIE IDEALNEJ OFERTY?</h1>
            <button>Spersonalizuj ofertę</button>
        </div>
    </div>
  )
}

export default OfferScreen