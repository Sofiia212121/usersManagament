function addUser(userData, successCallback, errorCallback) {
    $.ajax({
        url: `${apiHost}/register`,
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: JSON.stringify(userData),
        success: successCallback,
        error: errorCallback
    });
}
