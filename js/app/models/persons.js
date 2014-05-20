define([ 'jquery',
         'underscore',
         'backbone' ,
         'app/models/person'],
         function($, _, Backbone,Person) {
	var Persons = Backbone.Collection.extend({
	    model: Person,
	
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
