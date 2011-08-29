Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height     : 300,
        width      : 300,
        layout     : 'absolute',
        autoScroll : true,
        items      : [
            {
                title : 'Panel1',
                x      : 50,
                y      : 50,
                height : 100,
                width  : 100,
                html   : 'x: 50, y:100',
                frame  : true
            },
            {
                title  : 'Panel2',
                x      : 90,
                y      : 120,
                height : 75,
                width  : 75,
                html   : 'x: 90, y: 120',
                frame  : true
            }
        ]
    }).show();

});