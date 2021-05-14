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

  return (
    <div className="App-Cubos-Flix">
      <Header handleInput={(event)=>handleInput(event)} />
      <Main filmesFiltrados={filmesFiltrados} handleInput={(event)=>handleInput(event)} setFiltro={(category)=> setFiltro(category)} filtro={filtro} setIsEmpty={(boolean)=> setIsEmpty(boolean)} sacola={sacola} setSacola={(array)=> setSacola(array)} />
      <Bag isEmpty={isEmpty} setSacola={(array)=> setSacola(array)}/>
    </div>
  );
}

export default App;
