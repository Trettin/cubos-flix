import './FilmeAdicionado.css';
import mais from '../../assets/images/plus-icon.svg';
import menos from '../../assets/images/minus-icon.svg';

import {Movies} from '../../data/data';



export default function FilmeAdicionado(props) {
    return(
        <div className='filme-adicionado'>
            <img className='adicionado-img' src={props.capa} alt="" />
            <div className='titulo-e-preco'>
                <p className='filme-title'>{props.title}</p>
                <p className='filme-preco'>R$ {props.preco}</p>
            </div>
            <div className='config-qtd'>
                <button className='aumentar-quantidade'><img src={mais} alt="" /></button>
                <span className='quantidade'>{props.quantidade}</span>
                <button className='diminuir-quantidade'><img src={menos} alt="" /></button>
            </div>
        </div>
    );
}