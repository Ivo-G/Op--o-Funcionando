// Import stylesheets
import './style.css';

function createNode(element) {
  return document.createElement(element); 
  // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); 
  // Append the second parameter(element) to the first one
}

//Gets data from Server
//fetch('https://5c77af536810ec00148d0f49.mockapi.io/users')
 //const ul = document.getElementById('indice'); // Get the list where we will place our authors
  const url = 'https://https://services.sentinel-hub.com/ogc/fis/035c119b-e137-42ba-89cf-3848642e2efa?LAYER=NDVI&CRS=CRS:84&BBOX=-56.368635,-30.447046,-56.353515,-30.436834&WIDTH=512&HEIGHT=401&TIME=2021-01-27/2021-02-27&STYLE=INDEX.me/api/?results=10'; // Get 10 random users

fetch(url)
.then(response => response.json())
.then(function(data) {
    let indice = data.results; // Get the results
    })
   return Response


