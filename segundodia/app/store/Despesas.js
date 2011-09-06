Ext.define('WSExt.store.Despesas', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    remoteSort: false,
    fields: ['total', 'mes'],
    proxy: {
        type: 'ajax',
        url: 'php/financa.php?action=despesa',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});