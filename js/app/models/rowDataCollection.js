/**
 * Modular Grid Row collection definition.
 */
define( [ 'jquery', 
          'underscore', 
          'backbone', 
          'app/models/rowData' ], 
          function($, _, Backbone, RowData) {

	/**
	 * Represents a collection of rows data in the grid
	 * and has method to sort the row collection by a
	 * field descending or ascending.
	 *
	 */
	var RowDataCollection = Backbone.Collection.extend( {
		model : RowData,

		/**
		 * comparator for desc. only works
		 * for integer values for now.  Needs
		 * to be fixed for string and other
		 * data types.
		 *
		 */
		comparatorDesc : function(item) {
			var value = item.get(this.sort_key);
			if (isNaN(value)) {
				value = item.get(this.sort_key).toLowerCase().split("");
				value = _.map(value, function(letter) {
					return String.fromCharCode(-(letter.charCodeAt(0)));
				});
				return value;
			} else {
				return -value;
			}
		},

		/**
		 * comparator for asc.
		 *
		 */
		comparatorAsc : function(item) {
			return item.get(this.sort_key);
		},

		/**
		 * Calling this method sets the comparator dynamically
		 * and add field and direction for sorting.
		 *
		 */
		sortByField : function(fieldName, direction) {
			this.sort_key = fieldName;
			if (direction && direction === 'asc') {
				this.comparator = this.comparatorAsc;
			} else {
				this.comparator = this.comparatorDesc;
			}
			this.sort();
		}
	});

	return RowDataCollection;
});
