/**
 * Modularized Backbone.Marionette Application
 */
define(['jquery', 
        'underscore', 
        'backbone', 
        'marionette', 
        'app/controllers/gridController'], 
        function($, _, Backbone, Marionette, GridController) {

    var App = new Backbone.Marionette.Application();
    App.addInitializer(function() {
        App.addRegions({
            gridRegion : '.gridRegion'
        });

        var data = {
            gridRegion : App.gridRegion,
            rows : [{
                prefix : 'Mr.',
                first : 'Harry',
                last : 'Potter',
                gender : 'm',
                height : 70,
                weight : 140,
                age : 19,
                has_nose : 'True'
            }, {
                prefix : 'Ms.',
                first : 'Hermione',
                last : 'Granger',
                gender : 'f',
                height : 66,
                weight : 121,
                age : 19,
                has_nose : 'True'
            }, {
                prefix : 'NULL',
                first : 'Dobby',
                last : 'NULL',
                gender : 'm',
                height : 23,
                weight : 20,
                age : 284,
                has_nose : 'True'
            }, {
                prefix : 'Ms.',
                first : 'Luna',
                last : 'Lovegood',
                gender : 'f',
                height : 68,
                weight : 99,
                age : 17,
                has_nose : 'True'
            }, {
                prefix : 'NULL',
                first : 'Hagrid',
                last : 'NULL',
                gender : 'm',
                height : 108,
                weight : 553,
                age : 45,
                has_nose : 'True'
            }, {
                prefix : 'Dark Lord',
                first : 'Tom',
                last : 'Riddle',
                gender : 'm',
                height : 74,
                weight : 144,
                age : 48,
                has_nose : 'False'
            }, {
                prefix : '"Moaning"',
                first : 'Myrtle',
                last : 'NULL',
                gender : 'f',
                height : 65,
                weight : 0,
                age : 106,
                has_nose : 'NULL'
            }]
        };
    });
    new GridController(data);

    return App;
});
