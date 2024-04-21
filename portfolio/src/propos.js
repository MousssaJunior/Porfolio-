// import CV  from "./cv/CV_Moussa Junior_FOFANA.pdf";

import poly from "./image/avantages/polyvalence.png"
import rapide from "./image/avantages/rapide.png"
import time from "./image/avantages/time.png"

function Propos() {
    return (
        <section id="propos" className="wrap">
        <h2 class="d-flex center">Ce que vous gagnez avec Moi </h2>
        <div class="cards-avantage d-flex space-around">
          <div id="gain-de-temps" class="card-avantage">
            <img  src={time}
            />
            <div className="avantage-text">
              <p><strong>Economiser</strong> du temps et de l'argent en me laissant faire le coter visuel et fonctionnel de votre site  
              </p>
            </div>
            
          </div>
          <div  className="card-avantage">
            <img src={rapide}/>
            <div class="avantage-text">
            <p>
              <strong>Rapidité</strong> : En passant par une personne vous gagnez vitesse d'éxecution 
            </p>
            </div>
          </div>
          <div id="conseil-adapter" className="card-avantage">
            <img
              src={poly}
            />
            <div className="avantage-text">
            <p><strong>fléxibilité</strong> Je connais les probleme que peuvent rencontrer </p>
            </div>
          </div>
        </div>

  </section>
    );
}

export default Propos;