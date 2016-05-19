/**
 * Created by ma.l on 5/19/2016.
 */
Ext.define('App.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    requires: [
        'App.util.Util',

    ],

    alias: 'controller.main',

    onLogout: function(button, e, options) {
        var me = this; //makes a reference to this, which is the MainController class
        Ext.Ajax.request({
            url: 'php/security/logout.php',

            scope: me,   /*We will handle the success (#4) and failure (#5) callbacks
           in separate functions that are declared inside the MainController class as well.
            That is why the scope is set to the MainController class (#3) itself*/
            success: 'onLogoutSuccess',
            failure: 'onLogoutFailure'
        });
    },

    onLogoutSuccess: function (conn, response, options, eOpts) {
        var result = App.util.Util.decodeJSON(conn.responseText); //decode the JSON message (#1) that we received from the server.

        if (result.success) {
            this.getView().destroy(); //we are going to destroy the Main class (#3), which is our Viewport (this is good to release the browser's memory
            // and make the objects available for the JavaScript garbage collector)
            window.location.reload(); //reload the application displaying the Login screen again
        } else {
            App.util.Util.showErrorMsg(result.msg);
        }
     },
    /**
     * Called when the view is created
     */

});