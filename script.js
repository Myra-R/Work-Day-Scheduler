var curDay = document.querySelector("#currentDay");

 document.querySelector("#currentDay").textContent=moment().format('LLL');
 var currentTime=moment().format('HH')
 console.log(currentTime)  
 var hour = [ 9, 10, 11, 12, 13, 14, 15, 16, 17];
/*
 <div class="row time-block">
        <div class="col-md-1">
          <p>9 AM</p>
        </div>
        <textarea class="description col-md-10"></textarea>
        <button id="9" class="saveBtn col-md-1 btn">
            <i class="fas fa-save"></i>
        </button>
</div>
*/



function createPlan(){
//ineneput area works, make forloop work
for(var i=0;i<hour.length;i++){
    console.log(hour.length);

var d1=document.createElement("div");
//<div></div>
d1.setAttribute("class","row time-block")
//<div class="row time-block"></div>

var d2=document.createElement("div");
d2.setAttribute("class","col-md-1");

var p=document.createElement("p");
p.textContent=hour[i];
if(hour[i]<12){
    p.textContent=hour[i]+" AM";
}
if(hour[i]==12){
    p.textContent=hour[i]+"PM";
}
if(hour[i]>12){
    p.textContent=hour[i]-12+"PM";

}

var textarea=document.createElement("textarea");
//textarea.setAttribute("class","description col-md-10");
//if current time 
if(currentTime==hour[i]){
    textarea.setAttribute("class","description col-md-10 present "+hour[i]);

}
if(currentTime>hour[i]){
    textarea.setAttribute("class","description col-md-10 past "+hour[i]);

}
if(currentTime<hour[i]){
    textarea.setAttribute("class","description col-md-10 future "+hour[i]);

}
    //currentTime==hour
    //add class present
//if(past) currentTime-hour>0

var btn=document.createElement("button");
btn.setAttribute("id",hour[i])
btn.setAttribute("class","saveBtn col-md-1 btn")

var i=document.createElement("i");
i.setAttribute("class","fas fa-save");

d2.appendChild(p);
btn.appendChild(i);

d1.appendChild(d2);
d1.appendChild(textarea);
d1.appendChild(btn);

document.querySelector(".container").appendChild(d1)
console.log("work")
}


//create an onclick event.
//grab the userinput and hour
//set to local storage
//.saveBtn
document.querySelector(".saveBtn").onclick = function(){
   console.log(this.getAttribute("id"));
   console.log(this.parentElement.children[1].value);
   localStorage.setItem(this.getAttribute("id"), this.parentElement.children[1].value);

};

//document.querySelector(".9").value(localStorage.getItem("9"));
 console.log(localStorage.getItem("9"))
}

createPlan();



// {
//     $(document).ready(curDay);
// }

// $(document).ready(function(){
    
//     for(var i = 0; i < hours.length; i++){
//         var hourBlock = $("<div>");
//         hourBlock.addClass("time-table");
//         hourBlock.attr("data-letter", letters[i]);
//         hourBlock.text(letters[i]);
//     $(".container").append(hourBlock);
//     }
// }
