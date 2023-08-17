//modelo de livro adaptado do retorno da api
export class Livro{
    // ! == vou lidar com a propriedade vazia por enquanto
    // ? == essa propriedade é opcional

    //dados essenciais do livro
    id!:string
    titulo!:string
    urlImg!:string
    sinopse!:string

    //info
    editora!:string
    autores?:string[]

    //indexadores
    categorias?:string[]
    idioma?:string

    constructor (id:string, title:string, sinopse:string, editora:string, autores:string[]) {
        this.id = id;
        this.titulo = title;
        this.sinopse = sinopse;
        this.editora = editora;
        this.autores = autores;

    }
    

    //ADICIONAR COSTRUCTOR
}