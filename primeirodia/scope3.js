

window.nome = 'Wesley';

var pessoa = {
    nome : 'Zaedy',
    getNome: function(){
        console.log(this);
        console.log(this.nome);
    }
};

var getNome = pessoa.getNome;

getNome();

