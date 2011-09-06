Ext.define('WSExt.view.financas.DespesaGrafico' ,{
    extend: 'Ext.chart.Chart',
    alias : 'widget.despesaGrafico',
    title : 'Gráfico mensal de despesas',
    layout: 'fit',
    style: 'background:#fff',
    animate: true,
    shadow: true,
    store: 'Despesas',
    axes: [{
        type: 'Numeric',
        position: 'left',
        fields: ['total'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Despesa total',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'bottom',
        fields: ['mes'],
        title: 'Meses do ano'
    }],
    series: [{
        type: 'column',
        axis: 'left',
        highlight: true,
        tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('mes') + ': ' + storeItem.get('total') + ' R$');
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'vertical',
            color: '#ccc'
        },
        xField: 'mes',
        yField: 'total'
    }
    ],
    
    initComponent: function(){
        this.callParent();
        this.store.load();
    }
    
});