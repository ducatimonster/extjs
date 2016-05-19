/**
 * Created by ma.l on 5/19/2016.
 */
Ext.define('App.view.main.Footer', {
    extend: 'Ext.Container',
    xtype: 'appfooter',

    cls: 'app-footer',

    height: 30,

    layout: 'center',

    items: [
        {
            xtype: 'component',
            width: 30,
            componentCls: 'app-footer-title',
            bind: {
                html: '{footer}'
            }
        }
    ]
});