Ext.define('WSExt.store.Ganhos', {
    extend: 'Ext.data.Store',
    autoLoad: false,
    remoteSort: false,
    fields: ['total', 'mes'],
    proxy: {
        type: 'ajax',
        url: 'php/financa.php?action=ganho',
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        }
    }
});