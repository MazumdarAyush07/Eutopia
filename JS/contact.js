const firebaseConfig = {
    apiKey: "AIzaSyDsDAYBx6MW6cxAbwXluPOhHVOI6SDsKTo",
    authDomain: "eutopia-23.firebaseapp.com",
    databaseURL: "https://eutopia-23-default-rtdb.firebaseio.com",
    projectId: "eutopia-23",
    storageBucket: "eutopia-23.appspot.com",
    messagingSenderId: "594111123259",
    appId: "1:594111123259:web:389503d25628f0ad27311e",
    measurementId: "G-VKDBH8Z1MS"
  };


  firebase.initializeApp(firebaseConfig);

  // reference your database
  var contact_us_formDB = firebase.database().ref("contact_us_form");
  
  document.getElementById("contact_us_form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var firstName = getElementVal("firstName");
    var lastName = getElementVal("lastName");
    var email= getElementVal("email");
    var phoneNumber= getElementVal("phoneNumber");
    var message = getElementVal("message");
  
    saveMessages(firstName,lastName,email,phoneNumber,message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact_us_form").reset();
  }
  
  const saveMessages = (firstName,lastName,email,phoneNumber,message) => {
    var newcontact_us_form = contact_us_formDB.push();
  
    newcontact_us_form.set({
        firstName: firstName,
        lastName : lastName,
        email:email,
        phoneNumber:phoneNumber,
        message:  message,
    
        
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };