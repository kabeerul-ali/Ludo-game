//currect this full code this is a ldo code"//take html created divs
//red blue green yellow is dive which contain pieces
//reds blues greens yelows contain divs as olor
const reds = document.querySelector("#reds");
const greens = document.querySelector("#greens");
const yellows = document.querySelector("#yellows");
const blues = document.querySelector("#blues");
const red = document.querySelector("#red");
const green = document.querySelector("#green");
const yellow = document.querySelector("#yellow");
const blue = document.querySelector("#blue");
//append dive inyelows div
//with id yij
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 3; j++) {
    const div = document.createElement("div");
    let id = `y${i}${j}`;
    div.setAttribute("id", id);
    div.style.width = "25.5px";
    div.style.height = "25.5px";
    if (j == 2 &&i!=1|| (i == 2 && j == 3)) {
      div.style.backgroundColor = "yellow";
    } else {
      div.style.backgroundColor = "white";
    }
    var l=`${((j-1)*25.5)}px`;
    var t=`${((i-1)*25.4)}px`;
    yellows.appendChild(div);
    // append the div to the yellows element
    div.style.position = "absolute";
    div.style.marginLeft = l;
    div.style.marginTop = t;
    div.style.border = "1px solid black";
  }
}
//append dive in blues div
//with id bij
for (var i = 1; i <= 6; i++) {
  for (var j = 1; j <= 3; j++) {
    var div = document.createElement("div");
    var id = `b${i}${j}`;
    div.setAttribute("id", id);
    div.style.width = "25.5px";
    div.style.height = "25.5px";
    if (j == 2 &&i!=6|| (i == 5 && j == 1)) {
      div.style.backgroundColor = "blue";
    } else {
      div.style.backgroundColor = "white";
    }
    //`${((j-1)*25.5)}px`;
    var l=`${((j-1)*25.5)}px`;
    var t=`${((i-1)*25.4)}px`;
    blues.appendChild(div); 
    // append the div to the yellows element
    div.style.position = "absolute";
    div.style.marginLeft = l;
    div.style.marginTop = t;
    div.style.border = "1px solid black";
  }
}
//append dive in reds div
//with id rij
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 6; j++) {
    var div = document.createElement("div");
    var id = `r${i}${j}`;
    div.setAttribute("id", id);
    div.style.width = "25.5px";
    div.style.height = "25.5px";
    if (i == 2 &&j!=6|| (i == 3 && j == 5)) {
      div.style.backgroundColor = "red";
    } else {
      div.style.backgroundColor = "white";
    }
    var l=`${((j-1)*25.5)}px`;
    var t=`${((i-1)*25.4)}px`;
    reds.appendChild(div); 
    // append the div to the yellows element
    div.style.position = "absolute";
    div.style.marginLeft = l;
    div.style.marginTop = t;
    div.style.border = "1px solid black";
  }
}
//append dive in greens div
//with id gij
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 6; j++) {
    var div = document.createElement("div");
    var id = `g${i}${j}`;
    div.setAttribute("id", id);
    div.style.width = "25.5px";
    div.style.height = "25.5px";

    if (i == 2 &&j!=1|| (i == 1 && j == 2)) {
      div.style.backgroundColor = "green";
    } else {
      div.style.backgroundColor = "white";
    }
    var l=`${((j-1)*25.5)}px`;
    var t=`${((i-1)*25.4)}px`;
    greens.appendChild(div); // append the div to the yellows element
    div.style.position = "absolute";
    div.style.marginLeft = l;
    div.style.marginTop = t;

    div.style.border = "1px solid black";
  }
}
//for star positions
// var str = document.createElement("h1");
// str.innerHTML = "*";

var arr = ['g12', 'g33', 'y23', 'y31', 'r14', 'r35', 'b51', 'b43'];//in arr all star position

arr.forEach((val) => {
  var temp = document.querySelector(`#${val}`);
  temp.className = "star";
  temp.style.backgroundImage = 'url("./image/images.png")';
  temp.style.backgroundSize = 'cover';
  temp.style.backgroundPosition = 'center';
  temp.style.opacity="0.8";
});
//decorate green
//create white div inside green div
//and also create 4 green div inside white dive which commant as 1,2,3,4;
var g0 = document.createElement("div");
g0.style.backgroundColor = "white";
g0.style.width = "110px";
g0.style.height = "110px";
g0.style.position = "absolute";
g0.style.marginLeft = "21.5px";
g0.style.marginTop = "21.5px";
g0.style.borderWidth = "1px";
g0.style.borderStyle = "solid";
g0.style.borderRadius = "9px";
green.appendChild(g0);
//1
var g1=document.createElement("div");
g1.style.backgroundColor = "green";
g1.style.width = "30px";
g1.style.height = "30px";
g1.style.position = "absolute";
g1.style.marginLeft = "10px";
g1.style.marginTop = "10px";
g1.style.border = "1px";
g1.style.borderRadius = "10px";
g0.appendChild(g1);

