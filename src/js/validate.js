var fullName             = document.getElementById( 'name' );
var email                = document.getElementById( 'email' );
var helpDescription      = document.getElementById( 'help-comment' );
var formSubmit           = document.getElementById( 'form-submit' );
var errorSummary         = document.getElementById( 'error-summary' );
var errorSummaryMessages = document.getElementById( 'error-list' );
var errorMessageHeading  = document.getElementById( 'error-heading' );
var errors               = { name: '' , email: '' , 'help-comment': ''};


/**
 * Add event listener when form submitted
 */
AddEvent( formSubmit, 'click', function( event, $this ) {
	if ( !validateForm() ) {
		PreventEvent( event );
		RemoveClass( errorSummary, 'hide_content' );
		generateErrorSummary();
		errorMessageHeading.focus();
		var currentTitle = document.title;
		document.title = "Error - " + currentTitle;
	}
});


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
	return isFieldEmpty( fullName );
};


/**
 * Validates email field
 */
function validateEmail() {
	if( isFieldEmpty( email )) return;
	if( !matchExpression( email, "EMAIL" )) return;
	return true;
};


/**
 * Validates description field
 */
function validateHelpDescription() {
	if( isFieldEmpty( helpDescription )) return;
	if ( !meetLength( helpDescription, 10, 100 ) ) return;
	return true;
}


//--------------------------------------------------------------------------------------------------------------------------------------------------------------
// UTILITY FUNCTIONS
//--------------------------------------------------------------------------------------------------------------------------------------------------------------


/**
 * Checks to see if a text field is empty
 *
 * @param { HTMLInputElement } field    - The html input element
 *
 * @return {boolean}                    - False if not empty
 */
function isFieldEmpty( field ) {
	if ( field.value.trim() === '' ) {
		// set field invalid
		setInvalid( field,  field.name + ' must not be empty');
		return true;
	} else {
		// set field valid
		setValid( field );
		return false;
	}
};


/**
 * Displays error text and sets field to invalid
 *
 * @param { HTMLElement } field  - The field to set invalid
 * @param { string } message     - The error message to be displayed
 */
function setInvalid( field, message ) {
	if ( !HasClass( field, 'au-text-input--invalid' ) ) {
		AddClass( field, 'au-text-input--invalid' );
	};

	// the error span element
	var errorField = field.previousElementSibling;
	RemoveClass( errorField, 'hide_content' );
	errorField.innerHTML = message;

	field.setAttribute( 'aria-invalid', true );
	AddError( field, message );
}


/**
 * Sets a field to be valid. Removes any error messages and stylings
 *
 * @param { HTMLElement } field  - The field to set valid
 */
function setValid( field ) {
	//the error span element
	var errorField = field.previousElementSibling;

	if ( !HasClass( errorField, 'hide_content' )) {
		AddClass( errorField, 'hide_content');
	};

	RemoveClass( field, 'au-text-input--invalid');

	errorField.innerHTML = '';
	field.setAttribute( 'aria-invalid', false );
	RemoveError( field );
};


/**
 * Adds the error messages to an error message summary which is displayed when the form is submitted
 *
 * @param { HTMLElement } field  - The field to add errors to
 * @param { string } message     - The error message to be shown in the error sumamry
 */
function AddError( field, message ) {
	errors[ field.id ] = '<li><a onclick="stopUrlChange(event)" data-id="'+field.id+'" href="#' + field.id +'">' + message + '</a></li>';
};


/**
 * Removes errors from the errors array if the field is valid
 *
 * @param { HTMLElement } field  - The html form control to remove errors from
 */
function RemoveError( field ) {
	errors[field.id] = "";
};


/**
 * Checks to see if a field contains a pattern
 *
 * @param { HTMLElement } field  - The field to be validated against
 * @param { string } code        - The type of
 */
function matchExpression( field, code ) {
	var regEx;
	switch ( code ) {
		case "EMAIL":
			// Email pattern
			// reg ex patter found here: https://emailregex.com/
			regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return matchWithRegEx( regEx, field, 'Enter an email in a valid format, like name@example.com' );
		//another example
		default:
			return false;
	}
};


/**
 * Match
 *
 * @param {RegExp} regEx         - The reg ex type to match the field with
 * @param { HTMLElement } field    - The text field to test against
 * @param { string } message       - The error message to be displayed if invalid
 */
function matchWithRegEx( regEx, field, message ) {
	if ( field.value.match( regEx ) ) {
		setValid( field );
		return true;
	} else {
		setInvalid( field, message );
		return false;
	}
};


/**
 * Checks if a field meets length requirements
 *
 * @param { HTMLElement } field  - the field to check against
 * @param { string } minLength   - the minimum length of the field
 * @param { string } maxLength   - the maximum length of the field
 */
function meetLength( field, minLength, maxLength ) {
	// If field length meets requirements
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
	var errorSummaryList = "";

	// loop over the error array and generate a list of errors
	for ( var field in errors ) {
		if ( errors[ field ] ){
			errorSummaryList += errors[ field ];
		}
	}
	//add the list of errors to the unordered list in the page alert
	errorSummaryMessages.innerHTML = errorSummaryList;
}


/**
 * Stop url changing when clicking in links in the error message summary and focus on selected field
 *
 * @param { Object } event
 */
function stopUrlChange( event ){
	PreventEvent( event );

	//ie8 polyfill
	var eventTarget = event.target || event.srcElement;
	document.getElementById( eventTarget.getAttribute('data-id') ).focus();
}
