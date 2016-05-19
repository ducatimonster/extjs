/**
 * Created by ma.l on 5/19/2016.
 */
Ext.define('App.view.locale.Translation', {
    extend: 'Ext.button.Split',
    xtype: 'translation',

    menu: {
        xtype: 'menu',
        items: [
            {
                xtype: 'menuitem',
                iconCls: 'en',
                text: 'English'
            },
            {
                xtype: 'menuitem',
                iconCls: 'es',
                text: 'Español'
            },
            {
                xtype: 'menuitem',
                iconCls: 'pt_BR',
                text: 'Português'
            }

        ]
    }
});