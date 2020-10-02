var curDay = document.querySelector("#currentDay");

document.querySelector("#currentDay").textContent = moment().format('LLL');
var currentTime = moment().format('HH')
console.log(currentTime)
var hour = [9, 10, 11, 12, 13, 14, 15, 16, 17];
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

//remove 18-20 after testing 

function createPlan() {
    //input area works, make forloop work
    for (var i = 0; i < hour.length; i++) {
        console.log(hour.length);

        var d1 = document.createElement("div");
        //<div></div>
        d1.setAttribute("class", "row time-block")
        //<div class="row time-block"></div>

        var d2 = document.createElement("div");
        d2.setAttribute("class", "col-md-1");

        var p = document.createElement("p");
        p.textContent = hour[i];
        if (hour[i] < 12) {
            p.textContent = hour[i] + " AM";
        }
        if (hour[i] == 12) {
            p.textContent = hour[i] + "PM";
        }
        if (hour[i] > 12) {
            p.textContent = hour[i] - 12 + "PM";

        }

        var textarea = document.createElement("textarea");
        //textarea.setAttribute("class","description col-md-10");
        //if current time 
        if (currentTime == hour[i]) {
            textarea.setAttribute("class", "description col-md-10 present ");
            textarea.setAttribute("id", hour[i]);

        }
        if (currentTime > hour[i]) {
            textarea.setAttribute("class", "description col-md-10 past ");
            textarea.setAttribute("id", hour[i]);
        }
        if (currentTime < hour[i]) {
            textarea.setAttribute("class", "description col-md-10 future ");
            textarea.setAttribute("id", hour[i]);
        }

        if(localStorage.getItem($(textarea).attr("id")) != ""){
            textarea.textContent = localStorage.getItem($(textarea).attr("id"));
        }
        else{
            textarea.setAttribute("placeholder", "Enter text here...");
        }
        //currentTime==hour
        //add class present
        //if(past) currentTime-hour>0

        var btn = document.createElement("button");
        textarea.setAttribute("id", hour[i])
        // btn.setAttribute("id", hour[i])
        btn.setAttribute("class", "saveBtn col-md-1 btn")

        var iframe = document.createElement("i");
        iframe.setAttribute("class", "fas fa-save");
        document.querySelector(".container").appendChild(d1)
        d2.appendChild(p);
        btn.appendChild(iframe);

        d1.appendChild(d2);
        d1.appendChild(textarea);
        d1.appendChild(btn);

   
        console.log("work")
    }
function saveText(){
    $("textarea").each(function(){
        var textStorage = $(this).val();
        console.log(textStorage);
        localStorage.setItem($(this).attr("id"),textStorage);
       
      
       
    })
}

    $("button").click(function(){
   saveText();
})

    //create an onclick event.
    //grab the userinput and hour
    //set to local storage

    //.saveBtn
    // document.querySelector(".saveBtn").onclick = function () {
    //     console.log(this.getAttribute("id"));
    //     console.log(this.parentElement.children[1].value);
    //     localStorage.setItem(this.getAttribute("iframe"), this.parentElement.children[1].value);

    // };

    // // document.querySelector("iframe").value(localStorage.getItem("iframe"));
    // console.log(localStorage.getItem("iframe"))
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
