let num1 = Number(prompt("Informe um numero: "));
let num2 = Number(prompt("Informe outro numero: "));
let operacao = prompt("Informe qual operacao deseja fazer com esses numeros (+,-,/,*): ").trim();

switch (operacao) {
    case "+":
        resultado = num1 + num2;
        console.log(num1 +" + "+ num2 + " = "+ resultado)
        break;
    case "-":
        resultado = num1 - num2;
        console.log(num1 +" - "+ num2 + " = "+ resultado)
        break;
    case "/":
        resultado = num1 / num2;
        console.log(num1 +" / "+ num2 + " = "+ resultado)
        break;
    case "*":
        resultado = num1 * num2;
        console.log(num1 +" * "+ num2 + " = "+ resultado)
        break;  
}