import './Menu.css'
import xIcon from '../../assets/images/open-menu.svg';
import gabriel from '../../assets/images/gabriel.jpeg';
import bookmark from '../../assets/images/bookmark-icon.svg';
import promocoes from '../../assets/images/promotion-icon.svg';
import sacola from '../../assets/images/bag-icon.svg';

export default function MenuHamburguer(props) {

    return(
        <div className="menu-hamburguer">
            <button className='x' onClick={props.handleMenu}><img src={xIcon} alt="" /></button> 

             <div className="profile-mobile">
                <img src={gabriel} alt="imagem do usuário" />
                <span>Bem vindo, <br /> Gabriel</span>
            </div>

            <div className="favoritos-mobile">

                    <img src={bookmark} alt="ícone de marcador de página" />
                    <button>Favoritos</button>

            </div>

            <div className="promocoes-mobile">
                    <img src={promocoes} alt="ícone de promoções" />
                    <button>Promoções</button> 
            </div>

            <div className="sacola">
                    <img src={sacola} alt="ícone de sacola" />
                    <button>Sacola</button>
            </div>
	
        </div>
        
    );
}