//2
var g2=document.createElement("div");
g2.style.backgroundColor = "green";
g2.style.width = "30px";
g2.style.height = "30px";
g2.style.position = "absolute";
g2.style.marginLeft = "67px";
g2.style.marginTop = "10px";
g2.style.border = "1px";
g2.style.borderRadius = "10px";
g0.appendChild(g2);
//3
var g3=document.createElement("div");
g3.style.backgroundColor = "green";
g3.style.width = "30px";
g3.style.height = "30px";
g3.style.position = "absolute";
g3.style.marginLeft = "10px";
g3.style.marginTop = "67px";
g3.style.border = "1px";
g3.style.borderRadius = "10px";
g0.appendChild(g3);
//4
var g4=document.createElement("div");
g4.style.backgroundColor = "green";
g4.style.width = "30px";
g4.style.height = "30px";
g4.style.position = "absolute";
g4.style.marginLeft = "67px";
g4.style.marginTop = "67px";
g4.style.border = "1px";
g4.style.borderRadius = "10px";
g0.appendChild(g4);
//decorate yellow
//create white div inside yellow div
//and also create 4 yellow div inside white dive which commant as 1,2,3,4;
var y0 = document.createElement("div");
y0.style.backgroundColor = "white";
y0.style.width = "110px";
y0.style.height = "110px";
y0.style.position = "absolute";
y0.style.marginLeft = "21.5px";
y0.style.marginTop = "21.5px";
y0.style.border = "1px";
y0.style.borderRadius = "9px";
yellow.appendChild(y0);
//1
var y1=document.createElement("div");
y1.style.backgroundColor = "yellow";
y1.style.width = "30px";
y1.style.height = "30px";
y1.style.position = "absolute";
y1.style.marginLeft = "10px";
y1.style.marginTop = "10px";
y1.style.border = "1px";
y1.style.borderRadius = "10px";
y0.appendChild(y1);

//2
var y2=document.createElement("div");
y2.style.backgroundColor = "yellow";
y2.style.width = "30px";
y2.style.height = "30px";
y2.style.position = "absolute";
y2.style.marginLeft = "67px";
y2.style.marginTop = "10px";
y2.style.border = "1px";
y2.style.borderRadius = "10px";
y0.appendChild(y2);
//3
var y3=document.createElement("div");
y3.style.backgroundColor = "yellow";
y3.style.width = "30px";
y3.style.height = "30px";
y3.style.position = "absolute";
y3.style.marginLeft = "10px";
y3.style.marginTop = "67px";
y3.style.border = "1px";
y3.style.borderRadius = "10px";
y0.appendChild(y3);
//4
var y4=document.createElement("div");
y4.style.backgroundColor = "yellow";
y4.style.width = "30px";
y4.style.height = "30px";
y4.style.position = "absolute";
y4.style.marginLeft = "67px";
y4.style.marginTop = "67px";
y4.style.border = "1px";
y4.style.borderRadius = "10px";
y0.appendChild(y4);

//decorate blue
//create white div inside blue div
//and also create 4 blue div inside white dive which commant as 1,2,3,4;
var b0 = document.createElement("div");
b0.style.backgroundColor = "white";
b0.style.width = "110px";
b0.style.height = "110px";
b0.style.position = "absolute";
b0.style.marginLeft = "21.5px";
b0.style.marginTop = "21.5px";
b0.style.border = "1px";
b0.style.borderRadius = "9px";
blue.appendChild(b0);
//1
var b1=document.createElement("div");
b1.style.backgroundColor = "blue";
b1.style.width = "30px";
b1.style.height = "30px";
b1.style.position = "absolute";
b1.style.marginLeft = "10px";
b1.style.marginTop = "10px";
b1.style.border = "1px";
b1.style.borderRadius = "10px";
b0.appendChild(b1);
//2
var b2=document.createElement("div");
b2.style.backgroundColor = "blue";
b2.style.width = "30px";
b2.style.height = "30px";
b2.style.position = "absolute";
b2.style.marginLeft = "67px";
b2.style.marginTop = "10px";
b2.style.border = "1px";
b2.style.borderRadius = "10px";
b0.appendChild(b2);
//3
var b3=document.createElement("div");
b3.style.backgroundColor = "blue";
b3.style.width = "30px";
b3.style.height = "30px";
b3.style.position = "absolute";
b3.style.marginLeft = "10px";
b3.style.marginTop = "67px";
b3.style.border = "1px";
b3.style.borderRadius = "10px";
b0.appendChild(b3);
//4
var b4=document.createElement("div");
b4.style.backgroundColor = "blue";
b4.style.width = "30px";
b4.style.height = "30px";
b4.style.position = "absolute";
b4.style.marginLeft = "67px";
b4.style.marginTop = "67px";
b4.style.border = "1px";
b4.style.borderRadius = "10px";
b0.appendChild(b4);
//decorate red
//create white div inside red div
//and also create 4 red div inside white dive which commant as 1,2,3,4;
var r0 = document.createElement("div");
r0.style.backgroundColor = "white";
r0.style.width = "110px";
r0.style.height = "110px";
r0.style.position = "absolute";
r0.style.marginLeft = "21.5px";
r0.style.marginTop = "21.5px";
r0.style.border = "1px";
r0.style.borderRadius = "9px";
red.appendChild(r0);
//1
var r1=document.createElement("div");
r1.style.backgroundColor = "red";
r1.style.width = "30px";
r1.style.height = "30px";
r1.style.position = "absolute";
r1.style.marginLeft = "10px";
r1.style.marginTop = "10px";
r1.style.border = "1px";
r1.style.borderRadius = "10px";
r0.appendChild(r1);

