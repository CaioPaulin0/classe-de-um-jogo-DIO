const Heroi = require("./Heroi.js")
const Game = require("./Game.js")

const meuHeroi = new Heroi("nome-do-heroi", 18, "tipo = guerreiro/mago/monge/ninja")
const game = new Game(meuHeroi);


game.msg();