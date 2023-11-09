

//This is the array that was received in the data.json file. I placed it in this index.js file.
//This array is called "answersArray"
// Info on arrays are below.
// To learn more about the array and objects and properties check out the site below.
//To learn about arrays here = https://www.w3schools.com/js/js_arrays.asp
// To read on Objects here = https://www.w3schools.com/js/js_objects.asp
// To read about the JS Array forEach() here = https://www.w3schools.com/js/js_array_iteration.asp

// An example site that I looked at here = https://codesandbox.io/s/dynamic-javascript-cards-forked-uddcrr?file=/src/index.js

<script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script> 

const cyberArray = [
    //The goal is to get the items in this list to display their values in my HTML files
    //so that they can display on the screen.
        {
          id: 0,
          category: "Cyber Attacks",
          textColor: "black",
          description: "Cybersecurity helps protect against hacker, insider threats, and malware."
          
        },
        {
          id: 1,
          category: "Business Continuity",
          textColor: "black",
          description: "Organizations need cybersecurity to ensure the continuity of operations and prevent downtime. "
          

        },
        {
          id: 2,
          category: "Financial Security",
          textColor: "black",
          description: "Cyberattacks can result in financial loss, and proper security can mitigate it."
          
        },
        
  ];
  
  
  let htmlCyberArray = ``;
  
  cyberArray.forEach(function(theArrayDisplay){
  
    htmlCyberArray =
        htmlCyberArray +
          //Creating the html and css designs of the inner part of the divs inside these two = ``,
        `
        <div class="${theArrayDisplay.className} col-s-12 " style = "margin-bottom: 15px">
            <div class = "textlayoutPart col-s-12">
                <span class = "cyberDescript" style = "color:${theArrayDisplay.textColor};"><b>${theArrayDisplay.category}</b> <br> ${theArrayDisplay.description}</span>
                
            </div>
        </div>
          
        `;
  
  });
  
  //This attaches it to the div "allResultsHereDiv" in the HTML file index.html
  const cyberExplanation = document.querySelector(".cyberHelps");
  cyberExplanation.innerHTML = htmlCyberArray;