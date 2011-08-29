Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height : 300,
        width  : 300,
        title  : 'A Container with a VBox layout',
        layout : {
            type  : 'vbox',
            pack  : 'center'
        },
        defaults : {
            frame : true
        },
        items : [
            {
                title : 'Panel 1',
                flex  : 1
            },
            {
                title : 'Panel 2',
                flex  : 1
            },
            {
                title : 'Panel 3',
                flex  : 1
            }
        ]
    }).show();


});

Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
       height : 300,
       width  : 300,
       title  : 'A Container with a VBox layout',
       layout : {
            type  : 'vbox',
            pack  : 'end',
            align : 'center'
       },
       defaults : {
          frame : true
       },
       items : [
          {
             title  : 'Panel 1',
             width : 100
          },
          {
             title  : 'Panel 2',
             width  : 75,
             height : 100
          },
          {
             title  : 'Panel 3',
             width  : 200
          }
       ]
    }).show();

});