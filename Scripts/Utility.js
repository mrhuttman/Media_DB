// AJAX helper function - calls WCF web service
function CDServiceAJAX(type, method, data, successCallback, errorCallback)
{
    $.ajax({
        type: type,
        url: 'http://localhost:64246/Media_DB/CDServiceWCF.svc/' + method + '?callback=?',
        contentType: 'application/json; charset=utf-8',        
        data: data,
        dataType: 'jsonp',
        success: function (result) {            
            if ('function' === typeof successCallback)
            {
                successCallback(result);
            }            
        },
        error: function (xhr, status, error) {
            console.log(error);
            if ('function' === typeof errorCallback)
            {
                errorCallback(error);
            }
        }
    });
}

// Hide Bootstrap alerts without removing them from the DOM
// http://jsfiddle.net/cQNFL/21/
$("[data-hide]").on("click", function ()
{
    $(this).closest("." + $(this).attr("data-hide")).addClass('hidden');
});

// Get parameter from a URL - used on edit and search results pages
// http://stackoverflow.com/questions/11582512/how-to-get-url-parameters-with-javascript/11582513#11582513
function getURLParameter(name)
{
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}