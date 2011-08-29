Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
       height       : 300,
       width        : 300,
        autoScroll : true,
       title    : 'A Container with an HBox layout',
       layout : {
          type :'hbox',
          pack : 'start'
       },
       defaults : {
          frame : true
       },
       items : [
          {
             title  : 'Panel 1',
             width : 50,
             height : 100
          },
          {
             title  : 'Panel 2',
             height : 75,
             width  : 100
          },
          {
             title  : 'Panel 3',
             width : 75,
             height : 200
          }
       ]
    }).show();

});


Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height : 300,
        width  : 300,
        title  : 'A Container with an HBox layout',
        layout : {
            type  : 'hbox',
            pack  : 'end'
        },
        defaults : {
            frame : true,
            width : 75
        },
        items : [
            {
               title  : 'Panel 1',
               height : 100
            },
            {
               title  : 'Panel 2',
               height : 75,
               width  : 100
            },
            {
               title  : 'Panel 3',
               height : 200
            }
        ]
    }).show();


});

Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height : 300,
        width  : 300,
        title  : 'A Container with an HBox layout',
        layout : {
            type  : 'hbox',
            pack  : 'center'
        },
        defaults : {
            frame : true,
            width : 75
        },
        items : [
            {
               title  : 'Panel 1',
               height : 100
            },
            {
               title  : 'Panel 2',
               height : 75,
               width  : 100
            },
            {
               title  : 'Panel 3',
               height : 200
            }
        ]
    }).show();


});

Ext.onReady(function() {

Ext.create('Ext.window.Window', {
    height : 300,
    width  : 300,
	title  : 'A Container with an HBox layout',
    layout : {
        type  : 'hbox',
        align : 'stretchmax'
    },
    defaults : {
        frame : true
    },
    items : [
        {
            title : 'Panel 1',
            flex  : 1,
            height : 150
        },
        {
            title : 'Panel 2',
            width: 50,
            height : 100
        },
        {
            title : 'Panel 3',
            width: 100,
            height : 200
        }
    ]
}).show();


});