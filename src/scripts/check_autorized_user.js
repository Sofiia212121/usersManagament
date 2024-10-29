$(document).ready(function () {
    if (!getToken()) {
        return;
    }

    $.ajax({
        url: `${apiHost}/current-user`,
        type: 'GET',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + getToken());
        },
        success: function (response) {
            if (response) {
                redirectToUsersPage();
            }
        },
        error: function (error) {
            console.log(error);
        },
    });
});
