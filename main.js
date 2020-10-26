var mainApp = {};
(function(){
    var firebase = app_fireBase;
    var uid = null;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        uid = user.id;
      // User is signed in.
    }else{
        uid = user.id;
        window.location.replace("login.html");
    }
  });

  function logOut(){
      firebase.auth().signOut();
  }

  mainApp.logOut = logOut;
})() 
