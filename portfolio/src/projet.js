import puissance4 from'./image/puissance4.png';


function Projets() {
    return (
        <section id="realisation" className="wrap">
              <h2 class="d-flex center">Voici ce que je peux réaliser</h2>
            <div className="projets">
          

            <div className="projet">
                <a>
                    <img src={puissance4} alt='puissance4' />
                 <h3> puissance4</h3>
                </a>
            </div>

            <div className="projet">
                <a>
                    <img src={puissance4} alt='puissance4' />
                    <h3> puissance4</h3>
                </a>

            </div>

            <div className="projet">
                
                    <img src={puissance4} alt='puissance4' />
                    <h3> puissance4</h3>
                
            </div>

            </div>
       



        </section>
    );
}

export default Projets;