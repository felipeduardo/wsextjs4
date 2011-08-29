Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height       : 200,
        width        : 300,
        border       : false,
        title        : 'A Window with an accordion layout',
        layout       : {
            type: 'accordion',
            multi: true
        }, 
        items : [
            {
                xtype       : 'form',
                title       : 'General info',
                bodyStyle   : 'padding: 5px',
                defaultType : 'textfield',
                layout      : {
                    type : 'anchor'
                },
                defaults : {
                    labelWidth  : 50
                },
                items       : [
                    {
                        fieldLabel : 'Name',
                        anchor     : '-10'
                    },
                    {
                        xtype      : 'numberfield',
                        fieldLabel : 'Age',
                        width      : 110
                    },
                    {
                        xtype      : 'combo',
                        fieldLabel : 'Location',
                        anchor     : '-10',
                        store      : [ 'Here', 'There', 'Anywhere' ]
                    }
                ]
            },
            {
                xtype  : 'panel',
                title  : 'Bio',
                layout : 'fit',
                items  : {
                    xtype : 'textarea',
                    value  : 'Tell us about yourself'
                }
            },
            {
                title : 'Instructions',
                html  : 'Please enter information.',
                tools : [
                    {id : 'gear'}, {id:'help'}
                ]
            }
        ]
    }).show();
});