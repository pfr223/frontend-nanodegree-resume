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




// $("#header").append("Fangrui Pei Project");

/*
var bio = {
	"name" : "PFR",
	"role" : "Radar Engineer",
	"contacts" : {
		"mobil" : 15247184586,
		"email" : "peifangrui@163.com",
		"github" : "pfr223",
		"location" : "Hohhot",
		"twitter" : "@pfr223"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : [ "awesomeness", "developing things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

bio["city"] = "Mountain View";
// bio.city = "Mountain View";
bio["love"] = "GaoYao";
// bio.love = "GaoYao";

//$("#main").append(bio.city);

var work = {};
work.position = "Daibanzhuren";
work.employer = "Inner ATM";
work.years = 6;
work.city = "Hohhot";


var education = {};
education["last_school"] = "Inner Mongolior University";
education["year"] = 2005;
education["school_city"] = "Hohhot";

*/



var bio = {
	"name" : "Pei Fangrui",
	"role" : "Radar Engineer",
	"contacts" : {
		"mobil" : 15247184586,
		"email" : "peifangrui@163.com",
		"github" : "pfr223",
		"location" : "Hohhot",
		"twitter" : "@pfr223"
	},
	"welcomeMessage" : "lorem ipsum dolor sit amet etc etc etc.",
	"skills" : [ "awesomeness", "developing things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
}

var education = {
	"schools" : [
	   {
	   		"name" : "Nova Southeastern University",
	   		"city" : "Fort Lauderdale, FL",
	   		"degree" : "Masters",
	   		"majors": ["CS"],
	   		"dates" : 2013
	   		"url" : "http://example.com"
	   },
	   {
	   		"name" : "Eckerd College",
	   		"city" : "Saint, Petersburg, FL",
	   		"degree" : "BA",
	   		"majors": ["CS"],
	   		"dates" : 2003
	   		"url" : "http://example.com"
	   }
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Crash Course",
			"scholol" : "Udacity",
			"dates" :2014,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}


var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower"
		},		
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"dates": "January 1999 - Future",
			"description": "AAAAAAAAAAAAAAAAAAAAAAWho moved my cheese cheesy feet cauliflower"
		}
	]
}


var projects = {
	"projects" : [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
			"images": [
			     "http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg",
			     "http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg"
			     ]
		}
	]
}

