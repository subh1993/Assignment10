
function gridElements(divGridContainer, element,txt)
{
    divGridElements = document.createElement('div')
    divGridElements.id = "div"+txt
    numButton = document.createElement('input')
    numButton.id = ""+txt;
    numButton.type ="button"
    numButton.value = txt
    var node = document.createTextNode(txt);
    numButton.appendChild(node)
    divGridElements.appendChild(numButton)
    divGridContainer.appendChild(divGridElements)
  

}


let inputfield = document.createElement('input')
inputfield.type = 'text'
inputfield.id = 'result'
inputfield.placeholder = '0'
let divInput = document.createElement('div')
divInput.id = 'col'
let divRow = document.createElement('div')
divRow.class = 'row1'
let divRow2 = document.createElement('div')
divRow.class = 'row2'
let divContainer = document.createElement('div')
divContainer.class = 'container'
let divGridContainer = document.createElement('div')
divGridContainer.id = 'grid-container'
for(let i=1;i<10;i++)
  {
      divGridElements = document.createElement('div')
      divGridElements.id = "div"+i
      numButton = document.createElement('input')
      numButton.id = ""+i;
      numButton.type = "button"
      numButton.value = ""+i;
      divGridElements.appendChild(numButton)
      divGridContainer.appendChild(divGridElements)
  }
  
  
gridElements(divGridContainer,'zero','0')


gridElements(divGridContainer,'add','+')
gridElements(divGridContainer,'multiply','*')
gridElements(divGridContainer,'subtarct','-')
gridElements(divGridContainer,'devide','/')
gridElements(divGridContainer,'clear','c')

divGridElements = document.createElement('div')
divGridElements.id = "div"+"="
numButton = document.createElement('input')
numButton.id = '=';
numButton.type ="button"
numButton.value = "="
var node = document.createTextNode("=");
numButton.appendChild(node)



divGridContainer.appendChild(divGridElements)



divInput.appendChild(inputfield)
divRow.appendChild(divInput)
divRow2.appendChild(divGridContainer)
divContainer.appendChild(divRow)
divContainer.appendChild(divRow2)

let heading  = document.createElement('h1')
heading.id = "heading"
heading.innerHTML = "Calculator"

document.body.appendChild(heading)
document.body.appendChild(divContainer)
 document.body.appendChild(numButton)

  
function dis(inp) {
    document.getElementById("result").value += inp;
  }
  


//function that display value 


//function that evaluates the digit and return result 
function solve() {
    let x = document.getElementById("result").value 
    let y = eval(x) 
    document.getElementById("result").value = y 

  }

//function that clear the display 
function clr() 
{ 
    document.getElementById("result").value = "" 
} 


var one =  document.getElementById("1")
one.onclick = function() {dis(one.value)};

var two =  document.getElementById("2")
two.onclick = function() {dis(two.value)};

var three =  document.getElementById("3")
three.onclick = function() {dis(three.value)};

var four =  document.getElementById("4")
four.onclick = function() {dis(four.value)};
four.style.color ="blue"


var five =  document.getElementById("5")
five.onclick = function() {dis(five.value)};

var six =  document.getElementById("6")
six.onclick = function() {dis(six.value)};

var seven =  document.getElementById("7")
seven.onclick = function() {dis(seven.value)};

var eight =  document.getElementById("8")
eight.onclick = function() {dis(eight.value)};

var nine =  document.getElementById("9")
nine.onclick = function() {dis(nine.value)};

var zero =  document.getElementById("0")
zero.onclick = function() {dis(zero.value)};

var plus =  document.getElementById("+")
plus.onclick = function() {dis(plus.value)};

var minus =  document.getElementById("-")
minus.onclick = function() {dis(minus.value)};

var multiply  =  document.getElementById("*")
multiply.onclick = function() {dis(multiply.value)};

var divide =  document.getElementById("/")
divide.onclick = function() {dis(divide.value)};

var clear =  document.getElementById("c")
clear.onclick = function() {clr()};

var equal =  document.getElementById("=")

equal.onclick = function() {solve()};

//style

var arr=["1","2","3","4","5","6","7","8","9","+","-","*","/","c","0"]

for(var i=0;i<arr.length;i++)
{   
    document.getElementById(arr[i]).style.color = "blue";
    document.getElementById(arr[i]).style.padding = "10%";
    document.getElementById(arr[i]).style.fontSize = "2em";
    document.getElementById(arr[i]).style.width = "150px"
    
}
for(var i=0;i<arr.length;i++)
{   
    document.getElementById("div"+arr[i]).style.margin = "10px";
    
    
    
    
}
document.getElementById("grid-container").style.display = "grid";
document.getElementById("grid-container").style.padding = "2px";
document.getElementById("grid-container").style.gridTemplateColumns = "auto auto auto";
document.getElementById("grid-container").style.backgroundColor = "skyblue";
document.getElementById("result").style.width = "99%"
document.getElementById("result").style.height = "60px"
document.getElementById("heading").style.fontSize = "5em"
document.getElementById("heading").style.paddingLeft = "24%"
document.getElementById("heading").style.color = "blue"
document.getElementById("result").style.border = "2px solid black"
document.getElementById("result").style.fontSize = "2.5em"
document.getElementById("=").style.color = "blue";
document.getElementById("=").style.padding = "10%";
document.getElementById(["="]).style.fontSize = "2em";
document.getElementById("=").style.width = "90%"
document.getElementById("=").style.height = "90px"
document.getElementById("=").style.marginLeft = "51px"
document.body.style.paddingLeft = "20%"
document.body.style.paddingRight = "20%"

