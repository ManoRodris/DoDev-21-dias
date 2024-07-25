let servico = prompt("Deseja abastecer com gasolina/abastecer com álcool/calibrar os pneus? (1/2/3) ").trim();

switch (servico) {
    case "1":
        var valor = Number(prompt("Insira o valor que deseja abastecer: "));
        let gasolina = (valor/5).toFixed(2);
        console.log("Foram abastecidos " + gasolina + " litros de gasolina")
        break;
    case "2":
        valor = Number(prompt("Insira o valor que deseja abastecer: "));
        let alcool = (valor/3).toFixed(2);
        console.log("Foram abastecidos " + alcool + " litros de alcool");
        break;
    case "3":
        console.log("Pneus calibrados com sucesso");
        break;
}