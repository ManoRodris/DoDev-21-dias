let fome = prompt("Informe se você esta com fome (sim/não): ").toLowerCase().trim() === "sim"
let dinheiro = prompt("Informe se você tem dinheiro (sim/não): ").toLowerCase().trim() === "sim"
let restaurante = prompt("Informe se o restaurante esta aberto (sim/não): ").toLowerCase().trim() === "sim"

if (fome == false || dinheiro == false) {
    console.log("Hoje a janta será em casa")
} else if ((fome == true && dinheiro == true) && restaurante == false) {
    console.log("Peça um delivery!")
} else {
    console.log("Hoje o jantar será no seu restaurante preferido!")
}

