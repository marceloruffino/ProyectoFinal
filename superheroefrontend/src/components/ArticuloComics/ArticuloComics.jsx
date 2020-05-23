import React from 'react';
import './Noticias.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Noticia001 from './AdminNoticiasPhotos/noticia001-1.jpg'
import Noticia002 from './AdminNoticiasPhotos/noticia001-2.jpg'
import { useParams } from 'react-router-dom';

export default function ArticuloComics() {

    const {idNoticia} = useParams();
    console.log(idNoticia)
    return (
        
            <div className="article-dual-column">
                <div className="container">

                    <div className="col-md-10 offset-md-1">
                        <div className="intro">
                            <h1 className="text-center">Doom Patrol en escena
                                </h1>
                            <p className="text-center">
                                <span className="by">por</span>
                                <a href="#">Cesar Lopez</a>
                                <span className="date">Sept 8th, 2020 </span>
                            </p>
                        </div>
                        <div className='FotoCenter'>
                            <img className="img-fluid" src={Noticia001}></img>
                        </div>
                        <div className="textArticulo">
                                <p>A re-imagining of one of DC's most beloved group of outcast Super Heroes: Robotman, Negative Man, Elasti-Girl and Crazy Jane, led by modern-day mad scientist Dr. Niles Caulder (The Chief). The Doom Patrol's members each suffered horrible accidents that gave them superhuman abilities--but also left them scarred and disfigured. Traumatized and downtrodden, the team found purpose through The Chief, who brought them together to investigate the weirdest phenomena in existence--and to protect Earth from what they find. Part support group, part Super Hero team, the Doom Patrol is a band of super-powered freaks who fight for a world that wants nothing to do with them. Picking up after the events of Titans, Doom Patrol will find these reluctant heroes in a place they never expected to be, called to action by none other than Cyborg, who comes to them with a mission hard to refuse, but with a warning that is hard to ignore: their lives will never, ever be the same.</p>
                        </div>
                        <div className='FotoCenter'>
                            <img className="img-fluid" src={Noticia002}></img>
                        </div>
                        <div className="textArticulo">
                            <p>Suspendisse vel placerat ligula. Vivamus ac sem lac. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                            posuere cubilia Curae.
                            </p>
                        </div>
                    </div>

                </div>


            </div>


        
    );
}
