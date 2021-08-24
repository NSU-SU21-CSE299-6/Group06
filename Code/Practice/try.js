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



        function submitfirebase(){
              auth.createUserWithNameandAge(name, age)
                .then(function(){
                    var user = auth.currentUser

                    var database_ref = database.ref()


                    var user_ata = {
                        
                        name: document.getElementById("nameField").value,
                        age: document.getElementById("ageField").value
                    }
                    database_ref.child('aausers/' + name).set(user_ata)


                    alert('User created')
                })
        }