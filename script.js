// questions 

let name = prompt('What is your name?');

const nameLength = name.length;
console.log("name length = " + nameLength);

let birthday = prompt('What day of the month were you born?');
console.log("birthday = " + birthday);

// color function 

function backgroundColor(length) {
  let color = ["green", "cyan", "yellow", "purple", "magenta", "rose", "blue", "pastel-green", "berry",
  "indigo", "orange"];

let backColor = "unknown";

for (let i = 0; i < color.length; i++) {
  if(length < 12 && length === i + 2){
    backColor = color[i];

  } else {
    backColor = color[1];
    }
 }
  console.log(backColor);
  return backColor; 
}

let colorSelected = backgroundColor(nameLength);
document.querySelector("div").className = colorSelected;

// font function 

function fontType(birthday) { 
  let fonts = [
    [5, "dancing-script"],
    [10, "pangolin"],
    [15, "amatic-sc"],
    [20, "rock-salt"],
    [25, "merienda"],
    [31, "mali"]
  ];
let font = "unknown";

for(let 1 = 0; i < fonts.length; i++) {
  if (birthday <= fonts[i][0]){
  font = fonts[i][1];
  break; 
  }
}
console.log(font);
return font;
}
 
let fontClass = fontType(birthday); 
document.querySelector("p").className = fontClass;


let randomNumber = Math.floor( Math.random() * nameLength ) + 2;

if (randomNumber > 12){ randomNumber = 12; }

console.log("random number = " + randomNumber);

document.querySelector("figure img").src = `images/image-${randomNumber}.jpg`; 