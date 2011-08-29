Ext.onReady(function() {

var myWin = Ext.create('Ext.window.Window', {
	height     : 300,
	width      : 300,
	layout     : 'anchor',
	autoScroll : true,
	border     : false,
	anchorSize : '400',
	items      : [
		{
			title  : 'Panel1',
			anchor : '100%, 25%',
			frame  : true
		},
		{
			title  : 'Panel2',
			anchor : '0, 50%',
			frame  : true
		},
		{
			title  : 'Panel3',
			anchor : '50%, 25%',
			frame  : true
		}
	]

});

myWin.show();

});



Ext.onReady(function() {


    Ext.create('Ext.window.Window', {
        height     : 300,
        width      : 300,
        layout     : 'anchor',
        autoScroll : true,
        id         : 'myWin',
        anchorSize : {
        	width: '100',
        	height: '100',
        },
        items      : [
            {
                title     : 'Panel1',
                anchor    : '-50, -150',
                frame     : true
            },
            {
                title     : 'Panel2',
                anchor    : '-10, -150',
                frame     : true
            }
        ]
    }).show();


});


Ext.onReady(function() {

    Ext.create('Ext.window.Window', {
        height     : 300,
        width      : 300,
        layout     : 'anchor',
        autoScroll : true,
        id         : 'myWin',
        border     : false,
        anchorSize : '400',
        items      : [
            {
                title     : 'Panel1',
                anchor    : '-50, -150',
                frame     : true
            },
            {
                title     : 'Panel2',
                height    : 150,
                anchor    : '-10',
                frame     : true
            }
        ]
    }).show();

});

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
