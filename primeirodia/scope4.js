

var pessoa = {
    nome : 'Zaedy',
    getNome: function(){
        console.log(this);
        console.log(this.nome);
    }
};

var pessoa2 = {
    nome : 'Wesley',
    getNome: pessoa.getNome
};

pessoa2.getNome();
