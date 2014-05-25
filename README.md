gridly
==================================
```javascript

Clean and simple grid using backbone, marionette, requirejs, and bootstrap.  The grid is sortable and has drag and drop functionality to rearrange the rows.

All javascript and hbs files are minified using r.js optimizer and Node:
<pre>
node r.js -o gridly/js/build.js

//output
'gridly/js/script.min.js'
</pre>

Screenshot
==========
![Settings Window](https://raw.github.com/julesbond007/gridly/master/docs/gridly.png)

Example Usage
=============
/**
 * Create requirejs module and add grid and collection of data
 * as dependencies.
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
        var columns = _.keys(data.rows[0])

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
