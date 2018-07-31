export default class Formatador {
    public static formataPreco(txt:any){
        return txt.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    }
}
