import React, {useRef} from 'react'
import "./AboutUsScreen.scss"
import {MdArrowBackIos} from "react-icons/md"
import {MdArrowForwardIos} from "react-icons/md"

/* Images */
import certificate from "../../assets/certificate.png"
// import blueCertificate from "../../assets/blueCertificate.png"
// import ytAvatar from "../../assets/ytAvatar.png"

function AboutUsScreen(props) {
  return (
    <div ref={props.aboutUs} className='aboutUsScreen'>
        <div className='aboutUsScreen__top'>
            <h1>Jesteście tu nie z przypadku!</h1>
            <div className='aboutUsScreen__top__text'>
                <p>Jesteśmy dwójką młodych zapalonych ludzi, którzy codziennie
                szukają nowych wrażeń i wyzwań czysto kreatywnych. Mamy ogromnie kwalifikacje, doświadczenie i zaangażowane podejście do każdego ze zleceń, które udaje nam się realizować. Przede wszystkim jesteśmy pasjonatami tego co robimy. Stanowimy młody, zgrany zespół, który dorastał wraz z rozwojem świata filmowego, biorąc z niego to co tylko najlepsze. Każdy produkt traktujemy z należytym szacunkiem. Do każdego podchodzimy oryginalnie, nie bagatelizując go. Nasze podejście oznacza, że każda produkcja będzie miała coś czego nie miała poprzednia. Każdy klient jest dla nas na wagę złota, a więc w naszych rękach, każdy poczuje się wyjątkowo.</p>
                <div className='aboutUsScreen__top__opinions'>
                    <div className='certificates'>
                        <img src={certificate} alt="certificate" />
                        <img src={certificate} alt="certificate" />
                        <img src={certificate} alt="certificate" />
                    </div>
                    <button>Opinie naszych klientów</button>
                </div>
            </div>
        </div>
        <div className='aboutUsScreen__bottom'>
            <div className='aboutUsScreen__bottom__left'>
                <div class="ratio ratio-16x9">
                    <iframe className='youtube__Video' src="https://www.youtube.com/embed/Dudf-6rl3Ec" title="YouTube video" allowfullscreen></iframe>
                </div>
                <div className='buttons'>
                    <MdArrowBackIos className='arrow' />
                    <button>Zobacz więcej</button>
                    <MdArrowForwardIos className='arrow' />
                </div>
            </div>
            <div className='aboutUsScreen__bottom__right'>
                <h4>Wasze wymagania na pierwszym miejscu!</h4>
                <p>Zanim przejdziemy do szczegółów, zapraszam serdecznie do zapoznania się z naszym portfolio. Chcemy mieć pewność,że nasze usługi idealnie wpiszą się w motyw tego wielkiego wydarzenia, a jakość naszych usług zagwarantuje wyborną pamiątkę na całe życie.</p>
                <p>Mieliśmy okazję, jako studio pracować przy ogromnych produkcjach, kanałach YouTube oraz projektach 🥇 Od 3 lat jednak działamy dodatkowo na powierchnii, jaką są pamiątki okolicznościowe, co daje Państwu jeszcze większą gwarancję unikalności pamiątki. 🎬</p>
                <h5>kamerzysta na wesele · film ślubny · teledysk ślubny · kamerzysta na ślub ·
                weselezklasą · reportaż ślubny ·  filmowanie ślubów i wesel · wesele · ślub</h5>
            </div>
        </div>
    </div>
  )
}

export default AboutUsScreen

