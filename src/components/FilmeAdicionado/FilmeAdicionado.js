import './FilmeAdicionado.css';
import mais from '../../assets/images/plus-icon.svg';
import menos from '../../assets/images/minus-icon.svg';
import lixeira from '../../assets/images/trash-icon.svg';

export default function FilmeAdicionado(props) {

    return(
        <div className='filme-adicionado'>
            <img className='adicionado-img' src={props.capa} alt="" />
            <div className='titulo-e-preco'>
                <p className='filme-title'>{props.title}</p>
                <p className='filme-preco'>R$ {props.preco}</p>
            </div>
            <div className='config-qtd'>
                <button onClick={(e) => props.handleAumentarQtd(e)} value={props.title} className='aumentar-quantidade'><img src={mais} alt="plus icon" /></button>
                <span className='quantidade'>{props.quantidade}</span>
                <button onClick={(e) => props.handleDiminuirQtd(e)} value={props.title} className='diminuir-quantidade'><img src={props.quantidade === 1 ? lixeira : menos} alt="minus icon " /></button>
            </div>
        </div>
    );
}