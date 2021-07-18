// Add, Has and Remove class for IE8
function AddClass( element, elementClass ) {
	return element.className += " " + elementClass;
}

function HasClass( element, elementClass ) {
	return element.className.match( new RegExp( "(\\s|^)" + elementClass + "(\\s|$)") );
}

function RemoveClass( element, elementClass ) {
	if( HasClass( element, elementClass ) ) {
		// This adds a space every time a class is removed, we should fix this
		var reg = new RegExp( "(\\s|^)" + elementClass + "(\\s|$)" );
		element.className = element.className.replace( reg, " " );
	}
}


// Change EventListener to attachEvent
function AddEvent( elements, event, onEvent ) {
	if( elements ) {
		// Create an array of elements if a singular or array of elements is passed in
		if( elements.length === undefined ) {
			elements = [ elements ];
		}

		// For each element add the correct event listener
		for( var i = 0; i < elements.length; i++ ) {
			if( typeof Element.prototype.addEventListener === "undefined" ) {

				// Make sure that we pass this
				( function( element, event ) {
					element.attachEvent( "on" + event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
			else {
				( function( element, event ) {
					element.addEventListener( event, function( actualEvent ) {
						onEvent( actualEvent, element );
					});
				})( elements[ i ], event );
			}
		}
	}
}


// Prevent event for IE8 and modern browsers
function PreventEvent( event ) {
	event.preventDefault ? event.preventDefault() : ( event.returnValue = false );
}


// Get elements style
function GetStyle( element, property ) {
	return (
		typeof getComputedStyle !== 'undefined'
			? getComputedStyle( element, null)
			: element.currentStyle
	)[ property ]; // avoid getPropertyValue altogether
}

//polyfill for IE
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim#Polyfill
if(typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
	  return this.replace(/^\s+|\s+$/g, '');
	};
}

// polyfill for ie8
// https://developer.mozilla.org/en-US/docs/Web/API/NonDocumentTypeChildNode/nextElementSibling#Polyfill_for_Internet_Explorer_8
if(!("nextElementSibling" in document.documentElement)){
    Object.defineProperty(Element.prototype, "nextElementSibling", {
        get: function(){
            var e = this.nextSibling;
            while(e && 1 !== e.nodeType)
                e = e.nextSibling;
            return e;
        }
    });
}
