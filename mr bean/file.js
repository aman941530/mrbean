let startgame=document.querySelector("#start" )

let restart=document.querySelector("#restart")

let story = document.querySelector(".story");
let text = document.querySelector(".text");
let btn = document.querySelector(".btn");
startgame.addEventListener("click",start)

let yes=document.createElement("button")
yes.className="yes"
yes.textContent="yes"
let no=document.createElement("button")
no.className="no"
no.textContent = "no";

function start(){
story.style.backgroundImage = "url(/photos/sleeping.jpg)";
text.textContent="Bean is sleeping."
btn.textContent="Wake him up?"
btn.appendChild(yes)
btn.appendChild(no)

startgame.style.display="none"

yes.addEventListener("click",wakeup);
no.addEventListener("click",waiting)
}

restart.addEventListener("click",restartgame)

function restartgame(){
 location.reload()
}

function wakeup(){
story.style.backgroundImage =
  "url(/photos/wokeup.jpg)";
text.textContent = "Bean just wokeup.";
btn.textContent = "sit on bed?";
btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click",outofbed)
no.addEventListener("click",waiting)
}

function waiting(){
story.style.backgroundImage = "url(/photos/waiting.jpg)";

}


function outofbed(){
 story.style.backgroundImage = "url(/photos/outofbed.jpg)";

 text.textContent = "Bean getting out of bed.";
 btn.textContent = "find his toothbrush?";
 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click",findbrush)
 no.addEventListener("click",waiting)
}

function findbrush(){

story.style.backgroundImage = "url(/photos/takebrush.jpg)";

text.textContent = "Bean searching his brush.";
btn.textContent = "brush teeth?";
btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click",brushing)
no.addEventListener("click",waiting)}

function brushing(){
story.style.backgroundImage = "url(/photos/brushing.jpg)";

text.textContent = "Bean brushing his teeth";
btn.textContent = "freshen up and take bath?";
btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click",bathing)
no.addEventListener("click",waiting)

}


function bathing(){
 story.style.backgroundImage = "url(/photos/bathing.jpg)";

 text.textContent = "Bean freshening up and bathing.";
 btn.textContent = "play in water?";
 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click", bathplay);
 no.addEventListener("click", waiting);
}

function bathplay(){
story.style.backgroundImage = "url(/photos/bathplay.jpg)";

text.textContent = "Bean playing in water and then he dries himself up."
btn.textContent = "groom him?";
btn.appendChild(yes);
btn.appendChild(no);


yes.addEventListener("click", groom);
no.addEventListener("click", waiting);
}

function groom(){
story.style.backgroundImage = "url(/photos/grooming.jpg)";

text.textContent = "Bean is grooming himself";
btn.textContent = "get properly dressed?";
btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click",dressed );
no.addEventListener("click", waiting);
}


function dressed(){
story.style.backgroundImage = "url(/photos/dressed.jpg)";
text.textContent = "Bean gets dressed properly";
btn.textContent = "lets get tea";

btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click", drinking);
no.addEventListener("click", waiting);
}

function drinking(){
story.style.backgroundImage = "url(/photos/drinking.jpg)";
text.textContent =
  "Bean goes to kitchen and makes  tea for him.";
btn.textContent = "He feels hungry.let's cook?";

btn.appendChild(yes);
btn.appendChild(no);

yes.addEventListener("click",cook)
no.addEventListener("click",waiting)
}

function cook(){
 story.style.backgroundImage = "url(/photos/cook.jpg)";

 text.textContent = "Bean is cooking.";
 btn.textContent = "serve food on table?";

 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click", servingfood);
 no.addEventListener("click", waiting);
}


function servingfood(){
  story.style.backgroundImage = "url(/photos/servingfood.jpg)";

  text.textContent = "Bean is taking food to the table.";
  btn.textContent = "lets start eating ?";
   btn.appendChild(yes);
   btn.appendChild(no);

   yes.addEventListener("click", eating);
   no.addEventListener("click", waiting);
}


function eating(){
 story.style.backgroundImage = "url(/photos/eating.jpg)";

 text.textContent = "Bean is eating.";
 btn.textContent = "let him read newspaper?";

 btn.appendChild(yes);
 btn.appendChild(no);


yes.addEventListener("click", readnewspaper);
no.addEventListener("click", waiting);


}

function readnewspaper(){
 story.style.backgroundImage = "url(/photos/readnewspaper.jpg)";

 text.textContent = "Bean is reading newspaper";
 btn.textContent = "what should we do next?think.";

 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click", thinking);
 no.addEventListener("click", waiting);

}

function thinking ()
{
 story.style.backgroundImage = "url(/photos/thinking.jpg)";

 text.textContent = "Bean is thinking.";
 btn.textContent = "lets go for camping?";

 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click", findcar);
 no.addEventListener("click", waiting);
}


function findcar(){
  story.style.backgroundImage = "url(/photos/car.jpg)";

  text.textContent = "Bean is going towards his car.";
  btn.textContent = "drive car?";

  btn.appendChild(yes);
  btn.appendChild(no);

  yes.addEventListener("click", driving);
  no.addEventListener("click", waiting);
}


function driving(){

  story.style.backgroundImage = "url(/photos/drive.jpg)";

  text.textContent = "Bean is driving.";
  btn.textContent = "camp now?";

  btn.appendChild(yes);
  btn.appendChild(no);

  yes.addEventListener("click", camping);
  no.addEventListener("click", waiting);
}


function camping(){
  story.style.backgroundImage = "url(/photos/camping.jpg)";

  text.textContent = "Bean is camping.";
  btn.textContent = "He feels hungry ,lets drive back?";

  btn.appendChild(yes);
  btn.appendChild(no);

  yes.addEventListener("click",drivingback)
  no.addEventListener("click", waiting);
}

function drivingback(){
 story.style.backgroundImage = "url(/photos/drive.jpg)";

 text.textContent = "Bean is drivingback.";
 btn.textContent = "He reaches home and feels sleepy?";

 btn.appendChild(yes);
 btn.appendChild(no);

 yes.addEventListener("click", yawning);
 no.addEventListener("click", waiting);
}

function yawning(){
  story.style.backgroundImage = "url(/photos/yawning.jpg)";

  text.textContent = "Bean is yawning.";
  btn.textContent = "sleep now?";

  btn.appendChild(yes);
  btn.appendChild(no);

  yes.addEventListener("click", end);
  no.addEventListener("click", waiting);
}

function end(){

  story.style.backgroundImage = "url(/photos/sleeping.jpg)";

  text.textContent = "Bean is sleeping.";
  btn.textContent = "Game over.";


  end=document.createElement("button")
  end.textContent="EndGame"
  end.style.display="block"
  end.style.color="red"
  
  btn.appendChild(end);
  
end.addEventListener("click",over)

function over(){
  location.reload()
}
 
}