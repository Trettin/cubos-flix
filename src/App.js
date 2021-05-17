import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bag from './components/Bag/Bag';
import { useState, useEffect } from 'react';
import {Movies} from './data/data';


function App() {
  const sacolaFromLocalStorage = JSON.parse(localStorage.getItem('sacola'));
  const filmesFavoritos = JSON.parse(localStorage.getItem('filmes-favoritos'));
  const [filmesFiltrados, setFilmesFiltrados] = useState(filmesFavoritos ?? Movies);
  const [filtro, setFiltro] = useState('Todos');
  const [sacola, setSacola] = useState(sacolaFromLocalStorage ?? []);
  const [price, setPrice] = useState(0);
  const [temCupom, setTemCupom] = useState(false);
  const [filmes,] = useState(filmesFavoritos ?? Movies);
  const [sacolaOpen, setSacolaOpen] = useState(false);


  useEffect(() => {
    if (filtro === 'Todos') {
        setFilmesFiltrados(filmes);
    } else {
        const novoFiltro = filmes.filter(filme => filme.categories.includes(filtro));
        setFilmesFiltrados(novoFiltro)
    }
}, [filtro]);

  function handleInput(inputValue) {
    const filmePesquisado = filmes.filter(filme => filme.title.toLowerCase().includes(inputValue.toLowerCase()));
    setFilmesFiltrados(filmePesquisado)

  }

  function adicionarNaSacola(movieTitle) {
    const temNaSacola =  sacola.find(filme => filme.title === movieTitle);
    
    if (temNaSacola) {
      temNaSacola.quantidade ++;
      setSacola([...sacola]);
      localStorage.setItem('sacola', JSON.stringify(sacola));

    } else {
      const filmeNaSacola = filmes.find(movie=> movie.title === movieTitle);
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

  function handleFavoritos() {
    const filtroFavoritos = filmes.filter(filme=> filme.isStarred ===true);
    setFilmesFiltrados(filtroFavoritos)
  }

  return (
    <div className="App-Cubos-Flix">
      <Header 
        handleInput={(event)=>handleInput(event)} 
        handleFavoritos={()=> handleFavoritos()}
        setSacolaOpen={(bool)=> setSacolaOpen(bool)}
      />

      <Main 
        filmesFiltrados={filmesFiltrados}
        setFilmesFiltrados={(array)=> setFilmesFiltrados(array)} 
        handleInput={(event)=>handleInput(event)} 
        setFiltro={(category)=> setFiltro(category)} 
        filtro={filtro} 
        adicionarNaSacola={(e) => adicionarNaSacola(e)} 
        temCupom={temCupom}
        setTemCupom={(bool)=> setTemCupom(bool)}
        filmes={filmes}
      />

      <Bag 
        setSacola={(array)=> setSacola(array)} 
        sacola={sacola}
        price={price}
        setPrice={(number)=> setPrice(number)}
        temCupom={temCupom}
        setTemCupom={(bool)=> setTemCupom(bool)}
        sacolaOpen={sacolaOpen}
        setSacolaOpen={(bool)=> setSacolaOpen(bool)}
      />
    </div>
  );
}

export default App;
