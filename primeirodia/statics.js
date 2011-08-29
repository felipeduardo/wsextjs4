Ext.onReady(function(){
    Ext.define('MinhaApp.MinhaPessoa', {
    
        statics: {
            instanceCount : 0 // MinhaApp.MinhaPessoa.instanceCount = 0
        },
    
        config: {
            nome    : 'Zaedy',
            idade   : 24
        },
    
        mensagem: 'Hello World',
    
        constructor: function(cfg){
            Ext.apply(this, cfg || {});
        
            var statics = this.statics(),
            contadorInstancia = statics.instanceCount;
            
            console.log(contadorInstancia);    
        
            //self referencia a propria classe
            this.self.instanceCount++;
        
            this.callParent();
        },
    
        sayHello: function(){
            console.info("Meu nome é " + 
                this.getNome() + " e " + this.mensagem);
        }
    });

    var pessoa = Ext.create('MinhaApp.MinhaPessoa');
    var pessoa2 = Ext.create('MinhaApp.MinhaPessoa');

    console.dir(MinhaApp.MinhaPessoa);

});

