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


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

//$("#topContacts").append(HTMLcontactGeneric);

var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobil);
$("#topContacts").append(formattedMobile);

var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
$("#topContacts").append(formattedEmail);

var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
$("#topContacts").append(formattedTwitter);

var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
$("#topContacts").append(formattedGithub);

var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
$("#topContacts").append(formattedLocation);

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	for(skill in bio.skills) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}



var education = {
	"schools" : [
	   {
	   		"name" : "Nova Southeastern University",
	   		"location" : "Fort Lauderdale, FL",
	   		"degree" : "Masters",
	   		"majors": ["CS"],
	   		"dates" : 2013,
	   		"url" : "http://example.com"
	   },
	   {
	   		"name" : "Eckerd College",
	   		"location" : "Saint, Petersburg, FL",
	   		"degree" : "BA",
	   		"majors": ["CS"],
	   		"dates" : 2003,
	   		"url" : "http://example.com"
	   }
	],
	"onlineCourses" : [
		{
			"title" : "JavaScript Crash Course",
			"school" : "Udacity",
			"dates" :2014,
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}

education.display = function() {

	for (school in education.schools){
		$("#education").append(HTMLschoolStart);
		
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);

		if (education.schools[school].majors.length > 0){
			for (major in education.schools[school].majors){
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}

	for (onlineCourse in education.onlineCourses){
		$("#education").append(HTMLonlineClasses);

		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedTitleSchool = formattedTitle + formattedSchool ;
		$("#education").append(formattedTitleSchool);
	}

}

education.display();

/*
var work = {
	"jobs": [
		{
			"employer": "Planet Express",
			"title": "Delivery Boy",
			"location": "Beijing",
			"dates": "January 3000 - Future",
			"description": "Who moved my cheese cheesy feet cauliflower"
		},		
		{
			"employer": "Panucci's Pizza",
			"title": "Delivery Boy",
			"location": "Shanghai",
			"dates": "January 1999 - Future",
			"description": "AAAAAAAAAAAAAAAAAAAAAAWho moved my cheese cheesy feet cauliflower"
		}
	]
}
*/

var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var projects = {
	"projects" : [
		{
			"title": "Sample Project 1",
			"dates": "2014",
			"description": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
			"images":  ["images/fry.jpg", "images/197148.gif"]
			//[
			  //   "http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg",
			  //   "http://www.planwallpaper.com/static/images/Winter-Tiger-Wild-Cat-Images.jpg"
			  //   ]
		}
	]
}




work.display = function() {

	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}

}

work.display();


projects.display = function() {
	for (project in projects.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images){ 
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();






$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks(x, y);
});

function locationizer(work_obj) {
    var arrLocation = [];
    for ( job in work_obj.jobs) {
        var newLocation = work_obj.jobs[job].location;
        arrLocation.push(newLocation);
    }
    return arrLocation;
    
}



function inName(name) {
	name = bio.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
	
	return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);


projects.display

$("#mapDiv").append(googleMap);
