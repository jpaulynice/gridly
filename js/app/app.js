/**
 * Modularized Backbone.Marionette Application
 */
define([ 'jquery',
         'underscore',
         'backbone',
         'marionette',
         'app/controllers/gridController' ],
         function($, _, Backbone, Marionette,GridController) {

	var App = new Backbone.Marionette.Application();

	App.addRegions({
		gridRegion: '.gridRegion'
	})

	var data = {};
	data.personList = [];
	var p1 = {prefix:'Mr.',first:'Harry',last:'Potter',gender:'m',height:70,weight:140,age:19,has_nose:'True'}
	var p2 = {prefix:'Ms.',first:'Hermione',last:'Granger',gender:'f',height:66,weight:121,age:19,has_nose:'True'}
	var p3 = {prefix:'NULL',first:'Dobby',last:'NULL',gender:'m',height:23,weight:20,age:284,has_nose:'True'}
	var p4 = {prefix:'Ms.',first:'Luna',last:'Lovegood',gender:'f',height:68,weight:99,age:17,has_nose:'True'}
	var p5 = {prefix:'NULL',first:'Hagrid',last:'NULL',gender:'m',height:108,weight:553,age:45,has_nose:'True'}
	var p6 = {prefix:'Dark Lord',first:'Tom',last:'Riddle',gender:'m',height:74,weight:144,age:48,has_nose:'False'}
	var p7 = {prefix:'"Moaning"',first:'Myrtle',last:'NULL',gender:'f',height:65,weight:0,age:106,has_nose:'NULL'}

	data.personList.push(p1);
	data.personList.push(p2);
	data.personList.push(p3);
	data.personList.push(p4);
	data.personList.push(p5);
	data.personList.push(p6);
	data.personList.push(p7);

	data.gridRegion = App.gridRegion;

	var gridController = new GridController(data);

	return App;
});
