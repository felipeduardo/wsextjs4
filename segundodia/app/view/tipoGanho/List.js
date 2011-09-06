Ext.require(['WSExt.view.AbstractList']);

Ext.define('WSExt.view.tipoGanho.List' ,{
    extend: 'WSExt.view.AbstractList',
    alias : 'widget.tipoGanhoList',
    store: 'TipoGanhos',
    title : 'Lista dos tipos de ganho',
    
    initComponent: function(){
        
        this.columns = [
            Ext.create('Ext.grid.RowNumberer'),
            {header: 'ID',  dataIndex: 'id',  flex: 1},
            {header: 'Nome',  dataIndex: 'nome',  flex: 1}
        ];
        
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'TipoGanhos',
            dock: 'bottom',
            displayInfo: true
        }];
        
        this.callParent();
    }
    
});