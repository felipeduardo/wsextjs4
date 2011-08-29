
var Pessoa = function(nome){
    this.nome = nome;
};

Pessoa('Zaedy');

var pessoa = new Pessoa('Zaedy');

console.dir(Pessoa);
console.dir(pessoa);

Pessoa.prototype = {
    nome: 'Wesley',
    idade: 30
};

var pessoa2 = new Pessoa('Zaedy');

console.dir(Pessoa);
console.dir(pessoa);
console.dir(pessoa2);

Pessoa.prototype.nome = 'Joao';

delete pessoa2.nome;

console.dir(pessoa2);

