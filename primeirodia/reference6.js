

var a = {
    nome : 'Zaedy'
};

var minhaFuncao = function(pessoa){
    pessoa.nome = 'Wesley';
};

minhaFuncao(a);

console.info(a.nome);