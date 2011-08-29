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

Ext.Loader.setConfig({enabled: true});

Ext.application({
    
    name: 'SONMvcExample',
    appFolder: 'app',
    controllers: [
        'Users'
    ],
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
   			}
        });
    }
});