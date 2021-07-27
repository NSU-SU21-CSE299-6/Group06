var firebaseConfig = {
    apiKey: "AIzaSyBg9KGbdOtnlQzfg44Hdok3oQEkxY2Ve_o",
    authDomain: "online-service-marketplace.firebaseapp.com",
    databaseURL: "https://online-service-marketplace-default-rtdb.firebaseio.com",
    projectId: "online-service-marketplace",
    storageBucket: "online-service-marketplace.appspot.com",
    messagingSenderId: "1096386179814",
    appId: "1:1096386179814:web:fdc2df99098b00eae28127",
    measurementId: "G-CKLPS95G8H"
  };
  firebase.initializeApp(firebaseConfig);



  const auth = firebase.auth()
  const database = firebase.database()

  // set up login fields
function login () {
  // Get all our input fields
  email = document.getElementById('email').value
  password = document.getElementById('password').value

  // Validate input fields
  if (validate_email(email) == false || validate_password(password) == false) {
    alert('Email or Password is Outta Line!!')
    return
    // Don't continue running the code
  }

  auth.signInWithEmailAndPassword(email, password)
  .then(function() {
    // Declare user variable
    var user = auth.currentUser

    // Add this user to Firebase Database
    var database_ref = database.ref()

    // Create User data
    var user_data = {
      last_login : Date.now()
    }

    // Push to Firebase Database
    database_ref.child('users/' + user.uid).update(user_data)

    // DOne
    alert('User Logged In!!')

  })
  .catch(function(error) {
    // Firebase will use this to alert of its errors
    var error_code = error.code
    var error_message = error.message

    alert(error_message)
  })
}


function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true ) {
      //Email is good
      return true

    }
    else{
      // Email is not good
      return false
    }

  }
  function validate_password(password) {
    // firebase only accept lengths greater than 6
    if (password <6) {
      return false
    }
    else{ return true
    }
  }