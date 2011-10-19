var url = 'http://www.mikoni.se/';
var did = false;
function postMikoni(action, title)
{
	if (did) return;
	did = true;

	FB.api('/me/mikonam:' + action + '?chi=' + url + title,'post',
	function(response) {
		if (!response || response.error) {
			alert('Try logging it with Facebook first');
			did = false;
		} else {
			//alert('Post was successful! Action ID: ' + response.id);
			$('.did.hide').show('slow');
			$.ajax({
				url: '/' + title + "/touch",
				type: 'put'
			})
		}
	});
}
function mikoni(title) { postMikoni('mikoni', title); }
function concur(title) { postMikoni('concur', title); }
