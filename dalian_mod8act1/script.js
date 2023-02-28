let fullName = prompt("Enter your full name: ");
document.getElementById('fname').innerHTML = fullName;

let userName = prompt("Please input your username: ");
document.getElementById('username').innerHTML = userName;

var confirmGndr = "Press OK if you are male! \nPress CANCEL if you are female!";
	if(confirm(confirmGndr) == true){
		alert('Your profile gender is set to MALE.');
		document.getElementById('gender').innerHTML = "M";
	}
	else{
		alert('Your profile gender is set to FEMALE.');
		document.getElementById('gender').innerHTML = "F";
	}

let description = prompt("Type a short description of yourself: ");
document.getElementById('desc').innerHTML = description;

let birthYear = prompt("Enter your birth year: ");
document.getElementById('year').innerHTML = birthYear;

let agevalue = 2023-birthYear;
document.getElementById('age').innerHTML = agevalue;

var confirmPic = "Do you want a custom profile picture?";
	if(confirm(confirmPic) == true){
		let profilePic = prompt("Please enter the file name of the picture (ex wow.jpg)");
		document.getElementById('ppic').src = profilePic;
	}
	else{
		alert('No image has been set.');
	}


