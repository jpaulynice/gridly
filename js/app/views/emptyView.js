/**
 * Defines an empty view
 */
define([ 'jquery', 
         'underscore', 
         'backbone', 
         'marionette',
         'hbs!app/templates/grid/emptyTemplate' ], 
         function($, _, Backbone,Marionette, emptyTemplate) {

	return Backbone.Marionette.ItemView.extend({
		template : emptyTemplate
	});
});