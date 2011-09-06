Ext.define('WSExt.view.financas.GanhoGrafico' ,{
    extend: 'Ext.chart.Chart',
    alias : 'widget.ganhoGrafico',
    title : 'Gráfico mensal de ganhos',
    layout: 'fit',
    style: 'background:#fff',
    animate: true,
    shadow: true,
    store: 'Ganhos',
    axes: [{
        type: 'Numeric',
        position: 'bottom',
        fields: ['total'],
        label: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title: 'Ganho total',
        grid: true,
        minimum: 0
    }, {
        type: 'Category',
        position: 'left',
        fields: ['mes'],
        title: 'Meses do ano'
    }],
    series: [{
        type: 'bar',
        axis: 'bottom',
        highlight: true,
        tips: {
            trackMouse: true,
            width: 140,
            height: 28,
            renderer: function(storeItem, item) {
                this.setTitle(storeItem.get('mes') + ': ' +  'R$ ' + storeItem.get('total') );
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333'
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