Ext.define('WSExt.view.tipoGanho.ComboRenderer', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.tipoGanhoComboRenderer',
    name : 'tipo_ganho_id',
    ref: 'tipo_ganho_id',
    fieldLabel: 'Tipo de ganho',
    store: 'TipoGanhos',
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
