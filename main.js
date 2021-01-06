

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/bickex-cover.png') {
      myImage.setAttribute('src','images/bickex-cover2.png');
    } else {
      myImage.setAttribute('src','images/bickex-cover.png');
    }

  }

    function setUserName() {
      let myName = prompt('Please enter your name.');
      if(!myName) {
        setUserName();
      } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Welcome, ${myName}`;
      }
    }


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');



if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}

