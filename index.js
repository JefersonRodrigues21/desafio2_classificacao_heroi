let nome = "Goku" 
let quant_xp = 10050
let nivel;

if (quant_xp <= 1000) {
    nivel = "Ferro";
} else if (quant_xp <= 2000) {
    nivel = "Bronze";
} else if (quant_xp <= 5000) {
    nivel = "Prata";
} else if (quant_xp <= 7000){
    nivel = "Ouro";
} else if (quant_xp <= 8000) {
    nivel = "Platina";
} else if (quant_xp <= 9000) {
    nivel = "Ascendente";
} else if (quant_xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log(`O herói de nome é ${nome} e está no nível de ${nivel}`)
