import { Typing } from "./write";

function Main() {
  const text = Typing("Web devellopeur fullstack" , 100);
    return (

        <section id="me">
              <div className="image-header">
                <h1>{text}</h1>
              </div>
             <div className="texte-me">
               <h4> 
               Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la
               </h4>
             </div>
        </section>
    );
}

export default Main
