class Heroi{
    constructor(nome,idade,tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    getTipo(){
        return this.tipo;
    }

    atacar(){
        if(this.tipo === "mago"){
            return "usou magia"
        }
        if(this.tipo === "guerreiro"){
            return "usou espada"
        }
        if(this.tipo === "monge"){
            return "usou artes marciais"
        }
        if(this.tipo === "ninja"){
            return "usou shuriken"
        }
    }
}

module.exports = Heroi;