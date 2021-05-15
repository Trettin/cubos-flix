import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bag from './components/Bag/Bag';
import { useState, useEffect } from 'react';
import {Movies} from './data/data';




function App() {
  const sacolaFromLocalStorage = JSON.parse(localStorage.getItem('sacola'));
  const [filmesFiltrados, setFilmesFiltrados] = useState(Movies);
  const [filtro, setFiltro] = useState('Todos');
  const [sacola, setSacola] = useState([]);
  const [price, setPrice] = useState(0);
  const [temCupom, setTemCupom] = useState(false);

  
  useEffect(() => {
    if (filtro === 'Todos') {
        setFilmesFiltrados(Movies);
    } else {
        const novoFiltro = Movies.filter(filme => filme.categories.includes(filtro));
        setFilmesFiltrados(novoFiltro)
    }
}, [filtro]);

  useEffect(() => {

    if (sacolaFromLocalStorage) {
      setSacola(sacolaFromLocalStorage);
    }
    
  }, []);

  function handleInput(event) {
    const filmePesquisado = Movies.filter(filme => filme.title.toLowerCase().includes(event.target.value.toLowerCase()));
    setFilmesFiltrados(filmePesquisado)
    console.log(sacola)    

  }

  function adicionarNaSacola(movieTitle) {
    const temNaSacola =  sacola.find(filme => filme.title === movieTitle);
    
    if (temNaSacola) {
      temNaSacola.quantidade ++;
      setSacola([...sacola]);
      localStorage.setItem('sacola', JSON.stringify(sacola));

    } else {
      const filmeNaSacola = Movies.find(movie=> movie.title === movieTitle);
      const dadosFilme = {
        title: filmeNaSacola.title,
        capa: filmeNaSacola.backgroundImg,
        preco: filmeNaSacola.price,
        quantidade: 1
      }
      setSacola([...sacola, dadosFilme]);
      localStorage.setItem('sacola', JSON.stringify([...sacola, dadosFilme]));
    
    }
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
        temCupom={temCupom}
        setTemCupom={(bool)=> setTemCupom(bool)}
      />

      <Bag 
        setSacola={(array)=> setSacola(array)} 
        sacola={sacola}
        price={price}
        setPrice={(number)=> setPrice(number)}
        temCupom={temCupom}
        setTemCupom={(bool)=> setTemCupom(bool)}
      />
    </div>
  );
}

export default App;
