Ext.onReady(function() {

    var myWin = Ext.create('Ext.window.Window', {
        height       : 200,
        width        : 400,
        title        : 'A Window with a Column layout',
        layout       : 'column',
        defaults     : {
            frame : true,
            columnWidth : 1
        },
        items        : [
            {
                title       : 'Col 1',
                id          : 'col1'
            },
            {
                title       : 'Col 2',
                html        : "20% relative width"
            },
            {
                title : 'Col 3',
                html  : "100px fixed width"
            },
            {
                title       : 'Col 4',
                frame       : true,
                html        : "50% relative width"
            }
        ]
    });

myWin.show();
});