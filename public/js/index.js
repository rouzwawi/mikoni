var url = 'http://www.mikoni.se/';
function postMikoni(action)
{
    FB.api('/me/mikonam:' + action + '?chi=' + url,'post',
    function(response) {
        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post was successful! Action ID: ' + response.id);
        }
    });
}
function mikoni() { postMikoni('mikoni'); }
function concur() { postMikoni('concur'); }
