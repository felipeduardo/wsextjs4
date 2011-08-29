
var pessoa = {
    nome : 'Zaedy',
    getNome: function(idade){
        console.log('Meu nome é ' + this.nome + 
        ' e minha idade é ' + idade);
    }
};

var pessoa2 = {
    nome : 'Wesley'
};

pessoa.getNome(24);

pessoa.getNome.call(pessoa2, 28);

