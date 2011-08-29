
Ext.define('MyApp.MyPlugin', {
    extend : 'Ext.AbstractPlugin',
    alias  : 'plugin.MyApp.MyPlugin',
    init : function(cmp) {
        this.cmp = cmp;
        Ext.apply(cmp, this.cmpOverrides);
    },
    cmpOverrides : {
        slideOut : function() {
            this.el.animate({
                duration : 1000,
                to : {
                    y : (this.getHeight() * -1) - 5,
                    x : this.el.getLeft()
                }
            });
        }
    }
});




Ext.onReady(function() {
    Ext.create('Ext.window.Window', {
        renderTo : Ext.getBody(),
        height   : 150,
        width    : 200,
        plugins  : {
            ptype : 'MyApp.MyPlugin'
        },
        items : [
            {
                html  : 'Panel 1',
                title : 'Panel 1 title'
            },
            {
                html  : 'Panel 2',
                title : 'Panel 1 title'
            }
        ],
        buttons  : [
            {
                text    : 'Click me',
                handler : function() {
                    this.ownerCt.ownerCt.slideOut();
                }
            }
        ]
    }).show();
});
