import './Bag.css';
import sacola from '../../assets/images/bag-icon.svg';
import EmptyBag from '../EmptyBag/EmptyBag';
import ticket from '../../assets/images/coupon-icon.svg';
import FilmeAdicionado from '../FilmeAdicionado/FilmeAdicionado';
import { useEffect, useState } from 'react';


export default function Bag(props) {
    // const [filmesNaSacola, setFilmesNaSacola] = useState([]);
    // useEffect(() => {
    //     const fromLS = JSON.parse(localStorage.getItem('sacola'))
    //    setFilmesNaSacola(fromLS)
    // }, []);

    useEffect(() => {

        if (props.sacola.length >0) {
            let precoSacola = 0
            for (let filme of props.sacola) {
               precoSacola += filme.preco * filme.quantidade;

            }
           props.setPrice(precoSacola)
           return
        }
        props.setPrice(0)
    }, [props.sacola]);

    function handleAumentarQtd(event) {
        const filmesNaSacola = [...props.sacola];
        filmesNaSacola.map(filme=> {
            if (filme.title === event.target.parentElement.value) {
                filme.quantidade++;
            }
        })
        
        props.setSacola(filmesNaSacola);
    }

    function handleDiminuirQtd(event) {
        const filmesNaSacola = [...props.sacola];
        filmesNaSacola.map(filme=> {
            if (filme.title === event.target.parentElement.value) {
                filme.quantidade--;
            }
        })
        
        props.setSacola(filmesNaSacola);
    }

    return(
        <div className='bag'>
            <div className='bag-header'>
                <img className='img-sacola' src={sacola} alt="ícone de uma sacola" />
                Sacola
            </div>

            {props.isEmpty? <EmptyBag /> : props.sacola.map(filme => {
                return(
                    <FilmeAdicionado 
                        title={filme.title} 
                        capa={filme.capa} 
                        preco={filme.preco} 
                        quantidade={filme.quantidade} 
                        handleAumentarQtd={(e)=> handleAumentarQtd(e)}
                        handleDiminuirQtd={(e)=> handleDiminuirQtd(e)}
                    />
                );
            })}

            <div className="bag-footer">
                <p>Insira seu cupom</p>
                <div className='div-input'>
                    <input type="text" placeholder='Cupom de desconto' />
                    <img src={ticket} alt="ticket icon" />
                </div>
            </div>

            {props.isEmpty? '' : 
                <button className="confirmar-compra">
                    Confirme seus dados <span>R$ {props.price}</span>
                </button>
            }
        </div>
    );
}