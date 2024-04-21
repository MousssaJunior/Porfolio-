import puissance4 from'./image/puissance4.png';
import Trisper from'./image/Trisper2.png';
import Juna from'./image/Juna.png';


function Projets() {
    return (
        <section id="realisation" className="wrap">
              <h2 class="d-flex center">Voici ce que je peux réaliser</h2>
            <div className="projets">
          

            <div className="projet">
                <a href='https://github.com/EpitechWebAcademiePromo2025/W-JSC-501-PAR-1-1-puissance4-moussa-junior.fofana' target='_blank'>
                    <img src={puissance4} alt='puissance4' />
                 <h3> puissance4</h3>
                </a>
            </div>

            <div className="projet">
                <a href=' https://mousssajunior.github.io/Trisper/' target='_blank'>
                    <img src={Trisper} alt='Trisper' />
                    <h3> Trisper</h3>
                </a>

            </div>

            <div className="projet">
                  <a href='https://www.figma.com/proto/vPHpPGbthIQ7RsNTvymsGp/Tu?page-id=1%3A4&type=design&node-id=91-9&viewport=534%2C417%2C0.04&t=lZFIjb3nFOGU6ME6-1&scaling=scale-down&starting-point-node-id=85%3A348&mode=design' target='_blank'>
                    <img src={Juna} alt='puissance4' />
                    <h3> puissance4</h3>
                  </a>
                
            </div>

            </div>
       



        </section>
    );
}

export default Projets;