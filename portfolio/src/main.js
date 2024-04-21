import { Typing } from "./write";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilImg from "./image/Metanguy.webp"
import cv from './cv/CV_Moussa Junior_FOFANA.pdf'
function Main() {
  const text = Typing("Web developpeur fullstack", 250);
  return (
    <section id="me">
      <div className="image-header">
        <img src={profilImg}/>
      </div>
      <div className="texte-me">
        <h1>{text}</h1>
        <h4>
        FOFANA Mousssa Junior Professionnel, dynamique et polyvalent, passionné par l'informatique, Mon ambition est d'apporter des innovations numériques et des solutions performantes, significatives aux entreprises dans un environnement en constante évolution, un univers qui ne me lasse jamais.

        </h4>
        <div className="main-icone">
          <ul>
            <li><a href="/"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#74C0FC", fontSize: "2em" }} /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faGithub} style={{ color: "#B197FC", fontSize: "2em" }} /></a></li>
            <li><button className="cv" ><a href='' download={cv} > cv</a></button></li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Main;
