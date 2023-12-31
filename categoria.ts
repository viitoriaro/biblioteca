import {baseLivro} from './biblioteca'

export class LivroCategoria  extends baseLivro{
    categoria : string

   constructor(titulo : string , autor : string , ano : number , categoria : string ){
    super(titulo, autor , ano)
    this.categoria = categoria;
   }

   exibirDetalhes(){
    console.log(`${this.titulo}, ${this.autor} ${this.ano}, ${this.categoria}`)
   }

   antigo(): boolean{
    if (this.ano < 2000) {
        return  true;
    } else {
        return false;
    }
   }

   
   }