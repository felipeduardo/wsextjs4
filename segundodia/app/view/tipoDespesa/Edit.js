Ext.define('WSExt.view.tipoDespesa.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.tipoDespesaEdit',
    title : 'Edição de tipo de despesa',
    layout: 'fit',
    autoShow: true,
    modal: true,

    initComponent: function() {
    	
        this.items = [{
            xtype: 'form',
            style: 'background-color: #fff;',
            fieldDefaults: {
                anchor: '100%',
                labelAlign: 'left',
                labelWidth: 150,
                allowBlank: false,
                combineErrors: false,
                msgTarget: 'side'
            },
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                xtype: 'textfield',
                name : 'nome',
                ref: 'nome',
                fieldLabel: 'Nome',
                allowBlank: false
            }]}
        ];

        this.buttons = [{
            text: 'Salvar',
            action: 'save',
            iconCls: 'save'
        },
        {
            text: 'Cancelar',
            scope: this,
            iconCls: 'cancel',
            handler: this.close
        }];

        this.callParent(arguments);
    }
});