/**
 * Ext JS Library 4.0.2
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 *	
 * Projeto Exemplo para curso de ExtJS 4 + PHP
 * Curso da School of Net - ExtDay
 * Online - 27/08 e 3/09
 * http://www.schoolofnet.com/extday
 * 
 * @author Zaedy Dantas Sayão
 * 
 */

Ext.Loader.setPath('Ext', './extjs/src');

Ext.Loader.setConfig({
    enabled: true,
    disableCaching: true
});

Ext.require([
    'Ext.tree.*',
    'Ext.data.*',
    'Ext.tip.*',
    ]);
    
Ext.require('Ext.chart.*');
Ext.require(['Ext.Window', 'Ext.layout.container.Fit', 'Ext.fx.target.Sprite']);
    
Ext.application({
    
    name: 'WSExt',
    appFolder: 'app',
    controllers: [
     'TipoDespesa', 'TipoGanho', 'ControleDespesa', 'ControleGanho', 'ControleFinanca', 'Financa', 'Ganho', 'Despesa', 'TipoDespesaGanho'
    ],
    
    autoCreateViewport: true,
    launch: function() {
        WSExt.app = this;
    }
});