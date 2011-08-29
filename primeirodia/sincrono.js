Ext.Loader.setPath('Ext', './extjs/src');

Ext.onReady(function(){
    
    Ext.create('Ext.Window', {
        width: 100,
        height: 100,
        html: 'Hello',
        autoShow: true,
        renderTo: Ext.getBody()
    });

});