import { useState } from 'react'
import tigerPicture from './assets/tiger-min.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header id='header-id'>
        <a className='tab1 general-tab' href=''>Pinturas</a>
        <a className='tab2 general-tab' href=''>Murales</a>
        <a className='logo general-tab' href="">Neli Kalistova</a>
        <a className='tab3 general-tab' href=''>Proceso</a>
        <a className='tab4 general-tab' href=''>Contacto</a>
      </header>
      <main>
        <section className='hero-section'>
          <div className='title-couple'>
            <h1>Mur<span className='spacing5'></span>a<span className='spacing1'></span>les</h1>
            <img className='image-hero' src={tigerPicture} alt="" />
            <h1 className='italic'>a medida,</h1>
          </div>
          <h1 className='title-bottom'><span className='italic'>pintura de</span> caballete</h1>
          <button className='general-button'>Iniciar mi proyecto</button>
        </section>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default App
