Ext.require(['WSExt.view.tipoGanho.ComboRenderer']);

Ext.define('WSExt.view.controleGanho.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.controleGanhoList',
    store: 'ControleGanhos',
    title : 'Lista dos controles de ganho',
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    tbar :[
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
        itemId: 'edit',
        disabled: true
    },
    {
        text: 'Excluir',
        action: 'destroy',
        iconCls: 'delete',
        itemId: 'delete',
        disabled: true
    }
    ,{
        text: 'Recarregar dados',
        action: 'refresh',
        iconCls: 'refresh',
        itemId: 'refresh'
    }
    ],
    
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: 'ControleGanhos',
        dock: 'bottom',
        displayInfo: true
    }],
    
    initComponent: function(){
        
        this.columns = [
        Ext.create('Ext.grid.RowNumberer'),
        {
            header: 'ID',  
            dataIndex: 'id',  
            flex: 1
        },

        {
            header: 'Valor',  
            dataIndex: 'valor',  
            flex: 1, 
            format:'0.00', 
            renderer: Ext.util.Format.valorRenderer
        },
        {
            header: 'Data',  
            dataIndex: 'data',  
            flex: 1, 
            xtype:'datecolumn', 
            format:'d/m/Y'
        },

        {
            header: 'Tipo de ganho',  
            dataIndex: 'tipo_ganho_id',  
            flex: 1,
            field: Ext.create('WSExt.view.tipoGanho.ComboRenderer'),
            renderer: function (value, metadata, record, rowIndex, colIndex, store) {
                var idx = this.columns[colIndex].field.store.find('id', value);
                return idx !== -1 ? this.columns[colIndex].field.store.getAt(idx).get('nome') : '';
            }
        }
        ];
        
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    
    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    },
    
    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }
   
});