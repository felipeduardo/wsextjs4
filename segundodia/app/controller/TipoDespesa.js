Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.TipoDespesa', {
    extend: 'Ext.app.Controller',
    stores: ['TipoDespesas'],
    models: ['TipoDespesa'], 
	
    views: [
    'tipoDespesa.List',
    'tipoDespesa.Edit'
    ],
    
    refs: [
    {
        ref:'tipoDespesaEdit', 
        selector:'tipoDespesaEdit'
    },
    {
        ref:'tipoDespesaList', 
        selector:'tipoDespesaList'
    }
    ],

    init: function() {
        this.control({
            'tipoDespesaList': {
                itemdblclick: this.edit
            },

            'tipoDespesaList button[action=insert]': {
                click: this.insert
            },
            
            'tipoDespesaList button[action=edit]': {
                click: this.edit
            },

            'tipoDespesaList button[action=destroy]': {
                click: this.destroy
            },
            
            'tipoDespesaList button[action=refresh]': {
                click: this.refresh
            },

            'tipoDespesaEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    refresh: function(){
        this.getTipoDespesaList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('tipoDespesaEdit');
        view.setTitle('Inserindo novo tipo de Despesa');
    },
    
    destroy: function() {
        
        var grid    = this.getTipoDespesaList(),
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
                        var store = this.getTipoDespesaList().store;
                        store.remove(records);
                        this.getTipoDespesaList().store.sync();
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
                var record = Ext.create('WSExt.model.TipoDespesa');
                record.set(values);
                this.getTipoDespesaList().store.add(record);
            }

            win.close();
            this.getTipoDespesaList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getTipoDespesaList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('tipoDespesaEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }		
    }

});