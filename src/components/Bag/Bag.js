import './Bag.css';
import sacola from '../../assets/images/bag-icon.svg';
import EmptyBag from '../EmptyBag/EmptyBag';
import ticket from '../../assets/images/coupon-icon.svg';

export default function Bag() {
    let isEmpty = true;

    return(
        <div className='bag'>
            <div className='bag-header'>
                <img src={sacola} alt="ícone de uma sacola" />
                Sacola
            </div>

            {isEmpty? <EmptyBag /> : ''}

            <div className="bag-footer">
                <p>Insira seu cupom</p>
                <div className='div-input'>
                    <input type="text" placeholder='Cupom de desconto' />
                    <img src={ticket} alt="ticket icon" />
                </div>
            </div>

            {isEmpty? '' : 
                <button className="confirmar-compra">
                    Confirme seus dados <span>{`R$ `}</span>
                </button>
            }
        </div>
    );
}