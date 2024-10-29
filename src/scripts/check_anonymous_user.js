$(document).ready(function () {
    if (!getToken()) {
        redirectToLoginPage();
    }
});
