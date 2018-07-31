 import { computed, observable } from "mobx";
 import Pedido, {Ilivro} from './Pedido';


 export default class CarrinhoStore {

     @observable protected pedidos: Pedido[];

     constructor() {
         this.pedidos = []
     }

     @computed get carrinho(): Pedido[] {
         return this.pedidos.map(
             pedido => pedido
         );
     }

     public click(livro: Ilivro): void {
         const novoPedido = new Pedido(livro.codigo, livro, 1);
         let existeLivro = false;

         this.pedidos.forEach(pedido => {
             if (pedido.livro.codigo === novoPedido.livro.codigo) {
                 pedido.incrementar();
                 existeLivro = true;
             }
         });

         if (!existeLivro) {
             this.pedidos.push(novoPedido);
         }
     }

     public delete(livro: Ilivro): void {
         this.pedidos = this.pedidos.filter(pedido => livro.codigo !== pedido.livro.codigo);
     }

     public subTotal(): number {
         return this.pedidos.reduce((total, pedido) => total + pedido.getTotalPedido(), 0.00);
     }

     public qtdPedidos(): number {
         return this.pedidos.length;
     }

     public pDesconto(): number {
         switch (this.qtdPedidos()) {
             case 1:
                 return 0;
             case 2:
                 return 5;
             case 3:
                 return 10;
             case 4:
                 return 20;
             default:
                 return 25;
         }
     }

     public desconto(): number {
         return this.subTotal() * (this.pDesconto() / 100);
     }

     public calcularTotal(): number {
         return this.subTotal() - this.desconto();
     }
 }