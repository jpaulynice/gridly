/**
 * Application configuration with shortcut alias
 */
require.config({
	paths : {
		hbs : 'lib/hbs',
		jquery : 'lib/jquery',
		json2 : 'lib/json2',
		underscore : 'lib/underscore',
		handlebars : 'lib/handlebars',
		backbone : 'lib/backbone',
		marionette : 'lib/backbone.marionette.min',
		i18nprecompile : 'lib/i18nprecompile',
		bootstrap:'lib/bootstrap.min'
	},

	shim : {
		jquery : {
			exports : '$'
		},
		json2 : {
			exports : 'JSON'
		},
		underscore : {
			exports : '_'
		},
		handlebars : {
			exports : 'Handlebars'
		},
		backbone : {
			deps : [ 'jquery', 'json2', 'underscore' ],
			exports : 'Backbone'
		},
		marionette : {
			deps : [ 'jquery', 'underscore', 'backbone' ],
			exports : 'Marionette'
		},
		bootstrap:{
			deps:['jquery'],
			exports:'Bootstrap'
		}
	}

});

require([ 'app/app' ], function(App) {
	App.start();
});