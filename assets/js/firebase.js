// Initialize Firebase
var config = {
  apiKey: "AIzaSyDT_eA3lYnL6z31t2JBAiKw97hH_YCGmIk",
  authDomain: "mywebsite-74048.firebaseapp.com",
  databaseURL: "https://mywebsite-74048.firebaseio.com",
  projectId: "mywebsite-74048",
  storageBucket: "mywebsite-74048.appspot.com",
  messagingSenderId: "845324481251"
};
firebase.initializeApp(config);

// Reference messages collection
var messageRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();
  /* TEST
  console.log(123);
  */

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // TEST
  console.log(name);
  
 
  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  }, 3000)

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message) {
  var newMessageRef = messageRef.push();
  newMessageRef.set({
    name: name,
    email: email,
    message: message,
  })
}