/**
 * Grid controller to handle showing search results
 *
 */
define( [ 'jquery', 
          'underscore', 
          'backbone', 
          'marionette', 
          'app/views/grid',
		  'app/models/persons' ], 
		  function($, _, Backbone, Marionette, Grid,Persons) {

	var GridController = Backbone.Marionette.Controller.extend( {
		initialize : function(options) {
			this.showGrid(options);
		},

		showGrid : function(data) {
			var gridRegion = data.gridRegion;
			if (data.personList && data.personList.length > 0) {
				var headers = _.keys(data.personList[0])

				var persons = new Persons(data.personList);

				_.each(persons.models, function(person) {
					person.set( {
						'displayFields' : _.values(person.attributes)
					});
				});

				var gridView = new Grid({
					collection : persons,
					headers : headers
				});

				gridRegion.show(gridView);
			}
		}

	});

	return GridController;
});
