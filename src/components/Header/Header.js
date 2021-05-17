import './Header.css';
import MenuHamburguer from '../Menu-hamburguer/Menu'
import logo from '../../assets/images/logo.svg';
import lupa from '../../assets/images/search-icon.svg';
import bookmark from '../../assets/images/bookmark-icon.svg';
import promocoes from '../../assets/images/promotion-icon.svg';
import gabriel from '../../assets/images/gabriel.jpeg';
import MenuSanduice from '../../assets/images/closed-menu.svg';
import { useState } from 'react';

export default function Header(props) {
    const [menuMode, setMenuMode] = useState(false);

    const handleMenu = () => {
        setMenuMode(!menuMode);
    }

    return(
        <header>
            
            <div className="container--header">

                <img className='logo' src={logo} alt="Cubos Flix logotipo" />

                <div className="pesquisa">
                    
                    <input type="text" placeholder='Pesquise filmes...' onKeyPress={(e)=> e.key === 'Enter' && props.handleInput(e.target.value)} />
                    <img className='lupa' src={lupa} alt="ícone de pesquisa" onClick={(e) => props.handleInput(e.target.previousElementSibling.value)}/>

                </div>
                
                <div className="favoritos">

                    <img src={bookmark} alt="" />
                    <button onClick={()=> props.handleFavoritos()} >Favoritos</button>

                </div>

                <div className="promocoes">
                    <img src={promocoes} alt="ícone de promoções" />
                    <a href="https://trettin-cubos-flix.netlify.app/">Promoções</a>
                </div>

                <div className="profile">
                    <span>Bem vindo Gabriel</span>
                    <img src={gabriel} alt="imagem do usuário" />
                </div>

                <button className='menu-button' onClick={()=> handleMenu()} ><img src={MenuSanduice} alt="" /></button>
                
                {menuMode? <MenuHamburguer handleMenu={handleMenu}/> : ''}

            </div>
        </header>
    );
}