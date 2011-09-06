Ext.define('WSExt.view.tipoDespesaGanho.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.tipoDespesaGanhoList',
    store: 'TipoDespesaGanhos',
    title: 'Lista dos ganhos e despesas',
    selModel: { mode: 'MULTI' },
    columnLines: true,
    tbar: [
        {
            text: 'Incluir',
            action: 'insert',
            iconCls: 'add',
            itemId: 'insert'
        }
        ,{
            text: 'Editar',
            action: 'edit',
            iconCls: 'edit',
            itemId: 'edit'
        }
        ,{
            text: 'Excluir',
            action: 'destroy',
            iconCls: 'delete',
            itemId: 'delete'
        }
        ,{
            text: 'Refresh',
            action: 'refresh',
            iconCls: 'refresh',
            itemId: 'refresh'
        }
    ],
    columns: [
        {
            header: 'ID',
            dataIndex: 'id',
            flex: 1
        }
        ,{
            header: 'Nome',
            dataIndex: 'nome',
            flex: 1
        }
    ],
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            store: 'TipoDespesaGanhos',
            dock: 'bottom',
            displayInfo: true
        }
    ],
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    }
});