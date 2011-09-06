Ext.require('Ext.window.MessageBox');

Ext.define('WSExt.controller.AbstractController', {
    extend: 'Ext.app.Controller',
    editWidget: '',
    gridWidget: '',
    editTitle: 'Edição',
    insertTitle: 'Cadastro',
    storeClass: '',
    refs: [
        {
            ref:'gridList', 
            selector:'list'
        }
        ,{
            ref:'formEdit', 
            selector:'edit'
        }
    ],

    sync: function() {
        this.getGridList().store.sync();
    },
    
    refresh: function(){
        this.getGridList().store.load();
    },
    
    insert: function(grid, record) {
        var view = Ext.widget(this.editWidget);
        view.setTitle(this.insertTitle);
    },
    
    edit: function(grid, record) {
        console.log('teste');
        var id = record.data ? record.get('id') : 0;
        if(!this._loadEditForm(id, record)){
            var records = this.getGridList().getSelectionModel().getSelection();
            if(records.length === 1){
                id = records[0].data ? records[0].get('id') : 0;
                this._loadEditForm(id, records[0]);
            }else{
                return;
            }
        }
    },
    
    _loadEditForm: function(id, record){
        if(id){
            var view = Ext.widget(this.editWidget);
            view.setTitle(this.editTitle);
            view.down('form').loadRecord(record);
            return true;
        }else{
            return false;
        }
   
    },
    
    destroy: function() {
        var grid    = this.getGridList(),
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
                        var store = this.getGridList().store;
                        store.remove(records);
                        this.getGridList().store.sync();
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
                var record = Ext.create(this.storeClass);
                record.set(values);
                this.getGridList().store.add(record);
            }

            win.close();
            this.getGridList().store.sync();
        }else{
            Ext.ux.Msg.flash({
                msg: 'Há campos preenchidos incorretamente',
                type: 'error'
            });
        }
    }

});