let nome = prompt("Informe seu nome: ")
let idade = parseInt(prompt("Informe a sua idade: "))
let carteira = prompt("Possui CNH? (sim/não)").toLowerCase().trim() === "sim"
let carro = prompt("Possui carro? (sim/não)").toLowerCase().trim() === "sim"

if (idade < 18 || carteira == false) {
    console.log(nome + ", você não pode dirigir")
} else if ((idade >= 18 && carteira == true) && carro == false) {
    console.log(nome + ", você pode dirigir mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista")
}



