Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        height     : 200,
        width      : 200,
        layout     : 'fit',
        autoScroll : true,
        border     : false,
        items      : [
            {
                title : 'Panel1',
                html   : 'I fit in my parent!',
                frame  : true
            }
        ]
    }).show();

});
