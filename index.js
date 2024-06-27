const prompt = require("prompt-sync")({ sigint: true });
let base = +prompt("Digite a BASE da operção")
let expoente = +prompt("Digite o EXPOENTE da operção")

base = parseFloat(base)
expoente = parseFloat(expoente)
let resultado = Math.pow(base, expoente);
console.log(`O resultado de ${base} elevado a 
${expoente} é ${resultado}`)


