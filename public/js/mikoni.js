var url = 'http://www.mikoni.se/';
function postMikoni(action, title)
{
    FB.api('/me/mikonam:' + action + '?chi=' + url + title,'post',
    function(response) {
        if (!response || response.error) {
            alert('Error occured');
        } else {
            alert('Post was successful! Action ID: ' + response.id);
        }
    });
}
function mikoni(title) { postMikoni('mikoni', title); }
function concur(title) { postMikoni('concur', title); }
