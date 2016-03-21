angular.module('NoteWrangler')
.controller('NotesCreateController', [function(Note) {

	$scope.note = new Note();

  this.saveNote = function(note){
    $scope.errors = null;
    $scope.updating = true;

    note.$save(note)
    .catch(function(note){
    	$scope.errors = [note.data.error];
    }).finally(function(){
    	$scope.updating = false;
    });
  };
}]);
