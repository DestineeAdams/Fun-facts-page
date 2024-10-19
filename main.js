// Define the API URL
const techyAPI = 'https://techy-api.vercel.app/api/json';
const uselessfactsAPI = 'https://uselessfacts.jsph.pl/api/v2/facts/random';

var techyText = "";
var uselessfactsText = "";



const outputElement = document.getElementById('output');


function randint() {
  return Math.floor(Math.random() * 3) + 1;
}


function getPhrase() {
  var TEXT = "test"
  
  if (randint() === 1) {
  
  
    // Make a GET request techyAPI
    fetch(techyAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        TEXT = data["message"];
        
        console.log("getPhase 1",TEXT);

        document.getElementById("output").innerHTML = TEXT;

      })
      .catch(error => {
        console.error('Error:', error);
      });
  } 
  
  else {
    // Make a GET request uselessfacts
    fetch(uselessfactsAPI)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        TEXT = data["text"];
        
        document.getElementById("output").innerHTML = TEXT;

      })
      .catch(error => {
        console.error('Error:', error);
      });

  }
  
  getimg();
  
  return TEXT
}



function getimg(){
  
  if (randint() === 1) {
    document.getElementById("randimg").setAttribute('src', './ex/face1.png');
    document.getElementById("randimg").style.paddingLeft = "25%"; 
  } 
  
  else if(randint() == 2){
    document.getElementById("randimg").setAttribute('src', './ex/face2.png');
    // document.getElementById("randimg").style.width = "50%"; 
    document.getElementById("randimg").style.paddingLeft = "15%"; 

  }
  
  else {
    document.getElementById("randimg").setAttribute('src', './ex/face3.png');
    document.getElementById("randimg").style.paddingLeft = "8%"; 

    
  }


}