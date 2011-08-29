

var getNome = function(){
    console.log('Meu nome é ' + this.nome + 
        ' e minha idade é ' + this.idade);
};

var pessoa = {
    nome : 'Zaedy',
    idade: 24
};

getNome.call(pessoa);

