Ext.define('WSExt.controller.TipoDespesaGanho',{
    
    extend: 'Ext.app.Controller',
    stores: ['TipoDespesaGanhos'],
    models: ['TipoDespesaGanho'],
    
    views: [
        'tipoDespesaGanho.Edit',
        'tipoDespesaGanho.List'
    ],
    
    refs: [
        {
            ref: 'tipoDespesaGanhoList',
            selector: 'tipoDespesaGanhoList'
        },
        {
            ref: 'tipoDespesaGanhoEdit',
            selector: 'tipoDespesaGanhoEdit'
        }
    ],
    
    init: function(){
        this.control({
           'tipoDespesaGanhoList button[action=insert]': {
               click: this.insert
           }
        });
    },
    
    insert: function(btn, evt, opt){
        var editView = Ext.widget('tipoDespesaGanhoEdit');
        editView.title = 'Inserindo novo tipo de despesa ou ganho';
    }
});