const  nome = "lucas";
let nome1 = "";
let Pessoa ={
    nome : "mauricio",
    idade : "28",
    trabalho : "progamador",
}
let pessoasListaVasia = [];
let nomes = ["lucas","isis","mauricio"];
let pessoas = [
    
        {
            nome : "mauricio",
            idade : "28",
            trabalho : "progamador",
        } ,
    
    
        {
            nome : "lucas",
            idade : "28",
            trabalho : "progamador",
        },
        {
            nome : "thalita",
            idade : "24",
            trabalho : "tecnica em enfermagem",
        }
    
];
function adcionarPassoa(pessoa){
    pessoas.push(pessoa);
}

function alteraMome(){
    nome1 = "isis Emanuelly";
    console.log("valor alterado");
    console.log(nome1);

}

function receberEalteraNome(novoNome){
    nome1 = novoNome;
    console.log("valor alterado e receber um nome");
    console.log(nome1);
}


function imprimiPessoa(pessoa){
    console.log("nome");
    console.log(Pessoa.nome);
    console.log("idade");
    console.log(Pessoa.idade);
    console.log("trabalho");
    console.log(Pessoa.trabalho);

}

adcionarPassoa({
    nome : "mauricio",
    idade : 28,
    trabalho : "progamador"

})
//imprimiPessoa(Pessoa);
//console.log(pessoas);
function imprimiPessoas(){
    pessoas.forEach((item)=>{
        console.log("nome:");
        console.log(item.nome);

        console.log("idade:");
        console.log(item.idade);

        console.log("trabalho:");
        console.log(item.trabalho);

    })

}
imprimiPessoas();
//imprimiPessoa({
 //   nome : "Lucas",
 //   idade : "01",
 //   trabalho : "progamador full stack",
//});


//alteraMome();
//receberEalteraNome("luiz nascimento");