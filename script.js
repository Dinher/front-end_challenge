/* 
 ** DOM OBJECTS 
 */
var fieldStatus = document.getElementById('field-status');
var email = document.getElementById('signup_email');


/* 
 ** FUNCTIONS 
 */
// Calls from submit button
function submitEmail() {
  if (!validateEmail(email.value)) {
    error();
  } else {
    success();
  }
}

// Validates email string via REGEX
// Using <input type=email> would be great though....
function validateEmail(email) {
  //snippet from regex101.com
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let result;
  if ((result = regex.exec(email)) !== null) {                              //bad email   >:(    
    result.forEach((match, groupIndex) => {
      console.log(`Found match, group ${groupIndex}: ${match}`);
    });
    return true;
  } else {                                                                   // good email <:D
    return false;
  }
}

// Email validation ERROR - sets status and color
function error() {
  fieldStatus.classList.remove('success-colour');
  fieldStatus.classList.add('error-colour');
  fieldStatus.innerHTML = 'Please enter a valid email address';
  fieldStatus.classList.add('pop-in');
}

// Email validation SUCCESS - sets status and color
function success() {
  fieldStatus.classList.remove('error-colour');
  fieldStatus.classList.add('success-colour');
  fieldStatus.innerHTML = 'Registration success, check your inbox!';
  fieldStatus.classList.add('pop-in');
}