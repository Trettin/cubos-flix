import './BannerPromo.css';
import bannerPromo from '../../assets/images/bg-promotion.svg';
import circleTicket from '../../assets/images/coupon-circle-icon.svg';
import relogioIcone from '../../assets/images/time-icon.svg';
import money from '../../assets/images/money.png';
import { useState, useEffect } from 'react';


export default function BannerPromo({aplicarCupom, time}) {
    const [tempoRestante, setTempoRestante] = useState(300);


    const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, "0");
    const segundos = String(tempoRestante % 60).padStart(2, "0");

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTempoRestante((tempoRestante) => {
                if (tempoRestante > 0) {
                    return tempoRestante - 1;
                } else {
                    return 0;
                }
            });
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
        
    }, []);
    
    useEffect(() => {
        if (tempoRestante === 0) time();
    }, [tempoRestante]);

    return(
        <div className='cupom-desconto' onClick={() => aplicarCupom()}>

            <div className='aproveite'>
                <h1>Aproveite Agora</h1>
                <div className='aproveite-footer'>
                    <img src={circleTicket} alt="ícone de ticket" />
                    <span className='cupom-span'>Cupom: </span><span className='html'>HTMLNAOELINGUAGEM</span>
                </div>
            </div>

            <div className='finalizaEm'>
                <h2>Finaliza em</h2>
                <div className='finalizaEm-footer'>
                    <img src={relogioIcone} alt="ícone de relógio" />
                    <span>{'00'}:{minutos}:{segundos}</span>
                </div>
            </div>

            <img className='money' src={money} alt="icone de cédulas de dinheiro" />

        </div>
    );
}