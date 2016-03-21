angular.module('NoteWrangler')
.controller('NoteEditController', function($scope, Note) {
	$scope.deleteNote = function(note) {
		Note.$delete(note);
	};
});