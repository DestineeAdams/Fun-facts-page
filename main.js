// Define the API URL
const techyAPI = 'https://techy-api.vercel.app/api/json';
const meowfactsApi = "https://meowfacts.herokuapp.com/";

var techyText = "";
var meowfactsApiText = "";



function randint() {
  return Math.floor(Math.random() * 3) + 1;
}




function getimg(){
  
  if (randint() === 1) {
    document.querySelector("img").src('src', './ex/face1.png');
    document.getElementById("randimg").style.paddingLeft = "25%"; 
  } 
  
  else if(randint() == 2){
    document.getElementById("randimg").setAttribute('src', './ex/face2.png');
    document.getElementById("randimg").style.paddingLeft = "15%"; 
  }
  
  else {
    document.getElementById("randimg").setAttribute('src', './ex/face3.png');
    document.getElementById("randimg").style.paddingLeft = "8%"; 

  }


}