/**
 * Created by ma.l on 5/19/2016.
 */
Ext.define('App.view.main.Header', {
    extend: 'Ext.toolbar.Toolbar',
    xtype: 'appheader',
    
    requires: [
        'App.view.locale.Translation'
    ],

    /*ui configuration allows us to use a specific theme for a component.
    which gives the toolbar a transparent background.
    The footer value is included in the Ext JS SDK, and it makes the toolbar transparent.*/

    ui: 'footer',
    
    items: [ {
        xtype: 'component',
        bind: {
            html: '{appHeaderIcon}'
        },
    }, {
        xtype: 'component',
        componentCls: 'app-header-title',
        bind: {
            html: '{appName}'
        },
    }, {
        /*This component will align the translation (#10) and
        logout buttons (#13) to the right, filling the Toolbar class with space in the middle
        (between the application title and the buttons).
        Instead of { xtype: 'tbfill' }, we could also use '->' as a shortcut
        */
        xtype: 'tbfill'
    }, {
        xtype: 'translation'
    }, {
        xtype: 'tbseparator' //adds a separator ("|") between the buttons
        // shortcut. Instead of { xtype: ' tbseparator' }, we could also use '-'.
    }, {
        xtype: 'button',
        itemId: 'logout', //so that we can reference this button globally by the application
        text: 'Logout',

        /*As we are going to use the ViewController class to handle the logout,
        we will declare a reference (#14) to make it easier to retrieve
        the button reference inside the ViewController class*/
        reference: 'logout',
        iconCls: 'fa fa-sign-out fa-lg buttonIcon',
        listeners: {
            click: 'onLogout'
        }
    }]
});