

//This is the array that was received in the data.json file. I placed it in this index.js file.
//This array is called "answersArray"
// Info on arrays are below.
// To learn more about the array and objects and properties check out the site below.
//To learn about arrays here = https://www.w3schools.com/js/js_arrays.asp
// To read on Objects here = https://www.w3schools.com/js/js_objects.asp
// To read about the JS Array forEach() here = https://www.w3schools.com/js/js_array_iteration.asp

// An example site that I looked at here = https://codesandbox.io/s/dynamic-javascript-cards-forked-uddcrr?file=/src/index.js


const answersArray = [
  //The goal is to get the items in this list to display their values in my HTML files
  //so that they can display on the screen.
      {
        id: 0,
        category: "Hello",
        textColor: "white"
      },
      {
        id: 1,
        category: "Cybersecurity",
        textColor: "white"
      },
      {
        id: 2,
        category: "World",
        textColor: "white"
      },
      
];


let htmlArrayCode = ``;



  htmlArrayCode =
    htmlArrayCode +
        //Creating the html and css designs of the inner part of the divs inside these two = ``,
      `
      
          <div class = "textlayoutPart col-s-12">
              <span class = "iconAndTitle" style = "color:white;">Hello Cybersecurity World</span>
              
          </div>
      
        
      `;



//This attaches it to the div "allResultsHereDiv" in the HTML file index.html
const answerBoxes = document.querySelector(".allResultsHereDiv");
answerBoxes.innerHTML = htmlArrayCode;