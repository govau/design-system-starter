const fullName             = document.getElementById( 'name' );
const email                = document.getElementById( 'email' );
const helpDescription      = document.getElementById( 'help-comment' );
const form                 = document.querySelector( 'form' );
const errorSummary         = document.getElementById('error-summary');
const errorSummaryMessages = document.querySelector( '#error-summary p' );
const errorMessageHeading  = document.querySelector( '#error-summary h3' );
const errors               = { name: '' , email: '' , 'help-comment': ''};

/**
 * Add event listener when form submitted
 */
form.addEventListener( 'submit', function( event ) {
	if ( validateForm() ) {
	}
	else {
		PreventEvent( event );
		generateErrorSummary();
		RemoveClass( errorSummary, 'hide_content' );
		errorMessageHeading.focus();
	}
});

// Validation
/**
 * Validate all fields on the form
 *
 */
function validateForm() {
	var isFormValid  = false;
	isFormValid = validateName();
	isFormValid = validateEmail();
	isFormValid = validateHelpDescription();
	return isFormValid;
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Field validation functions
//--------------------------------------------------------------------------------------------------------------------------------------------------------------

/**
 * Validates name field
 */
function validateName() {
	if( isEmpty( fullName )) return;
	return true;
};

/**
 * Validates email field
 */
function validateEmail() {
	if( isEmpty( email )) return;
	if( !containsCharacters( email, "EMAIL" )) return;
	return true;
};

/**
 * Validates description field
 */
function validateHelpDescription() {
	if( isEmpty( helpDescription )) return;
	if ( !meetLength( helpDescription, 10, 100 ) ) return;
	return true;
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// UTILITY FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * Checks to see if a text field is empty
 * @param {HTMLInputElement} field    - The html input element
 * @return {boolean}                  - False if not empty
 */
function isEmpty( field ) {
	if ( field.value.trim() === '' ) {
		// set field invalid
		setInvalid( field, `${ field.name } must not be empty`);
		return true;
	} else {
		// set field valid
		setValid( field );
		return false;
	}
};

/**
 * Displays error text and sets field to invalid
 * @param {HTMLElement} field  - The field to set invalid
 * @param {String} message     - The error message to be displayed
 */
function setInvalid( field, message ) {
	if ( !HasClass( field, 'au-text-input--invalid' ) ) {
		AddClass( field, 'au-text-input--invalid' );
	};
	var errorField = field.nextElementSibling;
	RemoveClass( errorField, 'hide_content' );
	errorField.innerHTML = message;

	AddErrors( field, message );
}

/**
 * Sets a field to be valid. Removes any error messages and stylings
 * @param {HTMLElement} field  - The field to set valid
 */
function setValid( field ) {
	var errorField = field.nextElementSibling;

	if ( !HasClass( errorField, 'hide_content' )) {
		AddClass( errorField, 'hide_content');
	};

	RemoveClass( field, 'au-text-input--invalid');

	errorField.innerHTML = '';
	RemoveErrors( field );
};

/**
 * Adds the error messages to an error message summary which is displayed when the form is submitted
 * @param {HTMLElement} field  - The field to add errors to
 * @param {String} message     - The error message to be shown in the error sumamry
 */
function AddErrors( field, message ) {
	errors[ field.id ] = '<p><a onclick="stopUrlChange(event)" data-id="'+field.id+'" href="#' + field.id +'">' + message + '</a></p>';
};

/**
 * Removes errors from the errors array if valid
 * @param {HTMLElement} field  - The html form control to remove errors from
 */
function RemoveErrors( field ) {
	errors[field.id] = "";
};


/**
 * Checks to see if a field contains a pattern
 * @param {HTMLElement} field  - The field to be validated against
 * @param {String} code        - The type of
 */
function containsCharacters( field, code ) {
	var regEx;
	switch ( code ) {
		case "EMAIL":
			// Email pattern
			regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return matchWithRegEx(regEx, field, 'Enter an email in a valid format, like name@example.com');
		//another example
		default:
			return false;
	}
};

/**
 *
 * @param {RegExp} regEx  - The reg ex type to match the field with
 * @param {HTMLElement} field       - The text field to test against
 * @param {String} message     - The error message to be displayed if invalid
 */
function matchWithRegEx(regEx, field, message) {
	if (field.value.match(regEx)) {
		setValid(field);
		return true;
	} else {
		setInvalid(field, message);
		return false;
	}
};

/**
 * Checks if a field meets length requirements
 * @param {HTMLElement} field  - the field to check against
 * @param {String} minLength   - the minimum length of the field
 * @param {String} maxLength   - the maximum length of the field
 */
function meetLength( field, minLength, maxLength ) {
	if ( field.value.trim().length >= minLength && field.value.trim().length <= maxLength ) {
		setValid( field );
		return true;
	} else if ( field.value.trim().length < minLength ) {
		setInvalid( field, field.name + ' must be atleast ' + minLength + ' characters long' );
		return false;
	} else {
		setInvalid( field, field.name + ' must be less than ' + maxLength + ' characters long' );
	}
}

/**
 * Generates the error summary on top of page in the page alert
 */
function generateErrorSummary() {
	var errorSummary = "";

	for (var field in errors ) {

		if ( errors[ field ] ){
			errorSummary += errors[ field ];
		}
	}
	errorSummaryMessages.innerHTML = errorSummary;
}

//Stop url changing when clicking in links in the error message summary
function stopUrlChange( event ){
	PreventDefault( event );
	document.getElementById( event.target.getAttribute('data-id') ).focus();
}
