 import {observable} from 'mobx';

 export interface Ilivro{
    autor: string
    codigo: number 
    desc: string
    img: string
    nome: string
    preco: number
 }


 class Pedido{
      @observable public qtd:number;
      public codigo: number;
      public livro: Ilivro;
 
      constructor(codigo: number, livro: Ilivro, qtd: number){
        this.codigo = codigo;  
        this.livro = livro;
        this.qtd   = qtd;
      }

      public decrementar(){
         if(this.qtd > 1) {
             this.qtd--;
            }
      }

      public incrementar(){
          if(this.qtd < 10){
             this.qtd++;
            }
      }

      public getTotalPedido(){
          return this.livro.preco * this.qtd;
      }
 }

 export default Pedido;