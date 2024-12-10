function displayFormErrors(errorResponse, formSelector = '') {
    if (!errorResponse.validationErrors) {
        alert(errorResponse.errorMessage);
        return;
    }

    const errors = errorResponse.validationErrors;

    const fieldSelectors = getFormFields(formSelector);

    $('.error-message').each(function () {
        $(this).remove();
    });

    for (const field in errors) {
        if (!fieldSelectors[field]) {
            continue;
        }

        const inputElement = $(fieldSelectors[field]);

        if (!inputElement) {
            continue;
        }

        const parentElement = inputElement.parent();

        errors[field].forEach(errorMessage => {
            const errorElement = $('<div>', {
                class: 'error-message text-danger',
                text: errorMessage
            });

            parentElement.append(errorElement);
        });
    }
}

function getFormFields(formSelector) {
    if (!formSelector) {
        return {};
    }
    
    const fieldSelectors = {};
    $(formSelector).find('input').each(function () {
        const name = $(this).attr('name');
        const id = $(this).attr('id');
        if (name && id) {
            fieldSelectors[name] = `#${id}`;
        }
    });

    return fieldSelectors;
}
