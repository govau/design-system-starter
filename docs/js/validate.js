const fullName          = document.getElementById( 'name' );
const email             = document.getElementById( 'email' );
const helpDescription   = document.getElementById( 'help-comment' );
const form              = document.querySelector( 'form' );
const errorSummary      = document.getElementById('error-summary');
const errorSummaryMessages      = document.querySelector( '#error-summary p' );
const errorMessageHeading = document.querySelector( '#error-summary h3' );
const errors            = { name: '' , email: '' , 'help-comment': ''};


form.addEventListener( 'submit', function( event ) {
	event.preventDefault();
	if ( validateFirstName() && validateEmail() && validateHelpDescription() ) {
	}
	else {
		generateErrorSummary();
		RemoveClass( errorSummary, 'hide_content' );
		errorMessageHeading.focus();
	}
});

// Validation

function validateFirstName() {
	if( isEmpty( fullName )) {
		return;
	}

	return true;
};


function validateEmail() {
	if( isEmpty( email )) {
		return;
	};

	if( !containsCharacters( email, "EMAIL" )) {
		return;
	};

	return true;
};


function validateHelpDescription() {
	if( isEmpty( helpDescription )) {
		return;
	};

	if ( !meetLength( helpDescription, 10, 100 ) ) {
		return;
	};

	return true;
}

// Utility

function isEmpty( field ) {
	if ( field.value.trim() === '' ) {
		// set field invalid
		setInvalid( field, `${field.name} must not be empty`);
		return true;
	} else {
		// set field valid
		setValid(field);
		return false;
	}
};


function setInvalid( field, message ) {
	var errorField = field.nextElementSibling;

	RemoveClass(errorField, 'hide_content');
	errorField.innerHTML = message;
	AddErrors( field, message );
}

function setValid( field ) {
	var errorField = field.nextElementSibling;

	if ( !HasClass( errorField, 'hide_content' )) {
		AddClass( errorField, 'hide_content');
	};

	errorField.innerHTML = '';
	RemoveErrors( field );
};


function AddErrors( field, message ) {
	errors[field.id] = '<p><a onclick="stopUrlChange(event)" data-id="'+field.id+'" href="#' + field.id +'">' + message + '</a></p>';
};


function RemoveErrors( field ) {
	errors[field.id] = "";
};


function containsCharacters(field, code) {
	var regEx;
	switch (code) {
		case "EMAIL":
			// Email pattern
			regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			return matchWithRegEx(regEx, field, 'Enter an email in a valid format, like name@example.com');
		default:
			return false;
	}
};


function matchWithRegEx(regEx, field, message) {
	if (field.value.match(regEx)) {
		setValid(field);
		return true;
	} else {
		setInvalid(field, message);
		return false;
	}
};


function meetLength( field, minLength, maxLength ) {
	if ( field.value.trim().length > minLength && field.value.trim().length < maxLength ) {
		setValid( field );
		return true;
	} else if ( field.value.trim().length < minLength ) {
		setInvalid( field, field.name + ' must be atleast ' + minLength + ' characters long' );
		return false;
	} else {
		setInvalid( field, field.name + ' must be less than ' + maxLength + ' characters long' );
	}
}

function generateErrorSummary() {
	var errorSummary = "";

	for (var field in errors ) {

		if ( errors[ field ] ){
			errorSummary += errors[ field ];
		}
	}
	errorSummaryMessages.innerHTML = errorSummary;
}

function stopUrlChange( event ){
	event.preventDefault();
	console.log
	document.getElementById(event.target.getAttribute('data-id')).focus();

}
