Ext.define('WSExt.view.financas.Grafico' ,{
    extend: 'Ext.panel.Panel',
    alias : 'widget.financasGrafico',
    title : 'Gráfico mensal de finanças',
    layout: 'fit',
    itemId: 'painelGraficoFinancas',
    tbar: [{
        text: '(Re)Carregar dados',
        handler: function() {
            this.ownerCt.up('#painelGraficoFinancas').down('#grafico').store.load();
        }
    }],
    
    initComponent: function(){
        
        this.items = [
        {
            xtype: 'chart',
            itemId: 'grafico',
            style: 'background:#fff',
            animate: true,
            shadow: true,
            store: 'Financas',
            axes: [{
                type: 'Numeric',
                position: 'left',
                fields: ['total'],
                label: {
                    renderer: Ext.util.Format.numberRenderer('0,0')
                },
                title: 'Balanço total',
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
                        this.setTitle(storeItem.get('mes') + ': ' + 'R$ ' + storeItem.get('total') );
                    }
                },
                label: {
                    display: 'insideEnd',
                    'text-anchor': 'middle',
                    field: 'total',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'vertical',
                    color: '#333'
                },
                xField: 'mes',
                yField: 'total'
            }]
        }
            
        ];
        
        this.callParent();
    }
    
});