    Ext.define('MotoristaMixin', {
        constructor : function() {
            this.isDriver = true;
            this.callParent();
        },
        drive : function(){
            this.freio();
        },
        freio : function() {
            console.warn(this.nome, ' está freiando!');
        }
    });


    Ext.define('PilotoMixin', {
        pilotar : function() {
            this.decolar();
        },
        decolar : function() {
            console.info(this.nome, ' está decolando!');
        }
    });

    Ext.define('Pessoa', {
        mixins : {
            motorista  : 'MotoristaMixin',
            piloto : 'PilotoMixin'
        },
        constructor : function(cfg) {
            Ext.apply(this, cfg || {});
            this.mixins.motorista.constructor.call(this);
            this.callParent();
        },
        andar : function() {},
        falar : function() {},
        dirigir : function() {
            console.log(this.nome, ' está dirigindo');
            //this.mixins.motorista.drive.call(this);
            
        }
    });

var pessoa = new Pessoa({ nome : 'Zaedy' });
pessoa.drive();
pessoa.dirigir();
pessoa.pilotar();
console.log(pessoa.isDriver);