// front
// import css from '../image/Logo/testcss.webp';
// import js from '../image/Logo/javacript.png';
// // import react from '../image/Logo/react.png';
// import html from '../image/Logo/html.webp';

// back
// import php from '../image/Logo/php.webp';
// import node from '../image/Logo/node.webp';
// import laravel from '../image/Logo/Laravel.webp';
// autre
// import tailwind from '../image/Logo/tailwind-css-.webp';
// import notion from '../image/Logo/notion.webp';
// import figma from '../image/Logo/figma.webp';



function Tecno() {
    return (
        <section className="grid center" id='all-tecno'>
            <h2 className="d-flex center">Je réalise mes projets avec</h2>
            <div id="tecno">


                <div className="list-tecno">
                    <ul>
                        <li> <img src='../image/Logo/html.webp' alt="html " /><a href="#"></a></li>
                        <li> <img src='./image/Logo/testcss.webp' alt="css" /><a href="#"></a></li>
                        <li> <img src='./image/Logo/javacript.png' alt="js" /><a href="#"></a></li>
                        <li> <img src='./image/Logo/react.png' alt="react" /><a href="#"></a></li>

                    </ul>
                </div>

                <div className="list-tecno">
                    <ul>
                        <li> <img src='./image/Logo/php.webp' alt="php" /><a href="#"></a></li>
                        <li> <img src='./image/Logo/node.webp' alt="node" /><a href="#"></a></li>
                        <li> <img src='./image/Logo/Laravel.webp' alt="laravel" /><a href="#"></a></li>
                    </ul>
                </div>
                <div className="list-tecno">
                    <ul>

                        <li> <img src='./image/Logo/tailwind-css-.webp' alt="php" /><a href="#"></a></li>
                        <li> <img src='
                        ./image/Logo/figma.webp' alt="php" /><a href="#"></a></li>
                        <li> <img src='./image/Logo/notion.webp' alt="node" /><a href="#"></a></li>

                    </ul>
                </div>


            </div>


        </section>
    );
}

export default Tecno;