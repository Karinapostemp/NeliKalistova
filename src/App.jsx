import tigerPicture from "./assets/tiger-min.jpg";
import sobreMi from "./assets/sobre-mi.png";
import neli from "./assets/neli.png";
import honey_big from "./assets/honey-big.jpg";
import honey_small_left from "./assets/honey-small-left.png";
import honey_small_right from "./assets/honey-small-right.png";
import tiger_small from "./assets/small-tiger.png";
import vulnerable from "./assets/vulnerable.png";
import woman from "./assets/woman.png";
import cat from "./assets/cat.png";
import eye from "./assets/eye.png";
import landscape from "./assets/landscape.png";
import landscape_2 from "./assets/landscape-2.png";
import "./App.css";
import { useEffect, useRef } from "react";

function App() {
  const BASE_WIDTH = 1200;
  const originalValuesRef = useRef([]);
  const styleSheetRef = useRef(null);
  const scaleRef = useRef(1);

  const findStyleSheet = () => {
    return document.styleSheets.item(2);
  };

  useEffect(() => {
    try {
      const styleSheet = findStyleSheet();
      if (!styleSheet?.cssRules) return;
      const originals = [];
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.style) {
          for (let j = 0; j < rule.style.length; j++) {
            const propName = rule.style[j];
            const propValue = rule.style[propName];
            if (propValue.endsWith("px")) {
              const value = parseFloat(propValue);
              originals.push({ ruleIndex: i, propName, value });
            }
          }
        }
      }
      originalValuesRef.current = originals;
      styleSheetRef.current = styleSheet;
    } catch (err) {
      console.warn("Cannot access stylesheet:", err);
    }
  }, []);

  useEffect(() => {
    let rafId;
    const handleResize = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const styleSheet = styleSheetRef.current;
        if (!styleSheet?.cssRules || originalValuesRef.current.length === 0) return;
        const newScale = window.innerWidth / BASE_WIDTH;
        if (newScale === scaleRef.current) return;
        scaleRef.current = newScale;
        for (const { ruleIndex, propName, value } of originalValuesRef.current) {
          styleSheet.cssRules[ruleIndex].style[propName] = `${value * newScale}px`;
        }
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
      const styleSheet = styleSheetRef.current;
      if (styleSheet?.cssRules && originalValuesRef.current.length > 0) {
        for (const { ruleIndex, propName, value } of originalValuesRef.current) {
          try {
            styleSheet.cssRules[ruleIndex].style[propName] = `${value}px`;
          } catch (err) {
            console.log(err);
          }
        }
      }
    };
  }, []);

  return (
    <>
      <header id="header-id">
        <a className="tab1 general-tab" href="">
          Pinturas
        </a>
        <a className="tab2 general-tab" href="">
          Murales
        </a>
        <a className="logo general-tab-logo" href="">
          Neli Kalistova
        </a>
        <a className="tab3 general-tab" href="">
          Proceso
        </a>
        <a className="tab4 general-tab" href="">
          Contacto
        </a>
      </header>
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="title-couple">
            <h1 className="hero-title">
              Mur<span className="spacing5"></span>a<span className="spacing1"></span>les
            </h1>
            {/* <div className="image-hero-container"></div> */}
            <img className="image-hero" src={tigerPicture} alt="tiger" />
            <h1 className="hero-title italic">a medida,</h1>
          </div>
          <h1 className="title-bottom">
            <span className="italic">pintura de</span> caballete
          </h1>
          <p className="hero-paragraph">El primer paso hacia tu obra única</p>
          <button className="general-button" id="hero-button">
            Iniciar mi proyecto
          </button>
        </section>

        {/* Intro Section */}
        <section className="intro-section">
          <img className="image-intro" src={tigerPicture} alt="tiger" />
          <p className="paragraph-intro serif">
            Conectando el carácter del espacio con una narrativa pictórica personal
          </p>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="about-title-container">
            <img src={sobreMi} alt="" style={{ width: "100%" }} />
          </div>

          <img src={neli} alt="" className="neli" />
          <p className="serif about-sub-title">Formación Superior y Experiencia Profesional</p>
          <p style={{ textAlign: "center" }}>
            Estudié en la Universidad Estatal Stroganov de Moscú, de Arte y Diseño Industrial, con
            <br></br>
            especialización en diseño de espacios orientado a la creación artística y espacial.
            <br></br>
            Trabajé como artista y diseñadora en una empresa de tejidos para interiores.
            <br></br>
            Participé en múltiples exposiciones internacionales.
          </p>
        </section>

        {/* Paintings Section */}
        <section className="pinturas">
          <h2 className="pinturas-title">Pinturas</h2>
          <p className="serif">de caballete</p>
          <div className="pictures-container">
            <img src={honey_big} alt="honey" className="honey-big" />
            <p className="picture-title title-honey">
              <b>Título: “Honey”</b>
              <br />
              Óleo sobre lienzo, 25×25 cm, 2025
            </p>
            <img src={honey_small_left} alt="honey" className="honey-small-left" />
            <img src={honey_small_right} alt="honey" className="honey-small-right" />
            <p className="description-honey">
              Pinté esta pieza después de un
              <br /> desayuno: miel, un huevo caliente <br />y abejas en la ventana del patio.{" "}
              <br />
              Quise atrapar el instante <br />
              pegajoso y luminoso, casi <br />
              ceremonial.
            </p>

            <p className="description-tiger">
              Un tigre emerge entre corrientes <br />
              rojas y azules, encarnando <br />
              fuerza, tensión y vitalidad. El <br />
              contraste cromático convierte la <br />
              escena en un estallido de energía <br />y movimiento.
            </p>
            <img src={tiger_small} alt="tiger" className="tiger-small" />
            <p className="picture-title title-tiger">
              <b>Título: “Tiger”</b>
              <br />
              Acrílico, 60×75 cm, 2023
            </p>
            <img src={vulnerable} alt="vulnerable" className="vulnerable" />
            <p className="picture-title title-vulnerable">
              <b>Título: “Vulnerable”</b>
              <br />
              Óleo sobre carton, 60×75 cm, 2021
            </p>
            <p className="description-vulnerable">
              Una vulnerabilidad reconocible
              <br /> vive en la figura desnuda y frágil;
              <br /> no hay tensión: la escena la <br />
              sostiene la materia pictórica, no
              <br /> la ansiedad. El felino —cazador y <br />
              talismán— hace de guardián, y la <br />
              intimidad se vuelve una pequeña <br />
              fábula sobre confianza y amparo.
            </p>
            <img src={woman} alt="woman" className="woman" />
            <p className="picture-title title-woman">
              <b>Título: “Another world”</b>
              <br />
              Óleo sobre lienzo, 100×100 cm, 2025
            </p>
            <p className="description-cat">
              Los personajes viven sobre el <br />
              rostro de Mahākala, deidad <br />
              budista que protege contra el <br />
              mal. La tierra se funde con su <br />
              máscara y el ojo en el musgo <br />
              recuerda una fuerza que siempre
              <br /> observa. La joven y el caballo <br />
              representan vulnerabilidad y <br />
              confianza, mientras la figura
              <br /> oscura custodia el misterio.{" "}
            </p>
            <p className="description-eye">
              La obra habla de cómo el mito se <br />
              convierte en suelo de nuestras
              <br /> emociones y de cómo en la <br />
              fragilidad también nace la fuerza.
            </p>
            <img src={cat} alt="cat" className="cat" />
            <img src={eye} alt="eye" className="eye" />
            <img src={landscape} alt="landscape" className="landscape" />
            <p className="picture-title title-landscape">
              <b>Título: “Apunte"</b>
              <br />
              Acrílico sobre papel, 42×59 cm, 2022
            </p>
            <img src={landscape_2} alt="landscape2" className="landscape-2" />
            <p className="picture-title title-landscape-2">
              <b>Título: “Apunte"</b>
              <br />
              Acrílico sobre papel, 42×59 cm, 2022
            </p>
            <p className="description-landscape-2">
              {" "}
              Pintado directamente del natural <br />
              durante un pequeño viaje en el <br />
              marco de un festival, este apunte
              <br /> refleja la frescura del instante, los <br />
              cambios de color y la sensación
              <br /> de estar presente en el lugar.
            </p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
