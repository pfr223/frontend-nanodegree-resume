/*
This is empty on purpose! Your code to build the resume will go here.
 */

// $("#main").append("Fangrui Pei");

// [string].replace([old],[new]);


/*
var email = "pfr223@udacity.com";
var newEmail = email.replace("udacity","gmail");

console.log(email);
console.log(newEmail);
*/




//lesson 1.3

//var awesomeThoughts = "I am AWESOME!!"; 
//var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
//$("#main").append(funThoughts);




//lesson 1.4
/*
var name = "Fangrui Pei";
var role = "Radar Engineer";

var formattedName = HTMLheaderName.replace("%data%", name);
var FormattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(FormattedRole);
$("#header").prepend(formattedName);
*/


//lesson 1.5

var formattedName = HTMLheaderName.replace("%data%", "Pei Fangrui");
var formattedRole = HTMLheaderRole.replace("%data%", "Radar Engineer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




//lesson 1.9   Array

//var skills = ["singing", "radar", "playing games"];

//$("#main").append(skills[0]);
//$("#main").append(skills);






//lesson 1.10 Array length    .length  
//The length of an array is the number of items in it, the last index of an 
//array is array.length-1

//var skills = ["singing", "radar", "playing games"];
//var array_length = skills.length;
//console.log(array_length) ;





//lesson 1.11 Array Manipulation
/*
var sampleArray = [0,0,7];

var incrementLastArrayElement = function(_array) {
    var newArray = [];
    // Your code should make newArray equal to an array that has the same
    // values as _array, but the last number has increased by one.
    
    // For example:
    // _array = [1, 2, 3];
    // turns into:
    // newArray = [1, 2, 4];
    
    // Your code goes in here!
    var popped = sampleArray.pop();
    var total = sampleArray.push(popped+1);
    newArray = sampleArray;
    
    // Don't delete this line!
    return newArray;
};

// Did your code work? The line below will tell you!
console.log(incrementLastArrayElement(sampleArray));
*/




//lesson 1.12 String Manipulation
/*
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
    var finalName = oldName;
    var names = oldName.split(" ");
    names[1] = names[1].toUpperCase();
    names[0] = names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();
    finalName = names.join(" ");
    return finalName;
}

// Did your code work? The line below will tell you!
console.log(nameChanger(name));

*/


/*
var skills = ["singing", "radar", "playing games"];
var bio = {
	"name":"Fangrui Pei",
	"role":"Radar Engineer",
	"contact_info": 15247184586,
	"picture_URL" : "images/me.jpg",
	"welcome_message" : "hello world",
	"skills" : skills
};

$("#main").prepend(bio.skills);
$("#main").append(bio.picture_URL);
*/



