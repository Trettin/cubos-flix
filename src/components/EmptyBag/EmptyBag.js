import './EmptyBag.css'
import person from '../../assets/images/person-illustration.svg'

export default function EmptyBag() {
    return(
        <div className="empty">
            <h3>Sua sacola está vazia</h3>
            <p>Adicione filmes agora</p>
            <img src={person} alt="ilustração de um boneco em pé" />
        </div>
    );
}