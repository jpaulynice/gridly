/**
* Modular Grid Row collection definition.
*/
define([ 'jquery',
         'underscore',
         'backbone' ,
         'app/models/rowData'],
         function($, _, Backbone,RowData) {

    /**
    * Represents a collection of rows in the grid
    * and has method to sort the row collection by a 
    * field and descending or ascending.
    *
    */
	var RowDataCollection = Backbone.Collection.extend({
	    model: RowData,

	    /** 
	    * comparator for desc. only works 
	    * for integer values for now.  Needs
	    * to be fixed for string and other
	    * data types.
		*
	    */
	    comparatorDesc: function(item) {
	        return -item.get(this.sort_key);
	    },

	    /** 
	    * comparator for asc.
		*
	    */
	    comparatorAsc: function(item){
	    	return item.get(this.sort_key);
	    },

	    /**
	    * Calling this method sets the comparator dynamically
	    * and add field and direction for sorting.
	    * 
	    */
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

	return RowDataCollection;
});
