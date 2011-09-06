Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.TipoGanho', {
    extend: 'Ext.app.Controller',
    stores: ['TipoGanhos'],
    models: ['TipoGanho'], 
	
    views: [
    'tipoGanho.List',
    'tipoGanho.Edit'
    ],
    
    refs: [
    {
        ref:'tipoGanhoEdit', 
        selector:'tipoGanhoEdit'
    },
    {
        ref:'tipoGanhoList', 
        selector:'tipoGanhoList'
    }
    ],

    init: function() {
        this.control({
            'tipoGanhoList': {
                itemdblclick: this.edit
            },
            
//            'tipoGanhoList': {
//                meuevento: this.disparandoNossoEvento
//            },

            'tipoGanhoList button[action=insert]': {
                click: this.insert
            },
            
            'tipoGanhoList button[action=edit]': {
                click: this.edit
            },

            'tipoGanhoList button[action=destroy]': {
                click: this.destroy
            },
            
            'tipoGanhoList button[action=refresh]': {
                click: this.refresh
            },

            'tipoGanhoEdit button[action=save]': {
                click: this.save
            }
        });
    },
    
    disparandoNossoEvento: function(){
        console.log('Evento customizado detectado');
    },
    
    refresh: function(){
        this.getTipoGanhoList().store.load();
    },
    
    insert: function(btn, evt, opt) {
        var view = Ext.widget('tipoGanhoEdit');
        view.setTitle('Inserindo novo tipo de Ganho');
    },
    
    destroy: function() {
        
        var grid    = this.getTipoGanhoList(),
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
                        var store = this.getTipoGanhoList().store;
                        store.remove(records);
                        this.getTipoGanhoList().store.sync();
                    }
                }
            });
        }
    },

    save: function(button, evt, opt) {	
        
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
                var record = Ext.create('WSExt.model.TipoGanho');
                record.set(values);
                this.getTipoGanhoList().store.add(record);
            }

            win.close();
            this.getTipoGanhoList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
            
        }
        
    },
    
    edit: function(){
        
        var records = this.getTipoGanhoList().getSelectionModel().getSelection();    	
    	
        if(records.length === 1){
            var editWind = Ext.widget('tipoGanhoEdit');    	
            var editForm = editWind.down('form');
            var record = records[0];
            editForm.loadRecord(record);
        }else{
            return;
        }		
    }

});