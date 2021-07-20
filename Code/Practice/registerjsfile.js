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


  function register(){
    email = document.getElementById('email').value
    full_name = document.getElementById('full_name').value
    password = document.getElementById('password').value
    phoneno = document.getElementById('phoneno').value
    city = document.getElementById('city').value

        if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password not entered!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(phoneno) == false || validate_field(city) == false)
    {
      alert(' One or More Extra fields are empty!! ')
      return
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then(function(){
        var user = auth.currentUser

        var database_ref = database.ref()


        var user_data = {
            
            full_name : full_name,
            email : email,
            password : password,
            phoneno : phoneno,
            city : city,
            //last_login : Date.now()
        }
        database_ref.child('users/' + phoneno).set(user_data)


        alert('User created')
    })
    .catch(function(error){
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
