import './BannerPromo.css';
import bannerPromo from '../../assets/images/bg-promotion.svg';
import circleTicket from '../../assets/images/coupon-circle-icon.svg'
import relogioIcone from '../../assets/images/time-icon.svg'
import money from '../../assets/images/money.png'

export default function BannerPromo() {
    return(
        <div className='cupom-desconto' style={{background: `url(${bannerPromo}) no-repeat right / cover`}}>

            <div className='aproveite'>
                <h1>Aproveite Agora</h1>
                <div className='aproveite-footer'>
                    <img src={circleTicket} alt="ícone de ticket" />
                    <span>Cupom: HTMLNAOELINGUAGEM</span>
                </div>
            </div>

            <div className='finalizaEm'>
                <h2>Finaliza em</h2>
                <div className='finalizaEm-footer'>
                    <img src={relogioIcone} alt="ícone de relógio" />
                    <span>{'00'}:{'05'}:{'33'}</span>
                </div>
            </div>

            <img className='money' src={money} alt="icone de cédulas de dinheiro" />

        </div>
    );
}