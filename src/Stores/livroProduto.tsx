import {observable} from 'mobx';

export interface IlivroProduto{
   autor: string
   codigo: number 
   desc: string
   img: string
   nome: string
   preco: number
}


class LivroProduto{
     @observable public qtd:number;
     public codigo: number;
     public livro: IlivroProduto;

     constructor(codigo: number, livro: IlivroProduto, qtd: number){
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
}

export default LivroProduto;