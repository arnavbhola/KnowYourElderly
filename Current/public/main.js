//Get current volunteers location 
// db.collection("Elders").get().then(snapshot => {
//     setupElder(snapshot.docs);
// });

function toggleElders() {
  var x = document.getElementById("togEld");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const elderList = document.querySelector('#EldersList');

db.collection("Elders").onSnapshot(snapshot => {
    snapshot.docs.forEach(doc =>{
        renderElders(doc) ;  
    })
})

function renderElders(doc) {
  let divcol = document.createElement('div');
  let div = document.createElement('div');
  let divcardbody = document.createElement('div');
  let name = document.createElement('h5');
  let request = document.createElement('p');

  divcol.setAttribute('data-id', doc.uid);
  divcol.setAttribute('class', 'col-sm-4');
  div.setAttribute('class', 'card');
  divcardbody.setAttribute('class', 'card-body');
  name.setAttribute('class', 'card-title');
  request.setAttribute('class', 'card-text');
  
  name.textContent = doc.data().Name;
  request.textContent = doc.data().Request;

  divcol.appendChild(div);
  div.appendChild(divcardbody);
  divcardbody.appendChild(name);
  divcardbody.appendChild(request);

  elderList.appendChild(divcol);
}

const up = document.querySelector("update");
if(up){
  up.addEventListener
}

// var x = db.collection('Volunteers').doc(firebase.auth().currentUser.uid);
// console.log(x);

// db.collection("Volunteers").onSnapshot(snapshot => {
//     snapshot.docs.forEach(doc =>{
//       const d = doc(firebase.auth().currentUser.uid);
//       console.log();
//     })
// })

// console.log(firebase.auth().currentUser.getToken);
// console.log(auth.currentUser.getToken.Location);

// db.collection("Volunteers").onSnapshot(snapshot => {
//   console.log(snapshot.doc.data);
// });

// const docSnapshots = querysnapshot.docs;

// for (var i in docSnapshots) {
//     const doc = docSnapshots[i].data();

//     // Check for your document data here and break when you find it
// }

//console.log(firebase.auth().currentUser.uid);


//const lat1 = user.
// //Calculate distance bewtween

//  const lat2 = 1;
//     //const lon2 = ;
//     const R = 6371e3; // metres
//     const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
//     const φ2 = lat2 * Math.PI / 180;
//     const Δφ = (lat2 - lat1) * Math.PI / 180;
//     const Δλ = (lon2 - lon1) * Math.PI / 180;

//     const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
//       Math.cos(φ1) * Math.cos(φ2) *
//       Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

//     const d = R * c; // in meters

//     console.log(d);
 