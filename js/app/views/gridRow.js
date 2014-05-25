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
			debugger;
        	this.parent.draggedModel = this.model;
	    },

	    enter: function () {
	    	debugger;
	        this.$el.addClass(this.overClass);
	    },

	    leave: function () {
	    	debugger;
	        this.$el.removeClass(this.overClass);
	    },

	    over: function (event) {
	    	debugger;
	        event.preventDefault();
	    },

	    drop: function () {
	    	debugger;
	        this.leave();
	        var collection = this.parent.model;
	        collection.models.splice(collection.indexOf(this.parent.draggedModel), 1);
	        collection.models.splice(this.$el.index(), 0, this.parent.draggedModel);
	        _.forEach(collection.models, function (model, index) {
	            model.set(this.orderField, index+1, {silent: true});
	        }, this);
	        collection.trigger("change");
	    }
	});

	return GridRow;
});
