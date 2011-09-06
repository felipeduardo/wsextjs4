Ext.define('WSExt.store.TipoDespesaGanhos',{
    extend: 'Ext.data.Store',
    model: 'WSExt.model.TipoDespesaGanho',
    autoLoad: false,
    remoteSort: false,
    proxy: {
        simpleSortMode: true,
        type: 'ajax',
        api: {
            read: 'php/tipoDespesaGanhos.php?action=fetchAll',
            create: 'php/tipoDespesaGanhos.php?action=insert',
            update: 'php/tipoDespesaGanhos.php?action=update',
            destroy: 'php/tipoDespesaGanhos.php?action=delete'
        },
        actionMethods: {
            read: 'POST',
            create: 'POST',
            update: 'POST',
            destroy: 'POST'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true,
            encode: true,
            root: 'data'
        },
        extraParams: {
            start: 'start',
            limit: 'limit',
            sort: 'nome',
            dir: 'ASC',
            total: 'total'
        }
    },
    listerners:{
        write: function(proxy, operation){
            
            var obj = Ext.decode(operation.response.responseText);
            
            if(obj.success){
                Ext.ux.Msg.flash({
                    msg: obj.message,
                    type: 'success'
                });
            }else{
                Ext.ux.Msg.flash({
                    msg: obj.message,
                    type: 'error'
                });
            }
        }
    }
    
});

