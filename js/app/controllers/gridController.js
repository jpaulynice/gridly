/**
 * Grid controller to handle showing grid data.  Using
 * RequireJS, we pass our grid and data as dependencies.
 * The location, data, and columns to show the grid is
 * passed as an option in the initialize method of the
 * GridController.
 *
 */
define( [ 'jquery',
          'underscore',
          'backbone',
          'marionette',
          'app/views/grid',
          'app/models/rowDataCollection',
          'app/views/emptyView'],
          function($, _, Backbone, Marionette, Grid,RowCollection,EmptyView) {

	/**
	 * GridController extends Marionette.Controller and is simply
	 * a way to manage our views and models.  Here we get the data
	 * for the grid, create the grid and show it.
	 *
	 */
	var GridController = Backbone.Marionette.Controller.extend( {

		/**
		 * Default constructor to pass data we're interested in
		 * Such as region to show the grid, rows, and columns
		 *
		 */
		initialize : function(options) {
			this.showGrid(options);
		},

		/**
		 * Handle showing of the grid with 'displayFields' and columns
		 *
		 */
		showGrid : function(data) {
			//region to show the grid
			var gridRegion = data.gridRegion;

			//if the number of rows is greater than 0
			//create columns and rows for the grid
			if (data.rows && data.rows.length > 0) {
	        	var columns = [];
	        	columns.push('');
	        	var keyArray = _.keys(data.rows[0]);
				_.each(keyArray, function(column){
	          		columns.push(column);
	        	});
	        	columns.push('');

				var rows = new RowCollection(data.rows);

				//set fields to display in each model
				_.each(rows.models, function(row) {
					row.set( {
						'displayFields' : _.values(row.attributes)
					});
				});

				//create new grid
				var grid = new Grid( {
					columns : columns,
					collection : rows
				});

				//show the grid
				gridRegion.show(grid);
			}else{
				//show empty view
				var emptyView = new EmptyView();
				gridRegion.show(emptyView);
			}
		}

	});

	return GridController;
});
