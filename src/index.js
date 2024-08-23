let nome = "richard";
let quantExp = "7000";
let nivel = "";

if (quantExp < 1000) {
    nivel = "ferro";
}else if (quantExp >= 1001 && quantExp <=2000 ){
    nivel = "bronze";
}else if (quantExp >= 2001 && quantExp <= 5000){
    nivel = "prata";
}else if (quantExp >=5001 && quantExp <= 7000){
    nivel = "ouro";
}else if (quantExp >= 7001 && quantExp <= 8000){
    nivel = "platina";
}else if (quantExp >= 8001 && quantExp <= 9000){
    nivel = "ascendente";
}else if (quantExp >= 9001 && quantExp <= 10000){
    nivel = "imortal";
}else if (quantExp >= 10001){
    "radiante";
}else {
    console.log("valor errado");
}

console.log("O heroi de nome " + nome + " esta no nivel de "+ nivel);