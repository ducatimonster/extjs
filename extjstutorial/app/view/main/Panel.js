/**
 * Created by ma.l on 5/19/2016.
 */
Ext.define('App.view.main.Panel', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    activeTab: 0,

    items: [
        {
            xtype: 'panel',
            closable: 'false',
            iconCls: 'fa fa-home fa-lg tabIcon',
            title: 'Home'
        }
    ]
});