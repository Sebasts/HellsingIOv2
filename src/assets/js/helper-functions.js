
window.onSignIn = function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    var token = googleUser.getAuthResponse().id_token;

    var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://hellsing.io/token/api/tokenservice/google');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('token=' + token + "&app=HELLSINGIO");

  }

  window.signOut = function signOut() {
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
