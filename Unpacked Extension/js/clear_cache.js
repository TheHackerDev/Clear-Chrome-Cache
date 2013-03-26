var clear_cache = function(minutes) {
	var ms = (minutes * 60) * 1000;
	var time = (new Date()).getTime() - ms;
	chrome.browsingData.removeCache({"since": time});
};

$('#submitButton').click(function(){
	var minutes = $('#minutesInput').val();
	clear_cache(minutes);
	$('#minutesInput').val('');
});