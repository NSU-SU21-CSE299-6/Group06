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
  var TrxID = document.getElementById('trxidwithoutlogin').value


  var user_ref = database.ref('Payment_details/' + 'TrxID: ' +TrxID)
  user_ref.on('value', function(snapshot) {

    var data = snapshot.val()

    if(TrxID == ""){
      swal("Transaction ID blanked", "Please enter your transaction ID", "warning");
    }else{
      if(data = snapshot.val()){
        swal("Thank you", "Your payment is successfull", "success");
        document.getElementById("verifypayment").style.display = "none";
        document.getElementById("continueprint").style.display = "block";
        document.getElementById("trxidwithoutlogin").disabled = "true";
        document.getElementById("trxidwithoutlogin").style.border = "none";


    } else{
      swal("Sorry to say", "Your Transaction ID does not matched", "error");
    }
    }

  });
}

function continuetoprint(){
  var trxid = document.getElementById('trxidwithoutlogin').value;
  var tpricewithout = document.getElementById('pricewithoutlogin').value;
  var titemswithout = document.getElementById('itemswithoutlogin').value;

  var fnamewithout = document.getElementById('fname').value;
  var emailwithout = document.getElementById('email').value;
  var phonewithout = document.getElementById('phoneno1').value;
  var districtwithout = document.getElementById('dist').value;
  var addresswithout = document.getElementById('adr').value;

      localStorage.setItem("trxid1", trxid);
      localStorage.setItem("tpricewithout1", tpricewithout);
      localStorage.setItem("titemswithout1", titemswithout);

      localStorage.setItem("fnamewithout", fnamewithout);
      localStorage.setItem("emailwithout", emailwithout);
      localStorage.setItem("phonewithout", phonewithout);
      localStorage.setItem("districtwithout", districtwithout);
      localStorage.setItem("addresswithout", addresswithout);
      return false;

}

