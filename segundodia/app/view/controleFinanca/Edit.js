Ext.require(['WSExt.view.tipoDespesaGanho.Combo']);

Ext.define('WSExt.view.controleFinanca.Edit', {
    extend: 'Ext.window.Window',
    alias : 'widget.controleFinancaEdit',
    title : 'Edição de controle de financa',
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
            items: [
            {
                xtype: 'numberfield',
                name : 'valor',
                ref: 'valor',
                fieldLabel: 'Valor',
                allowDecimals: true,
                decimalPrecion: 2,
                decimalSeparator: '.',
                allowBlank: false
            }
            ,
            {
                xtype: 'datefield',
                name : 'data',
                ref: 'data',
                fieldLabel: 'data',
                maxValue: new Date(),
                format: 'd/m/Y',
                submitFormat: 'Y-m-d',
                allowBlank: false
            }
            ,{
                xtype: 'tipoDespesaGanhoCombo'
            }
            ]
        }
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