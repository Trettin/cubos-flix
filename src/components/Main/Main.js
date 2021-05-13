import './Main.css';
import { useState, useEffect } from 'react';
import {Movies} from '../../data/data';
import goldenStar from '../../assets/images/golden-star.svg'
import lupa from '../../assets/images/search-icon.svg';
import BannerPromo from '../BannerPromo/BannerPromo';

export default function Main(props) {
    const topMovies = Movies.slice(0,5);

    const [starMode, setStarMode] = useState(false);
    const [filtro, setFiltro] = useState('Todos');
    const [filmesFiltrados, setFilmesFiltrados] = useState(Movies);

    const categories = [{filtro: 'Todos', dataCategory: 'Todos'}, {filtro: 'Ação', dataCategory: 'action'}, {filtro: 'Romance', dataCategory: 'romance'}, {filtro: 'Ficção científica', dataCategory: 'science fiction'}, {filtro: 'Terror', dataCategory: 'horror'}]
    
    useEffect(() => {
        if (filtro === 'Todos') {
            setFilmesFiltrados(Movies);
        } else {
            const novoFiltro = Movies.filter(filme => filme.categories.includes(filtro));
            setFilmesFiltrados(novoFiltro)
        }
    }, [filtro]);

    function handleInput(event) {
        const filmePesquisado = Movies.filter(filme => filme.title.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilmesFiltrados(filmePesquisado)
    }

    return(
        <main>

            <BannerPromo />

            <div className='top'>
                <h1>Top Filmes</h1>
                
                <div className="top-filmes">
                    {topMovies.map(filme => {
                        return(
                            <div className='filme-card' style={{background: `url(${filme.backgroundImg}) no-repeat center / cover`}}>

                                <svg className={starMode? 'star starred': 'star'} onClick={()=> setStarMode(!starMode)} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83"/>
                                </svg>

                                <div className='card-footer'>
                                    <div className='movie-info'>
                                        <h3>{filme.title}</h3>
                                        <div className='starCount'>
                                            <img src={goldenStar} alt="estrela dourada" />
                                            {filme.starsCount}
                                        </div>
                                    </div>
                                    <button>Sacola <span>R${filme.price}</span></button>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='movies'>
                <h1>Filmes</h1>

                <div className="main-pesquisa">

                    <input type="text" placeholder='Pesquise filmes...' onChange={(e)=> handleInput(e)}/>
                    <img className='main-lupa' src={lupa} alt="ícone de pesquisa" />

                </div>

                <div className="categories">
                    {categories.map(category => {
                        return(
                            <button className='categorie-button' onClick={()=> {
                                setFiltro(category.dataCategory)
                            }}>{category.filtro}</button>
                        );
                    })}
                </div>

                <div className="top-filmes">
                    {filmesFiltrados.map(filme => {
                        return(
                            <div className='filme-card' style={{background: `url(${filme.backgroundImg}) no-repeat center / cover`}}>

                                <svg className={starMode? 'star starred': 'star'} onClick={()=> setStarMode(!starMode)} width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 2L11.7961 7.52786H17.6085L12.9062 10.9443L14.7023 16.4721L10 13.0557L5.29772 16.4721L7.09383 10.9443L2.39155 7.52786H8.20389L10 2Z" stroke="white" stroke-opacity="0.83"/>
                                </svg>

                                <div className='card-footer'>
                                    <div className='movie-info'>
                                        <h3>{filme.title}</h3>
                                        <div className='starCount'>
                                            <img src={goldenStar} alt="estrela dourada" />
                                            {filme.starsCount}
                                        </div>
                                    </div>
                                    <button>Sacola <span>R${filme.price}</span></button>
                                </div>

                            </div>
                        );
                    })}
                </div>
                
            </div>
        </main>
    );
}
