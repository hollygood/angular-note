angular.module('NoteWrangler')
.controller('NoteIndexController', function($http, Note){
	/*
	var controller = this;
	Note.all()
	.success(function(data){
		controller.notes = data;
	}); */

	$scope.notes = Note.query(); 
});