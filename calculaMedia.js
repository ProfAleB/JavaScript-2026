let nota1 = 6;
let nota2 = 4;
let nota3 = 10;
let nota4 = 10;

const nomeAluno = "Valdemar";

let media = (nota1 + nota2 + nota3 + nota4) / 4

if (media >= 7){
    console.log("O aluno " + nomeAluno + " está aprovado")
} 
if (media >= 5 && media < 7){
    console.log("O aluno " + nomeAluno + " está de se liga")
}
if (media < 5){
    console.log("O aluno " + nomeAluno + " está reprovado")
}

// console.log("O aluno: " + nomeAluno);
// console.log("Tem a média: " + media);
