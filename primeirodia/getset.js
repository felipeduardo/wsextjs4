Ext.onReady(function(){
    
    Ext.define('MinhaApp.MinhaPessoa', {
    
        config: {
            nome    : 'Zaedy',
            idade   : 24
        },
    
        mensagem: 'Hello World',
    
        constructor: function(cfg){
            Ext.apply(this, cfg || {});
            this.callParent();
        },
    
        sayHello: function(){
            console.info("Meu nome é " + 
                this.getNome() + " e " + this.mensagem);
        }
    });

    var pessoa = Ext.create('MinhaApp.MinhaPessoa');

    pessoa.setNome('Wesley');
    pessoa.setIdade(28);
    pessoa.sayHello();

});
