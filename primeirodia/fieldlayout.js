Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height      : 300,
        width       : 300,
        bodyStyle   : 'padding: 5px',
        defaultType : 'textfield',
        autoScroll  :  true,
        layout      : {
            type : 'anchor'
        },
        defaults:  {
            labelWidth : 60
        },
        items       : [
            {
                fieldLabel : 'Name',
                anchor     : '-10'
            },
            {
                fieldLabel : 'Age',
                width      : 100
            },
            {
                xtype      : 'combo',
                fieldLabel : 'Location',
                width      : 200,
                store      : [ 'Here', 'There', 'Anywhere' ]
            },
            {
                xtype      : 'textarea',
                fieldLabel : 'Bio'
            },
            {
                xtype          : 'panel',
                labelSeparator : '',
                frame          : true,
                title          : 'Instructions',
                html           : 'Please fill in the form',
                height         : 55
            }
        ]
    }).show();

});