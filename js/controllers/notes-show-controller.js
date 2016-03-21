angular.module('NoteWrangler')
.controller('NotesShowController', function($http, $routeParams, Note){
	$scope.note = Note.get({ id: $routeParams.id });
});