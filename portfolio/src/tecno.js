// front
import css from './image/Logo/testcss.webp';
import js from './image/Logo/javacript.png';
import react from './image/Logo/react.png';
import html from './image/Logo/html.webp';

// back
import php from './image/Logo/php.webp';
import node from './image/Logo/node.webp';
import laravel from './image/Logo/Laravel.webp';
// autre
import tailwind from './image/Logo/tailwind-css-.webp';
import notion from './image/Logo/notion.webp';
import figma from './image/Logo/figma.webp';



function Tecno() {
    return (
        <section className="grid center">
            <div id="tecno">


                <div className="list-tecno">
                    <ul>
                        <li> <img src={html} alt="html " /><a href="#"></a></li>
                        <li> <img src={css} alt="css" /><a href="#"></a></li>
                        <li> <img src={js} alt="js" /><a href="#"></a></li>
                        <li> <img src={react} alt="react" /><a href="#"></a></li>

                    </ul>
                </div>

                <div className="list-tecno">
                    <ul>
                        <li> <img src={php} alt="php" /><a href="#"></a></li>
                        <li> <img src={node} alt="node" /><a href="#"></a></li>
                        <li> <img src={laravel} alt="laravel" /><a href="#"></a></li>
                    </ul>
                </div>
                <div className="list-tecno">
                    <ul>

                        <li> <img src={tailwind} alt="php" /><a href="#"></a></li>
                        <li> <img src={figma} alt="php" /><a href="#"></a></li>
                        <li> <img src={notion} alt="node" /><a href="#"></a></li>

                    </ul>
                </div>


            </div>


        </section>
    );
}

export default Tecno;