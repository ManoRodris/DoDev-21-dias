let nome = prompt('Insira o seu nome: ');
let idade = parseInt(prompt('Insira sua idade: '));
let altura = parseFloat(prompt('Insira sua altura: '));
let peso = parseFloat(prompt("Insira seu peso: "));

let anoNascimento = 2024 - idade;

let imc = (peso/Math.pow(altura, 2)).toFixed(2);

console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + altura + " de altura, pesa " + peso + "kg e seu IMC é " + imc + "Kg/m2");