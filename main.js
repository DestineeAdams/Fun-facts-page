let woosh = new Audio('./woosh-230554.mp3');

document.querySelector('button').addEventListener('click', () => {
    getimg();
    gietApi();
    woosh.play();
})


function randint() {
  return Math.floor(Math.random() * 3) + 1;
}


function gietApi() {
  let coinFlip = Math.floor(Math.random() * 2);
  // console.log(coinFlip);
  
  if(coinFlip == 1) {
  
    fetch("https://uselessfacts.jsph.pl/api/v2/facts/random")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      // console.log(data)
      // console.log(data.text)
      document.querySelector('p').innerText = data.text;

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  
  } 
  
  else {
  
    fetch("https://meowfacts.herokuapp.com")
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    // console.log(data.data[0]);
    document.querySelector('p').innerText = data.data[0];

  })
  .catch(err => {
      console.log(`error ${err}`)
  });
  }
}

function getimg(){
  
  if (randint() === 1) {
    document.querySelector("img").src = './ex/face1.png';
    document.querySelector("img").style.paddingLeft = "25%"; 
  } 
  
  else if(randint() == 2){
    document.querySelector("img").src = './ex/face2.png';
    document.querySelector("img").style.paddingLeft = "15%"; 
  }
  
  else {
    document.querySelector("img").src = './ex/face3.png';
    document.querySelector("img").style.paddingLeft = "8%"; 
  }

}

