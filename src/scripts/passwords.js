function validatePasswordAndConfirmation(
    passwordElementId = 'password',
    passwordConfirmationElementId = 'passwordConfirmation'
) {
    const password = $('#' + passwordElementId).val();
    const confirmation = $('#' + passwordConfirmationElementId).val();

    if (password !== confirmation) {
        alert('Passwords mismatch!');
        return false;
    }

    return true;
}