//2
var r2=document.createElement("div");
r2.style.backgroundColor = "red";
r2.style.width = "30px";
r2.style.height = "30px";
r2.style.position = "absolute";
r2.style.marginLeft = "67px";
r2.style.marginTop = "10px";
r2.style.border = "1px";
r2.style.borderRadius = "10px";
r0.appendChild(r2);
//3
var r3=document.createElement("div");
r3.style.backgroundColor = "red";
r3.style.width = "30px";
r3.style.height = "30px";
r3.style.position = "absolute";
r3.style.marginLeft = "10px";
r3.style.marginTop = "67px";
r3.style.border = "1px";
r3.style.borderRadius = "10px";
r0.appendChild(r3);
//4
var r4=document.createElement("div");
r4.style.backgroundColor = "red";
r4.style.width = "30px";
r4.style.height = "30px";
r4.style.position = "absolute";
r4.style.marginLeft = "67px";
r4.style.marginTop = "67px";
r4.style.border = "1px";
r4.style.borderRadius = "10px";
r0.appendChild(r4);
//create piece as a button 
//create green 4 button and append on 4 green div and all commented as 1,2,3,4;
//1
var bg1=document.createElement("button");
bg1.style.height="20px";
bg1.style.width="20px";
bg1.style.backgroundColor="green";
bg1.setAttribute('class','greenclass');
// bg1.style.backgroundImage = 'url("./image/green.jpg")';//use for insert img in btn
// bg1.style.backgroundSize = 'cover';
// bg1.style.backgroundPosition = 'center';
bg1.style.border="3px solid black";
bg1.style.borderRadius="12px";
g1.appendChild(bg1);
bg1.style.position="absolute";
bg1.style.marginTop="2.1px";
bg1.style.marginLeft="2.1px";
//2
var bg2=document.createElement("button");
bg2.setAttribute('class','greenclass');
bg2.style.height="20px";
bg2.style.width="20px";
bg2.style.backgroundColor="green";
bg2.style.border="3px solid black";
bg2.style.borderRadius="12px";
g2.appendChild(bg2);
bg2.style.position="absolute";
bg2.style.marginTop="2.1px";
bg2.style.marginLeft="2.1px";
//3
var bg3=document.createElement("button");
bg3.setAttribute('class','greenclass');
bg3.style.height="20px";
bg3.style.width="20px";
bg3.style.backgroundColor="green";
bg3.style.border="3px solid black";
bg3.style.borderRadius="12px";
g3.appendChild(bg3);
bg3.style.position="absolute";
bg3.style.marginTop="2.1px";
bg3.style.marginLeft="2.1px";
//4
var bg4=document.createElement("button");
bg4.setAttribute('class','greenclass');
bg4.style.height="20px";
bg4.style.width="20px";
bg4.style.backgroundColor="green";
bg4.style.border="3px solid black";
bg4.style.borderRadius="12px";
g4.appendChild(bg4);
bg4.style.position="absolute";
bg4.style.marginTop="2.1px";
bg4.style.marginLeft="2.1px";
//create yellow 4 button and append on 4 yellow div and all commented as 1,2,3,4;
//1
var by1=document.createElement("button");
by1.setAttribute("class","yellowclass");
by1.style.height="20px";
by1.style.width="20px";
by1.style.backgroundColor="yellow";
by1.style.border="3px solid black";
by1.style.borderRadius="12px";
y1.appendChild(by1);
by1.style.position="absolute";
by1.style.marginTop="2.1px";
by1.style.marginLeft="2.1px";
//2
var by2=document.createElement("button");
by2.setAttribute("class","yellowclass");
by2.style.height="20px";
by2.style.width="20px";
by2.style.backgroundColor="yellow";
by2.style.border="3px solid black";
by2.style.borderRadius="12px";
y2.appendChild(by2);
by2.style.position="absolute";
by2.style.marginTop="2.1px";
by2.style.marginLeft="2.1px";
//3
var by3=document.createElement("button");
by3.setAttribute("class","yellowclass");
by3.style.height="20px";
by3.style.width="20px";
by3.style.backgroundColor="yellow";
by3.style.border="3px solid black";
by3.style.borderRadius="12px";
y3.appendChild(by3);
by3.style.position="absolute";
by3.style.marginTop="2.1px";
by3.style.marginLeft="2.1px";
//4
var by4=document.createElement("button");
by4.setAttribute("class","yellowclass");
by4.style.height="20px";
by4.style.width="20px";
by4.style.backgroundColor="yellow";
by4.style.border="3px solid black";
by4.style.borderRadius="12px";
y4.appendChild(by4);
by4.style.position="absolute";
by4.style.marginTop="2.1px";
by4.style.marginLeft="2.1px";
//for red
//create red 4 button and append on 4 red div and all commented as 1,2,3,4;
//1
var br1=document.createElement("button");
br1.setAttribute("class","redclass");
br1.style.height="20px";
br1.style.width="20px";
br1.style.backgroundColor="red";
br1.style.border="3px solid black";
br1.style.borderRadius="12px";
r1.appendChild(br1);
br1.style.position="absolute";
br1.style.marginTop="2.1px";
br1.style.marginLeft="2.1px";
//2
var br2=document.createElement("button");
br2.setAttribute("class","redclass");
br2.style.height="20px";
br2.style.width="20px";
br2.style.backgroundColor="red";
br2.style.border="3px solid black";
br2.style.borderRadius="12px";
r2.appendChild(br2);
br2.style.position="absolute";
br2.style.marginTop="2.1px";
br2.style.marginLeft="2.1px";
//3
var br3=document.createElement("button");
br3.setAttribute("class","redclass");
br3.style.height="20px";
br3.style.width="20px";
br3.style.backgroundColor="red";
br3.style.border="3px solid black";
br3.style.borderRadius="12px";
r3.appendChild(br3);
br3.style.position="absolute";
br3.style.marginTop="2.1px";
br3.style.marginLeft="2.1px";
//4
var br4=document.createElement("button");
br4.setAttribute("class","redclass");
br4.style.height="20px";
br4.style.width="20px";
br4.style.backgroundColor="red";
br4.style.border="3px solid black";
br4.style.borderRadius="12px";
r4.appendChild(br4);
br4.style.position="absolute";
br4.style.marginTop="2.1px";
br4.style.marginLeft="2.1px";
//for blue
//1
var bb1=document.createElement("button");
bb1.setAttribute("class","blueclass");
bb1.style.height="20px";
bb1.style.width="20px";
bb1.style.backgroundColor="blue";
bb1.style.border="3px solid black";
bb1.style.borderRadius="12px";
b1.appendChild(bb1);
bb1.style.position="absolute";
bb1.style.marginTop="2.1px";
bb1.style.marginLeft="2.1px";
//2
var bb2=document.createElement("button");
bb2.setAttribute("class","blueclass");
bb2.style.height="20px";
bb2.style.width="20px";
bb2.style.backgroundColor="blue";
bb2.style.border="3px solid black";
bb2.style.borderRadius="12px";
b2.appendChild(bb2);
bb2.style.position="absolute";
bb2.style.marginTop="2.1px";
bb2.style.marginLeft="2.1px";
//3
var bb3=document.createElement("button");
bb3.setAttribute("class","blueclass");
bb3.style.height="20px";
bb3.style.width="20px";
bb3.style.backgroundColor="blue";
bb3.style.border="3px solid black";
bb3.style.borderRadius="12px";
b3.appendChild(bb3);
bb3.style.position="absolute";
bb3.style.marginTop="2.1px";
bb3.style.marginLeft="2.1px";
//4
var bb4=document.createElement("button");
bb4.setAttribute("class","blueclass");
bb4.style.height="20px";
bb4.style.width="20px";
bb4.style.backgroundColor="blue";
bb4.style.border="3px solid black";
bb4.style.borderRadius="12px";
b4.appendChild(bb4);
bb4.style.position="absolute";
bb4.style.marginTop="2.1px";
bb4.style.marginLeft="2.1px";
//create path array
var greenpath = ['g12','g13','g14','g15','g16','y61','y51','y41','y31','y21','y11','y12','y13','y23','y33','y43','y53','y63','r11','r12','r13','r14','r15','r16','r26','r36','r35','r34','r33','r32','r31','b13','b23','b33','b43','b53','b63','b62','b61','b51','b41','b31','b21','b11','g36','g35','g34','g33','g32','g31','g21','g22','g23','g24','g25','g26','victory'];
var yellowpath = ['y23','y33','y43','y53','y63','r11','r12','r13','r14','r15','r16','r26','r36','r35','r34','r33','r32','r31','b13','b23','b33','b43','b53','b63','b62','b61','b51','b41','b31','b21','b11','g36','g35','g34','g33','g32','g31','g21','g11','g12','g13','g14','g15','g16','y61','y51','y41','y31','y21','y11','y12','y22','y32','y42','y52','y62','victory'];
var bluepath = ['b51','b41','b31','b21','b11','g36','g35','g34','g33','g32','g31','g21','g11','g12','g13','g14','g15','g16','y61','y51','y41','y31','y21','y11','y12','y13','y23','y33','y43','y53','y63','r11','r12','r13','r14','r15','r16','r26','r36','r35','r34','r33','r32','r31','b13','b23','b33','b43','b53','b63','b62','b52','b42','b32','b22','b12','victory'];
var redpath = ['r35','r34','r33','r32','r31','b13','b23','b33','b43','b53','b63','b62','b61','b51','b41','b31','b21','b11','g36','g35','g34','g33','g32','g31','g21','g11','g12','g13','g14','g15','g16','y61','y51','y41','y31','y21','y11','y12','y13','y23','y33','y43','y53','y63','r11','r12','r13','r14','r15','r16','r26','r25','r24','r23','r22','r21','victory'];
//take all ludu peices element by class
var greenbutton=document.querySelectorAll(".greenclass");
var bluebutton=document.querySelectorAll(".blueclass");
var redbutton=document.querySelectorAll(".redclass");
var yellowbutton=document.querySelectorAll(".yellowclass");
//defne all value path 1
var gp1 = 1;
var gp2 = 1;
var gp3 = 1;
var gp4 = 1;
var yp1 = 1;
var yp2 = 1;
var yp3 = 1;
var yp4 = 1;
var rp1 = 1;
var rp2 = 1;
var rp3 = 1;
var rp4 = 1;
var bp1 = 1;
var bp2 = 1;
var bp3 = 1;
var bp4 = 1;

