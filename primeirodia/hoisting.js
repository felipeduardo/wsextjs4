var nome = 'Zaedy';

var getNome = function(){
    console.log(nome);
    var nome = 'Wesley';
};

getNome();

var nome = 'Zaedy';

var getNome = function(){
    var nome;
    console.log(nome);
    nome = 'Wesley';
    console.log(nome);
};

getNome();