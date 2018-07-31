import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


import Grid from './components/Grid';
import Carrinho from './components/gridCarrinho';

import CarrinhoStore from './Stores/CarrinhoStore';

import Menu from './components/Menu'

// import Produtos from './testes/telaProduto';

const carrinhoStore = new CarrinhoStore();
const MenuLivros = () =>  <Menu store={carrinhoStore}  content={GridLivros}/>
const GridLivros =  <Grid store={carrinhoStore} classes={1}/>

const MenuCarrinho = () => <Menu store={carrinhoStore}  content={Cart}/>
const Cart = <Carrinho store={carrinhoStore}/>

// const MenuProduto = () => <Menu store={carrinhoStore}  content={Produto}/>
// const Produto = <Produtos />

export let qtde = carrinhoStore.carrinho.length;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch >
          <Route exact={true} path="/" render={ MenuLivros } />
          <Route exact={true} path="/Carrinho" render={ MenuCarrinho } />
          
        </Switch>
      </div>
    );
  }
}

export default App;
