$(function() {
	function goto() {
		window.location = '/' + $('input.mikonam').val();
	}

	$('input.mikonam').watermark('mikoni?', { useNative: false });
	$('input.mikonam').keypress(function(event) {
		if (event.which == 13) goto();
	});
	$('input.return').click(function() { goto(); });
});

var url = 'http://www.mikoni.se/';
var did = false;
function postMikoni(action, title)
{
	if (did) return;
	did = true;

	$('.mikoni .doing').show('slow');
	FB.api('/me/mikonam:' + action + '?chi=' + url + title,'post',
	function(response) {
		if (!response || response.error) {
			$('.mikoni .doing').hide('slow');
			alert('Try logging it with Facebook first');
			did = false;
		} else {
			//alert('Post was successful! Action ID: ' + response.id);
			$('.mikoni .doing').hide('slow');
			$('.mikoni .did').show('slow');
			$.ajax({
				url: '/' + title + "/touch",
				type: 'put'
			})
		}
	});
}
function mikoni(title) { postMikoni('mikoni', title); }
function concur(title) { postMikoni('concur', title); }
