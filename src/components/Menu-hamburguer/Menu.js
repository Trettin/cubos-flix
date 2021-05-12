import './Menu.css'
import xIcon from '../../assets/images/open-menu.svg';
import gabriel from '../../assets/images/gabriel.jpeg';
import bookmark from '../../assets/images/bookmark-icon.svg';
import promocoes from '../../assets/images/promotion-icon.svg';
import sacola from '../../assets/images/bag-icon.svg';

export default function MenuHamburguer(props) {

    return(
        <div className="menu-hamburguer">
            <button onClick={props.handleMenu}><img src={xIcon} alt="" /></button> 

             <div className="profile-mobile">
                <img src={gabriel} alt="imagem do usuário" />
                <span>Bem vindo, <br /> Gabriel</span>
            </div>

            <div className="favoritos-mobile">

                    <img src={bookmark} alt="ícone de marcador de página" />
                    <a href="https://trettin-cubos-flix.netlify.app/">Favoritos</a>

            </div>

            <div className="promocoes-mobile">
                    <img src={promocoes} alt="ícone de promoções" />
                    <a href="https://trettin-cubos-flix.netlify.app/">Promoções</a>
            </div>

            <div className="sacola">
                    <img src={sacola} alt="ícone de sacola" />
                    <a href="https://trettin-cubos-flix.netlify.app/">Sacola</a>
            </div>
	
        </div>
        
    );
}
