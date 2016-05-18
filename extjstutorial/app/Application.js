/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('App.Application', {
    extend: 'Ext.app.Application',

    name: 'Packt',

    views: [
        'login.Login'
    ],

    controllers: [],

    stores: [
        // TODO: add global / shared stores here
    ],

    /*remove the splash screen after all the code the application needs is loaded;
     otherwise, the loading message will be there indefinitely!*/

    launch: function () {
        var me = this;

        var task = new Ext.util.DelayedTask(function() {

            //Fade out the body mask
            me.splashscreen.fadeOut({
                duration: 1000,
                remove:true
            });

            //Fade out the icon and message
            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove:true,
                listeners: { // #1
                    afteranimate: function(el, startTime, eOpts ){//#2
                        console.log('launch') // #3
                    }
                }
            });
        });

        task.delay(2000);;

    },

    /*The init function is called when the application boots,
     so it gives some time to all required code to be loaded,
     and after that, the launch function is called.*/

    init: function() {
        var me = this;
        me.splashscreen =
            Ext.getBody().mask (
                'Loading application',
                'splashscreen'
            );

        me.splashscreen.addCls('splashscreen');

        Ext.DomHelper.insertFirst(Ext.query('.x-mask-msg')[0], {
            cls: 'x-splash-icon'
        });
    }



});
