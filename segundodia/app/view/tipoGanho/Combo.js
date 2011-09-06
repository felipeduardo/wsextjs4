Ext.define('WSExt.view.tipoGanho.Combo', {
    extend: 'Ext.form.field.ComboBox',
    alias: 'widget.tipoGanhoCombo',
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
    }
});
