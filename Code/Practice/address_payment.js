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


function continuetocheckout() {
  // Get all our input fields
  let Total_price = document.getElementById('pricewithoutlogin').value
  let TrxID = document.getElementById('trxidwithoutlogin').value

if(TrxID == ""){
  alert("Please enter transaction ID")
}else{
  var user_ref = database.ref('Payment_details/' + TrxID)
  user_ref.on('value',function(snapshot){
    var data = snapshot.val()

    alert(data.Total_price)
  })
}

}