//create dice
//Create a button element for the dice
// Red
var rc; //for value take of dice
var reddice = document.createElement("button");
reddice.setAttribute("id", "reddice");
reddice.setAttribute("class", "dices");
reddice.innerHTML='1';
reddice.style.height = "50px";
reddice.style.width = "50px";
reddice.style.backgroundColor = "red";
reddice.style.border = "3px solid black";
reddice.style.borderRadius = "3px";
var whole = document.querySelector("body");
whole.append(reddice);
reddice.style.marginLeft = "760px";
reddice.style.marginTop = "7px";
var rb;
var intervalId1;
reddice.addEventListener("click", ()=>{
  intervalId1 = setInterval(numbers1, 100);
  setTimeout(()=>{
    clearInterval(intervalId1);    
    br1.disabled=false;
    br2.disabled=false;
    br3.disabled=false;
    br4.disabled=false;
  }, 1200);
});
//main code
redbutton.forEach((val) => {
  val.addEventListener('click', () => {
    if (val === br1) {
      let upperLimit = rp1 + rb;
      for (let i = rp1; i < upperLimit; i++) {
        const ppp = document.querySelector(`#${redpath[i]}`);
        ppp.appendChild(br1); // Assuming br1 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = false;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      //for cut pieces
      if (rp1+39 == bp1||rp1==bp1+13) {
        b1.appendChild(bb1);
        bp1=1;
      } else if (rp1+39 == bp2||rp1==bp2+13) {
        b2.appendChild(bb2);
        bp2=1;
      } else if (rp1+39 == bp3||rp1==bp3+13) {
        b3.appendChild(bb3);
        bp3=1;
      } else if (rp1+39 == bp4||rp1==bp4+13) {
        b4.appendChild(bb4);
        bp4=1;
      } else if (rp1+26 == gp1||rp1==gp1+26) {
        g1.appendChild(bg1);  
        gp1=1;
      } else if (rp1+26 == gp2||rp1==gp2+26) {
        g2.appendChild(bg2);
        gp2=1;
      } else if (rp1+26 == gp3||rp1==gp3+26) {
        g3.appendChild(bg3);
        gp3=1;
      } else if (rp1 +26== gp4||rp1==gp4+26) {
        g4.appendChild(bg4);
        gp4=1;
      } else if (rp1+13 == yp1||rp1==yp1+39) {
        y1.appendChild(by1);
        yp1=1;
      } else if (rp1+13 == yp2||rp1==yp2+39) {
        y2.appendChild(by2);
        yp2=1;
      } else if (rp1+13 == yp3||rp1==yp3+39) {
        y3.appendChild(by3);
        yp3=1;
      } else if (rp1+13 == yp4||rp1==yp4+39) {
        y4.appendChild(by4);
        yp4=1;
      }
      //goti    
      dis(); // Call dis() function defined elsewhere
      rp1 = upperLimit;
    } else if (val === br2) {
      let upperLimit1 = rp2+rb;
      for (let i = rp2; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${redpath[i]}`);
        ppp.appendChild(br2); // Assuming br2 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = false;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      //goti
      if (rp2+39 == bp1||rp2==bp1+13) {
        b1.appendChild(bb1);
        bp1=1;
      } else if (rp2+39 == bp2||rp2==bp2+13) {
        b2.appendChild(bb2);
        bp2=1;
      } else if (rp2+39 == bp3||rp2==bp3+13) {
        b3.appendChild(bb3);
        bp3=1;
      } else if (rp2+39 == bp4||rp2==bp4+13) {
        b4.appendChild(bb4);
        bp4=1;
      } else if (rp2+26 == gp1||rp2==gp1+26) {
        g1.appendChild(bg1);  
        gp1=1;
      } else if (rp2+26 == gp2||rp2==gp2+26) {
        g2.appendChild(bg2);
        gp2=1;
      } else if (rp2+26 == gp3||rp2==gp3+26) {
        g3.appendChild(bg3);
        gp3=1;
      } else if (rp2 +26== gp4||rp2==gp4+26) {
        g4.appendChild(bg4);
        gp4=1;
      } else if (rp2+13 == yp1||rp2==yp1+39) {
        y1.appendChild(by1);
        yp1=1;
      } else if (rp2+13 == yp2||rp2==yp2+39) {
        y2.appendChild(by2);
        yp2=1;
      } else if (rp2+13 == yp3||rp2==yp3+39) {
        y3.appendChild(by3);
        yp3=1;
      } else if (rp2+13 == yp4||rp2==yp4+39) {
        y4.appendChild(by4);
        yp4=1;
      }
      //goti
      dis(); // Call dis() function defined elsewhere
      rp2 += rb;
    } else if (val === br3) {
      
      let upperLimit1 = rp3+rb;
      for (let i = rp3; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${redpath[i]}`);
        ppp.appendChild(br3); // Assuming br3 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = false;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      //goti
if (rp3+39 == bp1||rp3==bp1+13) {
  b1.appendChild(bb1);
  bp1=1;
} else if (rp3+39 == bp2||rp3==bp2+13) {
  b2.appendChild(bb2);
  bp2=1;
} else if (rp3+39 == bp3||rp3==bp3+13) {
  b3.appendChild(bb3);
  bp3=1;
} else if (rp3+39 == bp4||rp3==bp4+13) {
  b4.appendChild(bb4);
  bp4=1;
} else if (rp3+26 == gp1||rp3==gp1+26) {
  g1.appendChild(bg1);  
  gp1=1;
} else if (rp3+26 == gp2||rp3==gp2+26) {
  g2.appendChild(bg2);
  gp2=1;
} else if (rp3+26 == gp3||rp3==gp3+26) {
  g3.appendChild(bg3);
  gp3=1;
} else if (rp3 +26== gp4||rp3==gp4+26) {
  g4.appendChild(bg4);
  gp4=1;
} else if (rp3+13 == yp1||rp3==yp1+39) {
  y1.appendChild(by1);
  yp1=1;
} else if (rp3+13 == yp2||rp3==yp2+39) {
  y2.appendChild(by2);
  yp2=1;
} else if (rp3+13 == yp3||rp3==yp3+39) {
  y3.appendChild(by3);
  yp3=1;
} else if (rp3+13 == yp4||rp3==yp4+39) {
  y4.appendChild(by4);
  yp4=1;
}
//goti
      dis(); // Call dis() function defined elsewhere
      rp3 += rb;
    } else {
      let upperLimit3 = rp4+rb;
      for (let i = rp4; i < upperLimit3; i++) {
        const ppp = document.querySelector(`#${redpath[i]}`);
        ppp.appendChild(br4); // Assuming br2 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = false;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      //goti
if (rp4+39 == bp1||rp4==bp1+13) {
  b1.appendChild(bb1);
  bp1=1;
} else if (rp4+39 == bp2||rp4==bp2+13) {
  b2.appendChild(bb2);
  bp2=1;
} else if (rp4+39 == bp3||rp4==bp3+13) {
  b3.appendChild(bb3);
  bp3=1;
} else if (rp4+39 == bp4||rp4==bp4+13) {
  b4.appendChild(bb4);
  bp4=1;
} else if (rp4+26 == gp1||rp4==gp1+26) {
  g1.appendChild(bg1);  
  gp1=1;
} else if (rp4+26 == gp2||rp4==gp2+26) {
  g2.appendChild(bg2);
  gp2=1;
} else if (rp4+26 == gp3||rp4==gp3+26) {
  g3.appendChild(bg3);
  gp3=1;
} else if (rp4 +26== gp4||rp4==gp4+26) {
  g4.appendChild(bg4);
  gp4=1;
} else if (rp4+13 == yp1||rp4==yp1+39) {
  y1.appendChild(by1);
  yp1=1;
} else if (rp4+13 == yp2||rp4==yp2+39) {
  y2.appendChild(by2);
  yp2=1;
} else if (rp4+13 == yp3||rp4==yp3+39) {
  y3.appendChild(by3);
  yp3=1;
} else if (rp4+13 == yp4||rp4==yp4+39) {
  y4.appendChild(by4);
  yp4=1;
}
//goti
      dis(); // Call dis() function defined elsewhere
      rp4 += rb;      
    }
  });
});
//reddice functon
function numbers1() {
  rb = Math.floor(Math.random() * 6) + 1;
  reddice.innerHTML = rb;
  rc=rb;
  
}
// Blue
//for value take of dice
var bluedice = document.createElement("button");
bluedice.setAttribute("id", "bluedice");
bluedice.setAttribute("class", "dices");
bluedice.innerHTML='1';
bluedice.style.height = "50px";
bluedice.style.width = "50px";
bluedice.style.backgroundColor = "blue";
bluedice.style.border = "3px solid black";
bluedice.style.borderRadius = "3px";
whole.append(bluedice);
bluedice.style.position = "absolute";
bluedice.style.left = "457px"; // Changed from marginRight to right
bluedice.style.top = "476px"; // Changed from marginTop to top
//start
var bbb;
var intervalId2;
bluedice.addEventListener("click", ()=>{
  intervalId2 = setInterval(numbers2, 100);
  setTimeout(()=>{
    clearInterval(intervalId2);    
    //console.log(bc);
    bb1.disabled=false;
    bb2.disabled=false;
    bb3.disabled=false;
    bb4.disabled=false;
  }, 1200);
});
//main code
bluebutton.forEach((val) => {
  val.addEventListener('click', () => {
    if (val === bb1) {
      let upperLimit = bp1 + bbb;
      for (let i = bp1; i < upperLimit; i++) {
        const ppp = document.querySelector(`#${bluepath[i]}`);
        ppp.appendChild(bb1); // Assuming bb1 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = false;
      }
      dis(); // Call dis() function defined elsewhere
      bp1 = upperLimit;
      console.log(bbb);
    } else if (val === bb2) {
      let upperLimit1 = bp2+bbb;
      for (let i = bp2; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${bluepath[i]}`);
        ppp.appendChild(bb2); // Assuming bb2 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = false;
      }
      dis(); // Call dis() function defined elsewhere
      bp2 += bbb;
    } else if (val === bb3) {
      
      let upperLimit1 = bp3+bbb;
      for (let i = bp3; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${bluepath[i]}`);
        ppp.appendChild(bb3); // Assuming bb3 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = false;
      }
      dis(); // Call dis() function defined elsewhere
      bp3 += bbb;
    } else {
      let upperLimit3 = bp4+bbb;
      for (let i = bp4; i < upperLimit3; i++) {
        const ppp = document.querySelector(`#${bluepath[i]}`);
        ppp.appendChild(bb4); // Assuming bb2 is a DOM element
        yellowdice.disabled = true;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = false;
      }
      dis(); // Call dis() function defined elsewhere
      bp4 += bbb;      
    }
  });
});
function numbers2() {
  bbb = Math.floor(Math.random() * 6) + 1;
  bluedice.innerHTML = bbb;

  // console.log(n); // log the value of `n` here
}

//green
//for value take of dice
var greendice = document.createElement("button");
greendice.setAttribute("id", "greendice");
greendice.setAttribute("class", "dices");
greendice.innerHTML='1';
greendice.style.height = "50px";
greendice.style.width = "50px";
greendice.style.backgroundColor = "green";
greendice.style.border = "3px solid black";
greendice.style.borderRadius = "3px";
whole.append(greendice);
greendice.style.position = "absolute";
greendice.style.left = "457px"; // Changed from marginRight to right
greendice.style.top = "24px"; // Changed from marginTop to top
//start
var gb; // for storing dice value
var intervalid3;

// Assuming greendice, greenbutton, yellowdice, bluedice, reddice, greenpath, and dis are defined elsewhere

greendice.addEventListener("click", () => {
  intervalid3 = setInterval(numbers3, 100);
  setTimeout(() => {
    clearInterval(intervalid3);
    // Assuming greenbutton is a NodeList or array of elements
    bg1.disabled=false;
    bg2.disabled=false;
    bg3.disabled=false;
    bg4.disabled=false;
  }, 1200);
});
greenbutton.forEach((val) => {
  val.addEventListener('click', () => {
    if (val === bg1) {
      let upperLimit = gp1 + gb;
      for (let i = gp1; i < upperLimit; i++) {
        const ppp = document.querySelector(`#${greenpath[i]}`);
        ppp.appendChild(bg1); // Assuming bg1 is a DOM element
        yellowdice.disabled = false;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      dis(); // Call dis() function defined elsewhere
      gp1 = upperLimit;
      console.log(gb);
    } else if (val === bg2) {
      let upperLimit1 = gp2+gb;
      for (let i = gp2; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${greenpath[i]}`);
        ppp.appendChild(bg2); // Assuming bg2 is a DOM element
        yellowdice.disabled = false;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      dis(); // Call dis() function defined elsewhere
      gp2 += gb;
    } else if (val === bg3) {
      
      let upperLimit1 = gp3+gb;
      for (let i = gp3; i < upperLimit1; i++) {
        const ppp = document.querySelector(`#${greenpath[i]}`);
        ppp.appendChild(bg3); // Assuming bg2 is a DOM element
        yellowdice.disabled = false;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      dis(); // Call dis() function defined elsewhere
      gp3 += gb;
    } else {
      let upperLimit3 = gp4+gb;
      for (let i = gp4; i < upperLimit3; i++) {
        const ppp = document.querySelector(`#${greenpath[i]}`);
        ppp.appendChild(bg4); // Assuming bg2 is a DOM element
        yellowdice.disabled = false;
        bluedice.disabled = true;
        reddice.disabled = true;
        greendice.disabled = true;
      }
      dis(); // Call dis() function defined elsewhere
      gp4 += gb;      
    }
  });
});
function numbers3() {
  gb = Math.floor(Math.random() * 6) + 1;
  greendice.innerHTML = gb;
}
//yellow
var yellowdice = document.createElement("button");
yellowdice.setAttribute("id", "yellowdice");
yellowdice.setAttribute("class", "dices");
yellowdice.innerHTML='1';
yellowdice.style.height = "50px";
yellowdice.style.width = "50px";
yellowdice.style.backgroundColor = "yellow";
yellowdice.style.border = "3px solid black";
yellowdice.style.borderRadius = "3px";
whole.append(yellowdice);
yellowdice.style.position = "absolute";
yellowdice.style.left = "763px"; // Changed from marginRight to right
yellowdice.style.top = "24px"; // Changed from marginTop to to
//start
var yb;
var intervalid4;
yellowdice.addEventListener("click", ()=>{
  intervalid4 = setInterval(numbers4, 100);
  setTimeout(()=>{
    clearInterval(intervalid4);
    //console.log(yb);
    by1.disabled=false;
    by2.disabled=false;
    by3.disabled=false;
    by4.disabled=false;
  }, 1200);
});
//main code
yellowbutton.forEach((val) => {
    val.addEventListener('click', () => {
      if (val === by1) {
        let upperLimit = yp1 + yb;
        for (let i = yp1; i < upperLimit; i++) {
          const ppp = document.querySelector(`#${yellowpath[i]}`);
          ppp.appendChild(by1); // Assuming by1 is a DOM element
          yellowdice.disabled = true;
          bluedice.disabled = true;
          reddice.disabled = false;
          greendice.disabled = true;
        }
        dis(); // Call dis() function defined elsewhere
        yp1 = upperLimit;
        console.log(yb);
      } else if (val === by2) {
        let upperLimit1 = yp2+yb;
        for (let i = yp2; i < upperLimit1; i++) {
          const ppp = document.querySelector(`#${yellowpath[i]}`);
          ppp.appendChild(by2); // Assuming by2 is a DOM element
          yellowdice.disabled = true;
          bluedice.disabled = true;
          reddice.disabled = false;
          greendice.disabled = true;
        }
        dis(); // Call dis() function defined elsewhere
        yp2 += yb;
      } else if (val === by3) {
        
        let upperLimit1 = yp3+yb;
        for (let i = yp3; i < upperLimit1; i++) {
          const ppp = document.querySelector(`#${yellowpath[i]}`);
          ppp.appendChild(by3); // Assuming by3 is a DOM element
          yellowdice.disabled = true;
          bluedice.disabled = true;
          reddice.disabled = false;
          greendice.disabled = true;
        }
        dis(); // Call dis() function defined elsewhere
        yp3 += yb;
      } else {
        let upperLimit3 = yp4+yb;
        for (let i = yp4; i < upperLimit3; i++) {
          const ppp = document.querySelector(`#${yellowpath[i]}`);
          ppp.appendChild(by4); // Assuming by2 is a DOM element
          yellowdice.disabled = true;
          bluedice.disabled = true;
          reddice.disabled = false;
          greendice.disabled = true;
        }
        dis(); // Call dis() function defined elsewhere
        yp4 += yb;      
      }
    });
  });
function numbers4() {
  yb = Math.floor(Math.random() * 6) + 1;
  yellowdice.innerHTML = yb;
}



//start button sequence
yellowdice.disabled=true;
bluedice.disabled=true;
reddice.disabled=true;

//for press by space button dice is generate values
var i=2;
var bot=document.querySelectorAll(".dices")
document.addEventListener('keypress', (event)=> {
  if (event.key === ' ') {
  if(i==4){
    i=0;
  }
  bot[i].click();
  i++;
  }
});
//functions for all button diaable
function dis(){
  bg1.disabled=true;
  bg2.disabled=true;
  bg3.disabled=true;
  bg4.disabled=true;
  br1.disabled=true;
  br2.disabled=true;
  br3.disabled=true;
  br4.disabled=true;
  by1.disabled=true;
  by2.disabled=true;
  by3.disabled=true;
  by4.disabled=true;
  bb1.disabled=true;
  bb2.disabled=true;
  bb3.disabled=true;
  bb4.disabled=true;
}
function sleep(ms) {
  const startTime = Date.now();
  while (Date.now() - startTime < ms) {}
}