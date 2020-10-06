'use strict';

//problem domain
// create 6×6 table
//contains random values(0-100)
//last column will be the sum of each row 
//last row will be the sum of each column

//array to store the results of the last row
var lastRow = [0,0,0,0,0,0];

//targeting the HTML div
var table = document.getElementById('tableDiv');

//create the table
var parentElement = document.createElement('table');
table.appendChild(parentElement);

// variable to store the random number
var random;

//creating the rows
for(var r = 0; r < 6; r++){ 

    var tableRow = document.createElement('tr');
    parentElement.appendChild(tableRow);
    
    //first five rows
    if (r < 5){ 
        var rowSum = 0; //variable to store the summation of each row
        
        //create six columns
        for(var c = 0; c < 6; c++){
            var tableColumn = document.createElement('td');
            tableRow.appendChild(tableColumn);
            //first five columns
            if (c < 5){ 
                random = getRandomNumber(0,100)
                tableColumn.textContent = random;
                rowSum += random;
                //the content of the last column in the first five rows
                lastRow[c] += random;
            //last column in each row
            } else {
                tableColumn.textContent = rowSum;
                //the content of the last column in the last row
                lastRow[c] += rowSum;
            }
        }
    } 
    //the last row
    else { 
        for(var l = 0; l < 6; l++){ //td's of last row
        var lastRowCells = document.createElement('td');
        tableRow.appendChild(lastRowCells);
        lastRowCells.textContent = lastRow[l];
        }
    }
}


function getRandomNumber(max,min){
    var random = Math.random();
    random = (random * (max - min + 1)) + min;
    random = Math.floor(random);
    return random;
}














