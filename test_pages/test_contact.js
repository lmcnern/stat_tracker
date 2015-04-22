function validateForm() {
  var userName = document.getElementById('user-name').value;
  var userEmail = document.getElementById('user-email').value;
  var userMsg = document.getElementById('user-msg').value;
  var x = document.getElementById('user-name', 'user-email', 'user-msg').value;

  if (x == null || x == "") {
    document.getElementById('submission-result').innerHTML = "Please fill out the requested information.";
  } else if (userEmail.indexOf('@') != true) {
    document.getElementById('submission-result').innerHTML = "Please use a valid email address.";
  } else {
    document.getElementById('submission-result').innerHTML = "Form submitted!";
  }
}

// function showInput() {
//   var userName = document.getElementById('user-name').value;
//   var userEmail = document.getElementById('user-email').value;
//   var userMsg = document.getElementById('user-msg').value;

//   var sendFeedback =



// //event listener
// document.getElementById('user-submit').addEventListener('click', showInput);
