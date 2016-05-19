/**
 * Created by ma.l on 5/19/2016.
 */



Ext.define('App.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',
    /*That is why we can reference this alias in the View class (Main.js) using the following code:

    viewModel: {
    type: 'main'
    }
     */

    stores: {
        /*
        A declaration of Ext.data.Store configurations that are first processed as binds to produce an effective
        store configuration. For example:

        users: {
            model: 'Main',
            autoLoad: true
        }
        */
    },

    data: {
        /* This object holds the arbitrary data that populates the ViewModel and is then available for binding. */
       /* The data configuration allows us to populate values in the ViewModel class.
       The name field (#4) was created by Sencha Cmd,
       so we are going to keep it (you can remove it if you want).
       The appName (#5) and appHeaderIcon (#6) properties are being used by Header and
       footer (#7) is being used by the Footer class.

        MainModel is bound to the Main class (View). Because Header and Footer are items of the Main component, they can also reference MainModel.
        */
        name: 'App',
        appName: 'DVD Rental Store',
        appHeaderIcon: '<span class = " fa fa-desktop fa-lg app-header-logo">',
        footer: 'Ext JS Tutorial'
    }
});