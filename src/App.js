import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bag from './components/Bag/Bag';
import { useState, useEffect } from 'react';
import {Movies} from './data/data';




function App() {
  const [filmesFiltrados, setFilmesFiltrados] = useState(Movies);
  const [filtro, setFiltro] = useState('Todos');
  const [isEmpty, setIsEmpty] = useState(true);
  const [sacola, setSacola] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (filtro === 'Todos') {
        setFilmesFiltrados(Movies);
    } else {
        const novoFiltro = Movies.filter(filme => filme.categories.includes(filtro));
        setFilmesFiltrados(novoFiltro)
    }
}, [filtro]);

  function handleInput(event) {
    const filmePesquisado = Movies.filter(filme => filme.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilmesFiltrados(filmePesquisado)
  }

  function adicionarNaSacola(event) {
        
    const temNaSacola =  sacola.find(filme => filme.title === event.target.value);
    
    if (temNaSacola) {
      temNaSacola.quantidade ++;
      setSacola([...sacola]);
      
      // localStorage.setItem('sacola', JSON.stringify(sacola));


    } else {
      const filmeNaSacola = Movies.find(movie=> movie.title === event.target.value);
      const dadosFilme = {
        title: filmeNaSacola.title,
        capa: filmeNaSacola.backgroundImg,
        preco: filmeNaSacola.price,
        quantidade: 1
      }
      setSacola([...sacola, dadosFilme]);
      // localStorage.setItem('sacola', JSON.stringify(sacola));
    }
    setIsEmpty(false);
  }

  return (
    <div className="App-Cubos-Flix">
      <Header 
        handleInput={(event)=>handleInput(event)} 
      />

      <Main 
        filmesFiltrados={filmesFiltrados} 
        handleInput={(event)=>handleInput(event)} 
        setFiltro={(category)=> setFiltro(category)} 
        filtro={filtro} 
        adicionarNaSacola={(e) => adicionarNaSacola(e)} 
      />

      <Bag 
        isEmpty={isEmpty} 
        setSacola={(array)=> setSacola(array)} 
        sacola={sacola}
        price={price}
        setPrice={(number)=> setPrice(number)}
      />
    </div>
  );
}

export default App;
