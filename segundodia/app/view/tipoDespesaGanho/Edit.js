Ext.define('WSExt.view.tipoDespesaGanho.Edit',{
    extend: 'Ext.window.Window',
    alias: 'widget.tipoDespesaGanhoEdit',
    title: 'Edição de tipo de ganho e despesa',
    layout: 'fit',
    autoShow: true,
    modal: true,
    
    initComponent: function(){
        
        this.items = [
            {
                xtype: 'form',
                defaultType: 'textfield',
                defaults: {
                    anchor: '100%'
                },
                items: [
                    {
                        name: 'nome',
                        fieldLabel: 'Nome',
                        allowBlank: false
                    }
                ]
            }
        ]
        
        this.callParent(arguments);
    }
});

