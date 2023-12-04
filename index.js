class heroi {
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
     atacar(){
        let ataque;
        switch(this.tipo){
            case "mago":
                ataque = " magia";
                break;
            case "guerreiro":
                ataque = " espada";
                break;
            case "monge":
                ataque = " artes marcias";
                break;
            case "ninja":
                ataque = " shuroken";
            }
            const mensagem = `O ${this.tipo} atacou usando: ${ataque}`;
            console.log(mensagem);
 }
}

const heroi1 = new heroi('samurai Jack', 30,'ninja');
heroi1.atacar();

const heroi2 = new heroi('gandalf', 80, 'mago');
heroi2.atacar();