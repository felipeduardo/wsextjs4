Ext.onReady(function() {
    var topToolbar = {
        xtype  : 'toolbar',
        dock   : 'top',
        height : 70,
        width : 80,
        items  :  [
          'Top Toolbar'
       ]
    };
    var bottomToolbar = {
        xtype  : 'toolbar',
        dock   : 'bottom',
        height : 70,
        items  :  [
          'Bottom Toolbar'
       ]
    };
    var leftToolbar  = {
        xtype : 'toolbar',
        dock  : 'left',
        width : 50,
        items :  [
            'Left<br /> Toolbar'
       ]
    };
    var rightToolbar  = {
        xtype : 'toolbar',
        dock  : 'right',
        width : 50,
        items :  [
            'Right<br /> Toolbar'
       ]
    };
    
    Ext.create('Ext.Panel', {
        renderTo    : Ext.getBody(),
        height      : 300,
        width       : 300,
        html        : 'Panel body here',
        dockedItems : [
            leftToolbar,
            bottomToolbar,
            topToolbar,
            rightToolbar
        ]
    }).show();

});
