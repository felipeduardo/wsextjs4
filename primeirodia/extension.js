Ext.onReady(function(){
    
    Ext.create('Ext.panel.Panel', {
        width: 100,
        height: 100,
        html: 'Hello',
        autoShow: true,
        border: false,
        renderTo: Ext.getBody()
    });

    Ext.create('Ext.container.Container', {
        width: 100,
        height: 100,
        html: 'Hello',
        autoShow: true,
        renderTo: Ext.getBody()
    });

});