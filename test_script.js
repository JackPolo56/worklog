//var numDays = array[];
/*function addDays(){
    var myTable = document.getElementById("table");
    var row2 = document.getElementById("WorkoutDays");
    
    var newDay = document.createElement("td");
    var newText = document.createTextNode("New Day");
    myTable.appendChild(newDay);
    
}*/


//var numDays = array[];
var addOneday = document.getElementById("Add");
var myTable = document.getElementById("table");
var i = 1;
addOneday.onclick = function(){
    
    
    var row2 = document.getElementById("WorkoutDays");
    
    var newDay = document.createElement("th");
    
    
    var newText = document.createTextNode("Day"+i);
    i++;
    
    newDay.appendChild(newText);
    row2.appendChild(newDay);
}

var insertData = document.getElementById("Insert");

insertData.onclick = function(){
    var numDay = prompt("Which day?");
    var numExercise = prompt("Insert at which exercise?");
    var numWeight = prompt("How much weight?");
    var numReps = prompt("How many reps?");
    var numSets = prompt("How many sets");
    
   // var newData = document.createTextNode("1243");
    document.getElementById("table").rows[numExercise].cells[numDay].innerHTML = numWeight+"lbs *"+numReps+"reps *"+numSets+"sets";
    //var newCell = document.createElement("td")
   // newCell.appendChild(newData);
   // myTable.appendChild(newCell);
    //myTable.insertBefore(newCell, table.rows[1].cells[1]);
}




