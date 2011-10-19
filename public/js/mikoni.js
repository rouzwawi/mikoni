var url = 'http://www.mikoni.se/';
function postMikoni(action, title)
{
	FB.api('/me/mikonam:' + action + '?chi=' + url + title,'post',
			function(response) {
				if (!response || response.error) {
					alert('Try logging it with Facebook first');
				} else {
					//alert('Post was successful! Action ID: ' + response.id);
					$.ajax({
						url: '/' + title + "/touch",
						type: 'put'
					})
				}
			});
}
function mikoni(title) { postMikoni('mikoni', title); }
function concur(title) { postMikoni('concur', title); }
