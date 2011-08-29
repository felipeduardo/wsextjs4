
var pessoa = {
    nome : 'Zaedy',
    idade: 24,
    getNome: function(palavra1, palavra2){
        console.log('Meu nome é ' + this.nome + 
        ' e minha idade é ' + this.idade);
        console.log('A palavra 1 é ' + palavra1 + 
        ' e a palavra 2 é ' + palavra2);
    }
};


var pessoa2 = {
    nome : 'Wesley',
    idade: 28,
    getNome: function(){
        pessoa.getNome.apply(this, arguments);
    },
    getNome2: function(palavra1, palavra2){
        pessoa.getNome.call(this, palavra1, palavra2);
    }
};

pessoa2.getNome('extjs', 'SON');

