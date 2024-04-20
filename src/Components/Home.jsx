import "./componente.css";
import homeimg from "../Components/imgs/homeimg.jpg"
import imgpastel from "../Components/imgs/imgpastel.jpg"
import About from "./About";
import Contact from "./Contact";

function Home() {
    return (
      <>
        <h1 className="texto-bienvenida">
          ¡Celebra con Dulzura! Descubre Nuestros Irresistibles Pasteles de
          Cumpleaños
        </h1>
        <div className="img-pp">
          <div className="img1">
        <img  src={homeimg} alt="personas y pastel" />
        </div>
        <div className="img2">
        <img src={imgpastel} alt="personas y pastel" />
        </div>
        </div>
        <div className="parrafo1">
        <p>¿Listo para llevar la dulzura a tu próxima celebración?
         ¡Estamos aquí para hacerlo realidad!</p>
        </div>
        <About />
        <Contact />
      </>
    );
  }
  
  export default Home;