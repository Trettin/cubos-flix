import './Bag.css';
import sacola from '../../assets/images/bag-icon.svg';
import EmptyBag from '../EmptyBag/EmptyBag';
import ticket from '../../assets/images/coupon-icon.svg';
import FilmeAdicionado from '../FilmeAdicionado/FilmeAdicionado';
import xIcon from '../../assets/images/open-menu.svg';
import { useEffect, useState } from 'react';


export default function Bag(props) {
    const [inputCupom, setInputCupom] = useState('');
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
        localStorage.setItem('sacola', JSON.stringify(filmesNaSacola));

    }

    function handleDiminuirQtd(event) {
        let filmesNaSacola = [...props.sacola];
        filmesNaSacola.map(filme=> {
            if (filme.title === event.target.parentElement.value) {
                filme.quantidade--;
            }
        })
        filmesNaSacola = filmesNaSacola.filter(filme => filme.quantidade > 0);
        
        props.setSacola(filmesNaSacola);
        localStorage.setItem('sacola', JSON.stringify(filmesNaSacola));
    }

    function handleApplyCupom() {
        if (inputCupom === 'htmlnaoelinguagem') props.setTemCupom(true);
    }

    return(
        <div className={props.sacolaOpen ? 'bag open' : 'bag'}>
            <div className='bag-header'>
                <div className='header-title'>
                    <img className='img-sacola' src={sacola} alt="ícone de uma sacola" />
                    Sacola
                </div>
                <button className='mobileBag-x' onClick={()=> props.setSacolaOpen(false)}><img src={xIcon} alt="X icon" /></button>
            </div>
            <div className='bag-content'>
                {props.sacola.length === 0 ? <EmptyBag /> : props.sacola.map(filme => {
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
            </div>
            

            <div className="bag-footer">
                <p>Insira seu cupom</p>
                <div className='div-input'>
                    <input type="text" placeholder='Cupom de desconto' 
                    onKeyPress={(e)=> e.key=== 'Enter' && handleApplyCupom()} 
                    onChange={(e)=> setInputCupom(e.target.value) }/>
                    <img onClick={()=> handleApplyCupom()} src={ticket} alt="ticket icon" />
                </div>
            </div>

            {props.sacola.length === 0? '' : 
                <button className="confirmar-compra">
                    Confirme seus dados <span>R$ {props.temCupom ? (props.price *0.9).toFixed(2) : (props.price).toFixed(2)}</span>
                </button>
            }
        </div>
    );
}