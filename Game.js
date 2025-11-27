class Game{
    constructor(client){
        this.client = client
    }

    msg(){
        console.log(`O ${this.client.tipo} atacou usando ${this.client.atacar()}`);
    }
}

module.exports = Game;