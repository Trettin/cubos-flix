import './MovieInBag.css';
import plusIcon from '../../assets/images/plus-icon.svg';
import minusIcon from '../../assets/images/minus-icon.svg';
import trashIcon from '../../assets/images/trash-icon.svg';

export default function FilmeAdicionado(props) {

    return(
        <div className='filme-adicionado'>
            <img className='adicionado-img' src={props.capa} alt="" />
            <div className='titulo-e-preco'>
                <p className='filme-title'>{props.title}</p>
                <p className='filme-preco'>R$ {props.preco}</p>
            </div>
            <div className='config-qtd'>
                <button onClick={(e) => props.handleAumentarQtd(e)} value={props.title} className='aumentar-quantidade'><img src={plusIcon} alt="plus icon" /></button>
                <span className='quantidade'>{props.quantidade}</span>
                <button onClick={(e) => props.handleDiminuirQtd(e)} value={props.title} className='diminuir-quantidade'><img src={props.quantidade === 1 ? trashIcon : minusIcon} alt="minus icon " /></button>
            </div>
        </div>
    );
}