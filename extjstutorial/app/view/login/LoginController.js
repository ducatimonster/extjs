/**
 * Created by ma.l on 5/18/2016.
 */
Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'App.view.login.CapsLockTooltip',
        'App.util.Util',
        // 'App.util.SessionMonitor'
    ],

    // This is so user  can type ENTER to login
    onTextFieldSpecialKey: function(field, e, options) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },


    onTextFieldKeyPress: function(field, e, options) {

        // Get the ASCII code the user pressed
        var charCode = e.getCharCode(),
            me = this;

        // Check if CAPS is on
        if((e.shiftKey && charCode >= 97 && charCode <= 122) || // Verify if Shift + small alphabet ASCII code is pressed
            (!e.shiftKey && charCode >= 65 && charCode <= 90)) { // Verify if Shift NOT pressed + capital alphabet ASCII code is pressed

            //verify that there is reference of CapLockToolTip class already existing
            if (me.capslockTooltip === undefined) {
                // creates instance if it doesn't exist yet and store it in variable 'capslockTooltip'
                me.capslockTooltip = Ext.widget('capslocktooltip');
            }
            me.capslockTooltip.show();


        } else {

            if (me.capslockTooltip !== undefined ) { // If Caps Lock is NOT active, verify that there is reference to the CapsLockTooltip class
                me.capslockTooltip.hide(); // If it already exists, the hide the tooltip because Caps Lock is not active
            }
        }
    },

    onButtonClickCancel: function(button, e, options) {
        // console.log('login cancel')
        this.lookupReference('form').reset();
    },

    onButtonClickSubmit: function(button, e, options) {
        // console.log('login submit')
        var me = this;
        if (me.lookupReference('form').isValid()) {
            me.doLogin();
        }
    },

    doLogin: function() {
        var me = this;
            form = me.lookupReference('form');

        form.submit ({
            clientValidation: true,
            url: 'php/security/login.php',
            scope: me,
            success: 'onLoginSuccess',
            failure: 'onLoginFailure'
        });

        // adds mask while server sends response so they can't keep clicking on button to make things slower
        this.getView().mask('Authenicating...Please wait...');
    },

    // Login Failure the longer version without using the Util class
/*    onLoginFailure: function(form, action) {
        var result = Ext.JSON.decode(action.response.responseText, true);

        if (!result) {
            result = {};
            result.success = false;
            result.msg = action.response.responseText;
        }

        switch (action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                Ext.Msg.show({
                    title: 'Error!',
                    msg: 'Form fields may not be submited with invalid values',
                    icon: Ext.msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                break;

            case Ext.form.action.Action.CONNECT_FAILURE:
                Ext.msg.show({
                    title: 'Error!',
                    msg: 'Form fields may not be submitted with invalid values',
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });
                break;

            case Ext.form.action.Action.SERVER_INVALID:  //#7
                Ext.Msg.show({
                    title:'Error!',
                    msg: result.msg, //#8
                    icon: Ext.Msg.ERROR,
                    buttons: Ext.Msg.OK
                });


        }
    },*/


    onLoginFailure: function(form, action) {
        this.getView().unmask();

        var result = App.util.Util.decodeJSON(action.response.responseText);

        switch(action.failureType) {
            case Ext.form.action.Action.CLIENT_INVALID:
                App.util.Util.showErrorMsg('Form fields may not be submited with invalid values');
                break;
            case Ext.form.action.Action.CONNECT_FAILURE:
                App.util.Util.showErrorMsg(action.response.responseText);
                break;
            case Ext.form.action.Action.SERVER_INVALID:
                App.util.Util.showErrorMsg(result.msg);
        }
    },

    onLoginSuccess: function(form, action) {
        this.getView().unmask();
        this.getView().close();
        Ext.create('App.view.main.Main');
        App.util.SessionMonitor.start();

    }



    /**
     * Called when the view is created
     */
    // init: function() {
    //
    // }
});