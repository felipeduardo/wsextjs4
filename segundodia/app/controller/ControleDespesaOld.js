Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.ControleDespesa', {
    extend: 'Ext.app.Controller',
    stores: ['ControleDespesas'],
    models: ['ControleDespesa'], 
	
    views: [
    'controleDespesa.List',
    'controleDespesa.Edit'
    ],
    
    refs: [
    {
        ref:'controleDespesaEdit', 
        selector:'controleDespesaEdit'
    },
    {
        ref:'controleDespesaList', 
        selector:'controleDespesaList'
    }
    ],

    init: function() {
        this.control({
            'controleDespesaList': {
                itemdblclick: this.edit
            },

            'controleDespesaList button[action=insert]': {
                click: this.insert
            },
            
            'controleDespesaList button[action=edit]': {
                click: this.edit
            },

            'controleDespesaList button[action=destroy]': {
                click: this.destroy
            },
            
            'controleDespesaList button[action=refresh]': {
                click: this.refresh
            },

            'controleDespesaEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    refresh: function(){
        this.getControleDespesaList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('controleDespesaEdit');
        view.setTitle('Inserindo novo controle de controleDespesa');
    },
    
    destroy: function() {
        
        var grid    = this.getControleDespesaList(),
            records = grid.getSelectionModel().getSelection();

        if(records.length === 0){
            Ext.Msg.alert('Atenção', 'Nenhum registro selecionado');
            return false;
        }else{
            Ext.Msg.show({
                title : 'Confirmação',
                msg : 'Tem certeza que deseja deletar o(s) registro(s) selecionado(s)?',
                buttons : Ext.Msg.YESNO,
                icon : Ext.MessageBox.WARNING,
                scope : this,
                width : 450,
                fn : function(btn, ev){
                    if (btn == 'yes') {
                        var store = this.getControleDespesaList().store;
                        store.remove(records);
                        this.getControleDespesaList().store.sync();
                    }
                }
            });
        }
    },

    save: function(button) {	
        
        var win     = button.up('window'),
            form    = win.down('form').getForm(),
            id      = form.getRecord() ? form.getRecord().get('id') : 0;
        
        if (form.isValid()) {
            var record = form.getRecord(),
                values = form.getValues();

            if (record){
                if(record.data['id']){
                    record.set(values);
                }
            } else{
                var record = Ext.create('WSExt.model.ControleDespesa');
                record.set(values);
                this.getControleDespesaList().store.add(record);
            }

            win.close();
            this.getControleDespesaList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getControleDespesaList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('controleDespesaEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
            console.log(record);
        }else{
            return;
        }		
    }

});