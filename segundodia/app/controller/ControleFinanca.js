Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.ControleFinanca', {
    extend: 'Ext.app.Controller',
    stores: ['ControleFinancas'],
    models: ['ControleFinanca'], 
	
    views: [
    'controleFinanca.List',
    'controleFinanca.Edit'
    ],
    
    refs: [
    {
        ref:'controleFinancaEdit', 
        selector:'controleFinancaEdit'
    },
    {
        ref:'controleFinancaList', 
        selector:'controleFinancaList'
    }
    ],

    init: function() {
        this.control({
            'controleFinancaList': {
                itemdblclick: this.edit
            },

            'controleFinancaList button[action=insert]': {
                click: this.insert
            },
            
            'controleFinancaList button[action=edit]': {
                click: this.edit
            },

            'controleFinancaList button[action=destroy]': {
                click: this.destroy
            },
            
            'controleFinancaList button[action=refresh]': {
                click: this.refresh
            },

            'controleFinancaEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    refresh: function(){
        this.getControleFinancaList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('controleFinancaEdit');
        view.setTitle('Inserindo novo controle de controleFinanca');
    },
    
    destroy: function() {
        
        var grid    = this.getControleFinancaList(),
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
                        var store = this.getControleFinancaList().store;
                        store.remove(records);
                        this.getControleFinancaList().store.sync();
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
                var record = Ext.create('WSExt.model.ControleFinanca');
                record.set(values);
                this.getControleFinancaList().store.add(record);
            }

            win.close();
            this.getControleFinancaList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getControleFinancaList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('controleFinancaEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
            console.log(record);
        }else{
            return;
        }		
    }

});