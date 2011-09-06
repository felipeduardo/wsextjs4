Ext.require('WSExt.controller.AbstractController');

Ext.define('WSExt.controller.ControleDespesa',{
    
    extend: 'WSExt.controller.AbstractController',
    stores: ['ControleDespesas'],
    models: ['ControleDespesa'],
    editWidget: 'controleDespesaEdit',
    gridWidget: 'controleDespesaList',
    editTitle: 'Edição de controle de despesa',
    insertTitle: 'Cadastro de controle de despesa',
    modelClass: 'WSExt.model.ControleDespesa',
    
    views: [
        'controleDespesa.List',
        'controleDespesa.Edit'
    ],
    
    refs: [
        {
            ref: 'gridList',
            selector: 'controleDespesaList'
        }
        ,{
            ref: 'formEdit',
            selector: 'controleDespesaEdit'
        }
    ],
    
    init: function(){
        this.control({
            'controleDespesaList': {
                itemdblclick: this.edit
            },
            
            'controleDespesaList button[action=insert]':{
                click: this.insert
            },
            
            'controleDespesaList button[action=edit]':{
                click: this.edit
            },
            
            'controleDespesaList button[action=destroy]':{
                click: this.destroy
            },
            
            'controleDespesaList button[action=refresh]':{
                click: this.refresh
            },
            
            'controleDespesaEdit button[action=save]': {
                click: this.save
            }
        })
    },
    
    refresh: function(){
        console.log('meu refresh');
        this.callParent();
    }
    
});