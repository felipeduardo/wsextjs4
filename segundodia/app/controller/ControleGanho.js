Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.ControleGanho', {
    extend: 'Ext.app.Controller',
    stores: ['ControleGanhos'],
    models: ['ControleGanho'], 
	
    views: [
    'controleGanho.List',
    'controleGanho.Edit'
    ],
    
    refs: [
    {
        ref:'controleGanhoEdit', 
        selector:'controleGanhoEdit'
    },
    {
        ref:'controleGanhoList', 
        selector:'controleGanhoList'
    }
    ],

    init: function() {
        this.control({
            'controleGanhoList': {
                itemdblclick: this.edit
            },

            'controleGanhoList button[action=insert]': {
                click: this.insert
            },
            
            'controleGanhoList button[action=edit]': {
                click: this.edit
            },

            'controleGanhoList button[action=destroy]': {
                click: this.destroy
            },
            
            'controleGanhoList button[action=refresh]': {
                click: this.refresh
            },

            'controleGanhoEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    refresh: function(){
        this.getControleGanhoList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('controleGanhoEdit');
        view.setTitle('Inserindo novo controle de controleGanho');
    },
    
    destroy: function() {
        
        var grid    = this.getControleGanhoList(),
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
                        var store = this.getControleGanhoList().store;
                        store.remove(records);
                        this.getControleGanhoList().store.sync();
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
                var record = Ext.create('WSExt.model.ControleGanho');
                record.set(values);
                this.getControleGanhoList().store.add(record);
            }

            win.close();
            this.getControleGanhoList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getControleGanhoList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('controleGanhoEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }		
    }

});