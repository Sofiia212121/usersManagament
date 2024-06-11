function validatePasswordAndConfirmation(
    passwordElementId = 'password',
    passwordConfirmationElementId = 'passwordConfirmation'
) {
    const password = document.getElementById(passwordElementId).value;
    const confirmation = document.getElementById(passwordConfirmationElementId).value;

    if (password !== confirmation) {
        alert('Passwords mismatch!');
        return false;
    }

    return true;
}
