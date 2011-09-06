Ext.define('WSExt.model.ControleDespesa', {
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
        name: 'tipo_despesa_id'
    }
    ]
});