Ext.require(['WSExt.view.AbstractForm']);
Ext.require(['WSExt.view.AbstractWindow']);

Ext.define('WSExt.view.tipoGanho.Edit', {
    extend: 'WSExt.view.AbstractWindow',
    alias : 'widget.tipoGanhoEdit',
    title : 'Edição de tipo de ganho',

    initComponent: function() {
    	
        this.items = [{
            xtype: 'abstractform',
            items: [{
                name : 'nome',
                fieldLabel: 'Nome'
            }]}
        ];

        this.callParent(arguments);
    }
});