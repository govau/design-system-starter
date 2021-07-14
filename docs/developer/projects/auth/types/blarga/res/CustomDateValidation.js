jQuery.validator.methods.date = function (value, element) {
    var valid = true;
    if (typeof value !== "undefined" && value.length > 0) {
        try{
            $.datepicker.parseDate('dd/mm/yy', value);
        }
        catch (err) {
            valid = false;
        }
    }
    return valid;
};