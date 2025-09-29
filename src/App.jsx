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
  }, [window.innerWidth, originalStyleSheet]);


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

          <img src={neli} alt="" style={{ width: "219px", height: "178px" }} />
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
            <img src={honey_big} alt="honey" style={{ width: "428px", height: "428px", gridColumn: "1 / 3", gridRow: "1 / 3" }} />
            <p style={{ height: "190px", gridColumn: "1 / 3", gridRow: "3 / 4" }}><b>Título: “Honey”</b><br />Óleo sobre lienzo, 25×25 cm, 2025</p>
            <img src={honey_small_left} alt="honey" style={{ width: "204px", height: "204px", gridColumn: "4 / 5", gridRow: "2 / 3" }} />
            <img src={honey_small_right} alt="honey" style={{ width: "204px", height: "204px", gridColumn: "5 / 6", gridRow: "2 / 3" }} />
            <p style={{ gridColumn: "5 / 6", gridRow: "1 / 3" }}>Pinté esta pieza después de un<br /> desayuno: miel, un huevo caliente <br />y abejas en la ventana del patio. <br />Quise atrapar el instante <br />pegajoso y luminoso, casi <br />ceremonial.</p>

            <p style={{ gridColumn: "1/ 2", gridRow: "5 / 6" }}>Un tigre emerge entre corrientes <br />rojas y azules, encarnando <br />fuerza, tensión y vitalidad. El <br />contraste cromático convierte la <br />escena en un estallido de energía <br />y movimiento.</p>
            <img src={tiger_small} alt="tiger" style={{ width: "204px", height: "247px", gridColumn: "2 / 3", gridRow: "4 / 5" }} />
            <p style={{gridColumn: "2 / 3", gridRow: "5 / 6" }}><b>Título: “Tiger”</b><br />Acrílico, 60×75 cm, 2023</p>
            <img src={vulnerable} alt="vulnerable" style={{ width: "428px", height: "601px", gridColumn: "3 / 4", gridRow: "4 / 6" }} />
            <p style={{ gridColumn: "3 / 4", gridRow: "6 / 7" }}><b>Título: “Vulnerable”</b><br />Óleo sobre carton, 60×75 cm, 2021</p>
            <p style={{ gridColumn: "5 / 6", gridRow: "4 / 5" }}>Una vulnerabilidad reconocible<br /> vive en la figura desnuda y frágil;<br /> no hay tensión: la escena la <br />sostiene la materia pictórica, no<br /> la ansiedad. El felino —cazador y <br />talismán— hace de guardián, y la <br />intimidad se vuelve una pequeña <br />fábula sobre confianza y amparo.</p>
            <img src={woman} alt="woman"style={{ width: "428px", height: "428px", gridColumn: "1 / 3", gridRow: "7 / 9" }} />
            <p  style={{height: "241px", gridColumn: "1 / 2", gridRow: "9 / 10" }}><b>Título: “Another world”</b><br />Óleo sobre lienzo, 100×100 cm, 2025</p>
            <p  style={{ gridColumn: "4 / 5", gridRow: "7 / 8" }}>Los personajes viven sobre el <br />rostro de Mahākala, deidad <br />budista que protege contra el <br />mal. La tierra se funde con su <br />máscara y el ojo en el musgo <br />recuerda una fuerza que siempre<br /> observa. La joven y el caballo <br />representan vulnerabilidad y <br />confianza, mientras la figura<br /> oscura custodia el misterio. </p>
            <p style={{ gridColumn: "5 / 6", gridRow: "7/8" }}>La obra habla de cómo el mito se <br />convierte en suelo de nuestras<br /> emociones y de cómo en la <br />fragilidad también nace la fuerza.</p>
            <img src={cat} alt="cat" style={{ width: "204px", height: "204px", gridColumn: "4 / 5", gridRow: "8 / 9" }}/>
            <img src={eye} alt="eye" style={{ width: "204px", height: "204px", gridColumn: "5 / 6", gridRow: "8 / 9" }}/>
            <img src={landscape} alt="landscape" style={{ width: "204px", height: "247px", gridColumn: "1 / 2", gridRow: "10 / 11" }}/>
            <p  style={{ gridColumn: "1 / 2", gridRow: "11 / 12" }}><b>Título: “Apunte"</b><br />Acrílico sobre papel, 42×59 cm, 2022</p>
            <img src={landscape_2} alt="landscape2"style={{ width: "428px", height: "601px", gridColumn: "3 / 5", gridRow: "10 / 12" }} />
            <p  style={{ gridColumn: "3 / 4", gridRow: "12 /13" }}><b>Título: “Apunte"</b><br />Acrílico sobre papel, 42×59 cm, 2022</p>
            <p> Pintado directamente del natural <br />durante un pequeño viaje en el <br />marco de un festival, este apunte<br /> refleja la frescura del instante, los <br />cambios de color y la sensación<br /> de estar presente en el lugar.</p>
          </div>
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
