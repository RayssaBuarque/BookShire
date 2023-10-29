
//modelo de anuncio adaptado para retornos de multiplas apis
export class Anuncio{
    // ! == vou lidar com a propriedade vazia por enquanto
    // ? == essa propriedade é opcional

    Id_anuncio!:string
    Id_livro!:string
    Id_usuario!:string
    
    transacao!:string
    preco!:string
    criacao!:string
    descricao!:string
    situacao!:string
    local!:string

    status!:string

    constructor(
        Id_anuncio:string,
        Id_livro:string,
        Id_usuario:string,
    
        transacao:string,
        preco:string,
        criacao:string,
        descricao:string,
        situacao:string,
        local:string,

        status:string
    ){
        this.Id_anuncio = Id_anuncio,
        this.Id_livro = Id_livro,
        this.Id_usuario = Id_usuario,
    
        this.transacao = transacao,
        this.preco = preco,
        this.criacao = criacao,
        this.descricao = descricao,
        this.situacao = situacao,
        this.local = local,

        this.status = status
    }
}