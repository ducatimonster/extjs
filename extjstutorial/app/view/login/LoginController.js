/**
 * Created by ma.l on 5/18/2016.
 */
Ext.define('App.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    requires: [
        'App.util.Util'
    ],
    onTextFieldSpecialKey: function(field, e, options) {},

    onTextFieldKeyPress: function(field, e, options) {},

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
    },

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
        this.getView().close();
        Ext.create('App.view.main.Main');
    }

    /**
     * Called when the view is created
     */
    // init: function() {
    //
    // }
});