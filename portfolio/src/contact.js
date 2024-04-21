// import idev from "./image/idev.jpg"
import emailjs from "@emailjs/browser"
function Contact() {

  const envoyerEmail = (e) => {
    e.preventDefault();
    // alert("envoyer")
    emailjs.sendForm('service_iaa4yv9', 'template_6s3usqs', e.target, 'CyMitm2XZyriZM4EQ')
  }

  return (
    <section className="grille centre" id="formulaire">

      {/* <img src="/" /> */}
      <h2 class="d-flex center">Contactez moi</h2>



      <form className="formulaire-contact" onSubmit={envoyerEmail}>
        <ul>
          <li>
            <label htmlFor="courriel">Courriel :</label>
            <input type="email" id="courriel" name="courriel_utilisateur" className="champ" />
          </li>
          <li>
            <label htmlFor="objet">Objet :</label>
            <input type="text" id="objet" name="objet_utilisateur" className="champ" />
          </li>
          <li>
            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message" className="texte"></textarea>
          </li>
        </ul>
        <button type="submit" className="bouton">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
