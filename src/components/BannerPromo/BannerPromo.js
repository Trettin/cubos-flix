import './BannerPromo.css';
import bannerPromo from '../../assets/images/bg-promotion.svg';


export default function BannerPromo() {
    return(
        <div className='cupom-desconto' style={{background: `url(${bannerPromo}) no-repeat right / cover`}}>


        </div>
    );
}