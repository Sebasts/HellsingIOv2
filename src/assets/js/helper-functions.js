
window.onSignIn = function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    window.gapi = profile.getAuthInstance();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    console.log(profile);

    var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://hellsing.io/token/api/tokenservice/google');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
  console.log('Signed in as: ' + xhr.responseText);
};
xhr.send('token=' + profile.get, "app=HELLSINGIO");

  }

  window.signOut = function signOut() {
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
