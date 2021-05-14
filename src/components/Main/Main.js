import './Main.css';
import { useState } from 'react';
import goldenStar from '../../assets/images/golden-star.svg'
import lupa from '../../assets/images/search-icon.svg';
import BannerPromo from '../BannerPromo/BannerPromo';
import {Movies} from '../../data/data';


export default function Main(props) {
    const topMovies = Movies.slice(0,5);

    const [starMode, setStarMode] = useState(false);
    const [temCupom, setTemCupom] = useState(false);
    const [timeIsOver, setTimeIsOver] = useState(false);



    const categories = [
        {
            filtro: 'Todos', dataCategory: 'Todos'
        },
        {
            filtro: 'Ação', dataCategory: 'action'
        }, 
        {
            filtro: 'Romance', dataCategory: 'romance'
        }, 
        {
            filtro: 'Ficção científica', dataCategory: 'science fiction'
        }, 
        {
            filtro: 'Terror', dataCategory: 'horror'
        }
    ]

    function adicionarNaSacola(event) {
        
        const temNaSacola =  props.sacola.find(filme=> filme.title === event.target.value);
        
        if (temNaSacola) {
            temNaSacola.quantidade ++;
            props.setSacola((prevState)=> prevState+[...props.sacola]);
            
            localStorage.setItem('sacola', JSON.stringify(props.sacola));
            console.log(localStorage.getItem('sacola'))
            console.log(props.sacola, 'if')

        } else {
            const filmeNaSacola = Movies.find(movie=> movie.title === event.target.value);
            const dadosFilme = {
                title: filmeNaSacola.title,
                capa: filmeNaSacola.backgroundImg,
                preco: filmeNaSacola.price,
                quantidade: 1
            }
            props.setSacola(()=>[...props.sacola, dadosFilme]);
            localStorage.setItem('sacola', JSON.stringify(props.sacola));
            console.log(localStorage.getItem('sacola'))
            console.log(props.sacola)
        }
        props.setIsEmpty(()=>false);
    }

    return(
        <main>

            {temCupom || timeIsOver ? '' : <BannerPromo aplicarCupom={()=> {
                setTemCupom(true)}} time={()=> setTimeIsOver(true)}/> }
            

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
                                    <button onClick={(e)=> adicionarNaSacola(e)} value={filme.title}>Sacola <span>R${filme.price}</span></button>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </div>

            <div className='movies'>
                <h1>Filmes</h1>

                <div className="main-pesquisa">

                    <input type="text" placeholder='Pesquise filmes...' onChange={(e)=> props.handleInput(e)}/>
                    <img className='main-lupa' src={lupa} alt="ícone de pesquisa" />

                </div>

                <div className="categories">
                    {categories.map(category => {
                        return(
                            <button className={props.filtro === category.dataCategory ? 'category-button category-active' : 'category-button'} onClick={()=> {
                                props.setFiltro(category.dataCategory)
                            }}>{category.filtro}</button>
                        );
                    })}
                </div>

                <div className="top-filmes">
                    {props.filmesFiltrados.map(filme => {
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
                                    <button onClick={(e)=> adicionarNaSacola(e)} value={filme.title} >Sacola <span>R${filme.price}</span></button>
                                </div>

                            </div>
                        );
                    })}
                </div>
                
            </div>
        </main>
    );
}
