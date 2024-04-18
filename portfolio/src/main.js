import { Typing } from "./write";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import profilImg from "./image/default-avatar.jpg"
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
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la
        </h4>
        <div className="main-icone">
          <ul>
            <li><a href="/"><FontAwesomeIcon icon={faLinkedin} style={{ color: "#74C0FC", fontSize: "2em" }} /></a></li>
            <li><a href="/"><FontAwesomeIcon icon={faGithub} style={{ color: "#B197FC", fontSize: "2em" }} /></a></li>

          </ul>

        </div>

      </div>
    </section>
  );
}

export default Main;
