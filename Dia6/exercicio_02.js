let num = Number(prompt("Informe um numero: "));

for (let n = num; n < (num+3); n++) {
    for (let i = 1; i <= 10; i++) {
        resultado = n * i;
        console.log(n +" X "+ i + " = "+ resultado)
        if (i == 10) {
            console.log("\n")
        }
    }
}