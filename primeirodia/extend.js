

Ext.define('MinhaApp.meu.A', {
    constructor: function(test) {
        alert(test);
    }
});

Ext.define('MinhaApp.meu.B', {
    extend: 'MinhaApp.meu.A',
    constructor: function(test) {
        alert(test);
        this.callParent([test + 1]);
    }
});

Ext.define('MinhaApp.meu.C', {
    extend: 'MinhaApp.meu.B',
    constructor: function() {
        alert("Going to call parent's overriden constructor...");
        this.callParent(arguments);
    }
});

var a = new MinhaApp.meu.A(1);
var b = new MinhaApp.meu.B(1);
var c = new MinhaApp.meu.C(2);

