define([ 'jquery',
         'underscore',
         'backbone' ,
         'app/models/row'],
         function($, _, Backbone,Row) {
	var Rows = Backbone.Collection.extend({
	    model: Row,

	    comparatorDesc: function(item) {
	        return -item.get(this.sort_key);
	    },

	    comparatorAsc: function(item){
	    	return item.get(this.sort_key);
	    },

	    sortByField: function(fieldName, direction) {
	        this.sort_key = fieldName;
	    	if(direction && direction === 'asc'){
	    		this.comparator = this.comparatorAsc;
	    	}else{
		    	this.comparator = this.comparatorDesc;
	    	}
	        this.sort();
	    }
	});

	return Persons;
});
