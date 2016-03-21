angular.module('NoteWrangler')
.directive('nwCard', function(){

	var num = 1;

	return {
		retrict: 'E',
		templateUrl: 'templates/directive/nw-card.html',
		scope: {
			header: '@'
		},
	};
});