import './Header.css';
import logo from '../../assets/images/logo.svg';
import lupa from '../../assets/images/search-icon.svg';
import bookmark from '../../assets/images/bookmark-icon.svg';
import promocoes from '../../assets/images/promotion-icon.svg';
import gabriel from '../../assets/images/gabriel.jpeg';




export default function Header(props) {
    return(
        <header>
            <div className="container--header">

                <img className='logo' src={logo} alt="Cubos Flix logotipo" />

                <div className="pesquisa">

                    <input type="text" placeholder='Pesquise filmes...' />
                    <img className='lupa' src={lupa} alt="ícone de pesquisa" />

                </div>
                
                <div className="favoritos">

                    <img src={bookmark} alt="" />
                    <span>Favoritos</span>

                </div>

                <div className="promocoes">
                    <img src={promocoes} alt="ícone de promoções" />
                    <span>Promoções</span>
                </div>

                <div className="profile">
                    <span>Bem vindo Gabriel</span>
                    <img src={gabriel} alt="imagem do usuário" />
                </div>
            </div>
        </header>
    );
}