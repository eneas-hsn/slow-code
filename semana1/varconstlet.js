//Escopo global
var idade="21" //escopo global
const nome="mateus" //escopo local imutável
let sobrenome="oliveira" //escopo local

//Escopo local, pode ler tudo do global
if(true){
    var idade="22"
    const nome="joao"
    let sobrenome="silva"
    nome="lucas" //vai dar erro, const não é mutável
    sobrenome="souza"

    console.log(idade,nome,sobrenome) //22 joao souza
}

console.log(idade,nome,sobrenome) //22 mateus oliveira

