/**
 * Created by ma.l on 5/18/2016.
 */
Ext.define('App.view.login.Login', {
    extend: 'Ext.window.Window',

    requires: [
        // 'Packt.view.Login.login.LoginModel',
        'App.view.login.LoginController', // this let it know where to look for the controller alias 'login'
        'Ext.form.Panel'
    ],

    controller: 'login', // using the alias of LoginController.js
    
    /*
    Uncomment to give this component an xtype
    xtype: 'login',
    */
    xtype: 'login-dialog',
    autoShow: true,
    height: 200,
    width: 360,
    layout: {
        type: 'fit'
    },
    iconCls: 'fa fa-key fa-lg',        // #8
    title: 'Login',                    // #9
    closeAction: 'hide',               // #10
    closable: false,                   // #11
    draggable: false,                  // #12
    resizable: false,                   // #13

    items: [{
        xtype: 'form',
        reference: 'form', // so that the controller know to target this form onButtonClickCancel in controller
        bodyPadding: 15,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            labelWidth: 60,

            //Validations for both fields
            allowBlank: false,
            vtype: 'alphanum',
            minLength: 3,
            msgTarget: 'under' // OPTIONS: side, under, title, none
        },
        items: [{
            name: 'user',
            fieldLabel: 'User',

            // Validations
            maxlength: 25

        }, {
            inputType: 'password',
            name: 'password',
            fieldLabel: 'Password',

            //Validations
            vtype: 'customPass',
            msgTarget: 'side'
        }]
    }],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [ {
                xtype: 'tbfill'
            }, {
                xtype: 'button',
                iconCls: 'fa fa-times fa-lg',
                text: 'Cancel',
                listeners: {
                    click: 'onButtonClickCancel'
                }
            }, {
                xtype: 'button',
                formBind: true, // button will only be enabled if form has no error from the client validation
                iconCls: 'fa fa-sig-in fa-lg',
                text: 'Submit',
                listeners: {
                    click: 'onButtonClickSubmit'
                }
            }

            ]

        }
    ],

    controller: 'login'

});
