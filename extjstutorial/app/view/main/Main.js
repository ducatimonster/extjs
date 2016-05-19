/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
/*
We need to add the requires declaration of all the classes we created
(and we are referencing them by their xtype classes)
and also the Main ViewModel and Main ViewController class that were already created by Sencha Cmd.
The controller (#2) and viewModel (#3) declarations were already added by Sencha Cmd when we created the project.
    We are simply reusing them by referencing their types.
*/

Ext.define('App.view.main.Main', {
    // extend: 'Ext.container.Container',
    extend: 'Ext.container.Container',
    plugins: 'viewport',

    xtype: 'app-main',

    requires: [
        'App.view.main.Header', 
        'App.view.main.Footer',
        'App.view.main.Panel',
        'App.view.main.MainController',
        'App.view.main.MainModel'
        ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: {
      type: 'border'
    },

    items: [{
        region: 'center',
        xtype: 'mainpanel'
    }, {
        xtype: 'appheader',
        region: 'north'
    }, {
        xtype: 'appfooter',
        region: 'south'
    }, {
        xtype: 'container',
        region: 'west',
        width: 200,
        split: true
    }]
});
