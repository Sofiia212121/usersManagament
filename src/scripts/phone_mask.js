function applyPhoneMask(selector) {
    $(selector).inputmask('+38 (099) 99-99-999', {
        'clearIncomplete': true
    });
}

$(document).ready(function () {
    applyPhoneMask('.phoneMask');
});
