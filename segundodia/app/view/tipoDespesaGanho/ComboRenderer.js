Ext.define('WSExt.view.tipoDespesaGanho.ComboRenderer', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.tipoDespesaGanhoComboRenderer',
    name : 'tipo_despesa_ganho_id',
    ref: 'tipo_despesa_ganho_id',
    fieldLabel: 'Tipo de despesa_ganho',
    store: 'TipoDespesaGanhos',
    displayField: 'nome',
    valueField: 'id',
    queryMode: 'local',
    typeAhead: true,
    forceSelection: true,
    initComponent: function() {
        this.callParent(arguments);
        this.store.load();
    }
});
