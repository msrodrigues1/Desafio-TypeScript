import * as React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';


import Grid from './components/Grid';
import Carrinho from './components/gridCarrinho';

import CarrinhoStore from './Stores/CarrinhoStore';
import LivroProduto from './Stores/livroProduto'

import Menu from './components/Menu'

import Produtos from './testes/telaProduto';

const produto = new LivroProduto(1, {autor: 'Rick Riordan', codigo: 2, desc:'A vida de Percy Jackson é assim mesmo: uma grande bagunça de deuses e monstros que, na maioria das vezes, acaba em problemas. Filho de Poseidon, o deus do mar, um belo dia Percy desperta sem memória e acaba em um acampamento de heróis que não reconhece. Agarrado à lembrança de uma garota, só tem uma certeza: os dias de jornadas e batalhas não terminaram. Percy e seus novos colegas semideuses vão enfrentar os misteriosos desígnios da Profecia dos Sete. Se falharem, as consequências, é claro, serão desastrosas. Com início no “outro” acampamento meio-sangue e se estendendo para além das terras dos deuses, esta sequência da série Os heróis do Olimpo apresenta novos semideuses e criaturas incríveis, além de trazer de volta alguns monstros bastante conhecidos.',
img: '2.jpg',
nome: 'O Filho de Netuno',
preco: 39.99}, 1);

const carrinhoStore = new CarrinhoStore();
const GridLivros =  <Grid store={carrinhoStore} produto={produto} classes={1}/>
const MenuLivros = () =>  <Menu store={carrinhoStore}  content={GridLivros}/>

const Cart = <Carrinho store={carrinhoStore}/>
const MenuCarrinho = () => <Menu store={carrinhoStore}  content={Cart}/>

const Produto = <Produtos produto={produto}/>
const MenuProduto = () => <Menu store={carrinhoStore}  content={Produto}/>

export let qtde = carrinhoStore.carrinho.length;

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch >
          <Route exact={true} path="/" render={ MenuLivros } />
          <Route exact={true} path="/Carrinho" render={ MenuCarrinho } />
          <Route exact={true} path="/Produto" render={MenuProduto}/>
        </Switch>
      </div>
    );
  }
}

export default App;
