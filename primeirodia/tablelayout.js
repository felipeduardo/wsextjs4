Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height       : 300,
        width        : 300,
        border       : false,
        autoScroll   : true,
        id           : 'myWin',
        title        : 'A Window with a Table layout',
        layout       : {
            type : 'table',
            columns : 3
        },
        defaults : {
            height : 50,
            width  : 50
        },
        items : [
            {
                html : '1'
            },
            {
                html : '2'
            },
            {
                html : '3'
            },
            {
                html : '4'
            },
            {
                html : '5'
            },
            {
                html : '6'
            },
            {
                html : '7'
            },
            {
                html : '8'
            },
            {
                html : '9'
            }
        ]
    }).show();
});