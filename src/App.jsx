import tigerPicture from "./assets/tiger-min.jpg";
import sobreMi from "./assets/sobre-mi.png";
import neli from "./assets/neli.png";
import honey_big from "./assets/honey-big.jpg";
import "./App.css";
import { useEffect } from "react";

function App() {

    const originalStyleSheet = document.styleSheets.item(2);
  
    useEffect(() => {
      const BASE_WIDTH = 1200;
      const styleSheet = originalStyleSheet;
      if (!styleSheet?.cssRules) return;
      const originalValues = [];
      for (let i = 0; i < styleSheet.cssRules.length; i++) {
        const rule = styleSheet.cssRules[i];
        if (rule.style) {
          for (let j = 0; j < rule.style.length; j++) {
            const propName = rule.style[j];
            if (rule.style[propName].endsWith("px")) {
              const value = parseFloat(rule.style[propName]);
              originalValues.push({ ruleIndex: i, propName, value });
            }
          }
        }
      }
      const handleResize = () => {
        const scale = window.innerWidth / BASE_WIDTH;
        for (const item of originalValues) {
          const { ruleIndex, propName, value } = item;
          styleSheet.cssRules[ruleIndex].style[propName] = `${value * scale}px`;
        }
      };
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, [ window.innerWidth, originalStyleSheet]);
  

  return (
    <>
      <header id="header-id">
        <a className="tab1 general-tab" href="">
          Pinturas
        </a>
        <a className="tab2 general-tab" href="">
          Murales
        </a>
        <a className="logo general-tab" href="">
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
            <h1>
              Mur<span className="spacing5"></span>a<span className="spacing1"></span>les
            </h1>
            {/* <div className="image-hero-container"></div> */}
            <img className="image-hero" src={tigerPicture} alt="tiger" />
            <h1 className="italic">a medida,</h1>
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

          <img src={neli} alt="" style={{width:"219px", height: "178px"}}/>
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
          <div className="pictures-container" >
            <img src={honey_big} alt="honey" style={{width:"428px"}}/>
          </div>
          
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
