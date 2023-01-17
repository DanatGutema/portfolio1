

/*

<form onsubmit="return false"></form>
document.addEventListener("DOMContentLoaded", function() {
    fields.input1 = document.getElementById('input1');
    fields.input2 = document.getElementById('input2');
    fields.input3 = document.getElementById('input3');
    fields.input4 = document.getElementById('input4');
}
)


function isNotEmpty(value) {
    if (value == null || value == 'undefined' ) return false;

    return (value.length> 0);
}

function isEmail(email) {
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return regex.test(String(email).toLowerCase());
   }


   function fieldValidation(field, validationFunction) {
    if (field == null) return false;
   
    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }
   
    return isFieldValid;
   }



   function isValid() {
    var valid = true;
    
    valid &= fieldValidation(fields.input1, isNotEmpty);
    valid &= fieldValidation(fields.input2, isNotEmpty);
    valid &= fieldValidation(fields.input3, isNotEmpty);
    valid &= fieldValidation(fields.input4, isNotEmpty);
     return valid;
   }



   class User{
    constructor(input1, input2, input3, input4) {
        this.input1 = input1;
        this.input2 = input2;
        this.input3 = input3;
        this.input4 = input4;
    }
   }


   function sendContact() {
    fields.input1 = getinput1();


    if (isValid()) {
        let usr = new User(input1.value, input2.value,input3.value, input4.value);
        alert(`${usr.input1} thanks for registring.`)
    } else {
        alert("there was an error")
    }
   }*/