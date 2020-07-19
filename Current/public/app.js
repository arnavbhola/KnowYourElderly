// const elderList = document.querySelector('.info');

// const setupElder = (data) => {
//   let html = '';
//   data.forEach(doc => {
//     const eldCard = doc.data();
//     const li = `
//       <div class="card" style="width: 18rem;">
//         <div class="card-body">
//           <h5 class="card-title">${eldCard.Name}</h5>
//           <p class="card-text">${eldCard.Request}</p>
//         </div>
//       </div>
//     `;
//     html += div;
//   });

//   elderList.innerHTML = html;
// };


//signup
const signup = document.querySelector('#signup-form');
// const userID;
if (signup) {
  signup.addEventListener('submit', (e) => {

    e.preventDefault();

    const email = signup['input-email'].value;
    const password = signup['input-password'].value;

    auth.createUserWithEmailAndPassword(email, password).then(function (cred) {
      console.log(cred.user);

      signup.reset();
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('User did not sign up correctly');
      console.log(errorCode);
      console.console.log(errorMessage);
    });

  });

}
//logout
const logout = document.querySelector('#logout');

if (logout) {
  logout.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("user signed out");
    auth.signOut();
  });
}


//login
const loginform = document.querySelector('#login-form');
if (loginform) {
  loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginform['login-email'].value;
    const password = loginform['login-password'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log("user is logged in");
      loginform.reset();
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log('User did not log in correctly');
      console.log(errorCode);
      console.console.log(errorMessage);
    });

  });
}
//login end

//Add Elders: location, name, and request to database
const createInput = document.querySelector('#request-form');
if (createInput) {
  console.log("in");
  getLocationElder();
}

//Add Volunteers: location
const volunteerInput = document.querySelector('#findElders');
if (volunteerInput) {
  console.log("in volunteer");
  getLocationVolunteer();
}

function getLocationElder() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPositionElder);
  } else {

  }
}

function showPositionElder(position) {
  var a = position.coords.latitude;
  var b = position.coords.longitude;

  console.log(a);
  console.log(b);

  const geoPoint = new firebase.firestore.GeoPoint(a, b);
  createInput.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('Elders').doc(firebase.auth().currentUser.uid).set({
      Name: createInput['input-name'].value,
      Request: createInput['input-request'].value,
      Locations: geoPoint,

      // Location: myGeoPoint
    }).then(() => {
      createInput.reset();
    }).catch(err => {
      console.log(err.message);
    });
  });

}

function getLocationVolunteer() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPositionVolunteer);
  } else {

  }
}

function showPositionVolunteer(position) {
  var a = position.coords.latitude;
  var b = position.coords.longitude;

  console.log(a);
  console.log(b);

  const geoPoint = new firebase.firestore.GeoPoint(a, b);
  volunteerInput.addEventListener('click', (e) => {
    e.preventDefault();
    db.collection('Volunteers').doc(firebase.auth().currentUser.uid).set({
      Location: geoPoint,
      // Location: myGeoPoint
    }).catch(err => {
      console.log(err.message);
    });
  });

}