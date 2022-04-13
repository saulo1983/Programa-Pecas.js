var listaDePecas = ["Amortecedor", "Motor", "Filtro de Ar", "Embreagem", "Filtro de Combustível", "Pneu", "Aro", "Volante", "Lanterna Traseira", "Capô", "Retrovisor" ]
console.log(listaDePecas.length+ " unidades é a quantidade de peças que há no almoxarifado");
let peso = 120
if (peso < 100) {
    console.log("A peça deve pesar no mínimo 100g")
} else {
    console.log("A peça possui peso adequado")
}
if (listaDePecas.length < 10) {
    console.log ("É possível cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}
let nomePeca = "Mo"
if (nomePeca.length > 3) {
    console.log("Nome da peça está adequado para o cadastro")
} else if (nomePeca.length == 0) {
    console.log("O nome da peça não pode ser vazio")
} else {
    console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
} 
