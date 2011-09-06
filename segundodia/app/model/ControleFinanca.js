Ext.define('WSExt.model.ControleFinanca', {
    extend: 'Ext.data.Model',
    fields: [
    {
        name: 'id'
    }, 
    {
        name: 'valor',
        type: 'float'
    },
    {
        name: 'data',
        type: 'date', 
        dateFormat:'Y-m-d'
    }
    ,{
        name: 'tipo_despesa_ganho_id'
    }
    ]
});