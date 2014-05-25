/**
 * Defines a modularized row in our grid.
 */
define([ 'jquery',
         'underscore',
         'backbone',
         'marionette',
         'hbs!app/templates/grid/gridRowTemplate' ],
         function($, _, Backbone,Marionette, gridRowTemplate) {

	var GridRow = Backbone.Marionette.ItemView.extend({
		template : gridRowTemplate,
		tagName : "tr",
		attributes:{
		draggable:true
	},

	events: {
		"dragstart": "start",
		"dragenter": "enter",
		"dragleave": "leave",
		"dragend": "leave",
		"dragover": "over",
		"drop": "drop"
	},

	start: function () {
		this.model.collection.draggedModel = this.model;
	},

	enter: function () {
		this.$el.addClass('drop-over');
	},

	leave: function () {
		this.$el.removeClass('drop-over');
	},

	over: function (event) {
		event.preventDefault();
	},

	drop: function () {
		this.leave();
		var collection = this.model.collection;
		collection.models.splice(collection.indexOf(this.model.collection.draggedModel), 1);
		collection.models.splice(this.$el.index(), 0, this.model.collection.draggedModel);
		_.forEach(collection.models, function (model, index) {
			model.set(this.orderField, index+1, {silent: true});
		}, this);
		collection.trigger("change");
	}
	});

	return GridRow;
});
