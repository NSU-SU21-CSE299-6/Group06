// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // Initialize variables
  const auth = firebase.auth()
  const database= firebase.database()

  // set up our registration function
  function register(){
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
    

    favourite_song = document.getElementById('favourite_song').value
    milk_before_cereal = document.getElementById('milk_before_cereal').value

    //Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Outta Line!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(favourite_song) == false || validate_field(milk_before_cereal) == false)
    {
      alert(' One or More Extra fields is Outta Line!! ')
      return
    }

    // Move on with Auth
    auth.creatUserWithEmailAndPassword(email, password)
    .then(function(){

      //Declare user variable
      var user = auth.currentUser
      // Add this user to Firebase Databse
      var database_ref = database.ref()

      // Create User data 
      var user_data = {
        email : email,
        full_name : full_name,
        favourite_song : favourite_song,
        milk_before_cereal :milk_before_cereal,
        last_login : Data.now()
      }
      database_ref.child(' users/' + user.uid).set(user_data)





    })
    .catch(function(error){
      // Firebase will use this to alert of
      var error_code= error.code
      vae error_message = error.message 

      alert (error_message)
    })
    


  }

  function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true ) {
      //Email is good
      return true

    }
    elsea{
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
  function validate_field(field){
    if (field == null) {
      return false
    }
    if (field.length <=0){
      return false
    }
    else{
      return true
    }
  }



  