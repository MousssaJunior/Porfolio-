
// import Image from 'next/image'
import { Typing } from "./write";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
// import profilImg from "../image/Metanguy.webp"
// import cv from '../cv/CV_Moussa Junior_FOFANA.pdf'
function Main() {
    const text = Typing("Web developpeur fullstack", 250);
    return (
        <section id="me">
            <div className="image-header">
                {/* <img src= "./image/Metanguy.webp"/> */}
            </div>
            <div className="texte-me">
                <h1>{text}</h1>
                <h4>
                    Fofana Moussa Junior, passionné par les jeux vidéo, les animes et le sport, je suis un développeur web créatif qui transforme ses passions en projets numériques captivants. Explorez mon portfolio pour voir comment je combine ma passion pour la technologie avec mes intérêts personnels pour créer mes projets.
                </h4>
                <div className="main-icone">
                    <ul>
                        <li><a href="https://www.linkedin.com/in/moussa-junior-fofana-52319426b/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#74C0FC", fontSize: "2em" }} /></a></li>
                        <li><a href="https://github.com/MousssaJunior?tab=repositories" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: "#B197FC", fontSize: "2em" }} /></a></li>
                        <li><button className="cv" ><a href='.\cv\CV_Moussa Junior_FOFANA.pdf' download>CV</a></button></li>
                    </ul>

                </div>

            </div>
        </section>
    );
}

export default Main;
