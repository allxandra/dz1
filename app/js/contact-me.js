$(document).ready(function() {

	if(!Modernizr.input.placeholder){
	$('input, textarea').placeholder();

})();

var fixPlaceholder = (function(){
	$('input[placeholder], textarea[placeholder]').placeholder();
})();