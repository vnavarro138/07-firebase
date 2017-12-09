//create a variable called config (note; this is not secure, data can be hacked into very easily using your public API key)
var config = {
    apiKey: "AIzaSyAzc0gmR74H52D4rLOkvucKpolPn5tjric",
    authDomain: "test-project-15aba.firebaseapp.com",
    databaseURL: "https://test-project-15aba.firebaseio.com",
    projectId: "test-project-15aba",
    storageBucket: "test-project-15aba.appspot.com",
    messagingSenderId: "506747897296"
};
//we're starting up firebase (turning it on, basically). this needs to be done, otherwise line 12 will fail
firebase.initializeApp(config);
//create variable called database to avoid calling out firebase.database every time
var database = firebase.database();


//DONE: button to add train
$("#add-train-btn").on("click", function() {
// we are prevent the default action from occurring (which is refrehsing the page). Instead do what's called out in the function below
    event.preventDefault();
//DONE: grab user input from form
//.val gets the value that the user entered. trim will take out spaces at beg and end, not in the middle. if you don't have .val,
//it will fail. it won't get anything
    var trainName = $("#train-name-input").val().trim();
    var destination = $("#destination-input").val().trim();
    var firstTrainTime = $("#first-train-time-input").val().trim();
    var frequency = $("#frequency-input").val().trim();
	
//DONE: console log train info from form input
    console.log("grabs input from form " + trainName, destination, firstTrainTime, frequency);
	
//DONE: Create a local "temporary" object for holding train data
	var newTrain = {
		name: trainName,
		destination: destination,
		firstTrainTime: firstTrainTime,
		frequency: frequency
	};

	
//DONE: upload train data to temp object. pushing the newTrain object to firebase. we're adding something new to databsase
    database.ref().push(newTrain);
	
//DONE: console log train info from firebase
	console.log("grabs data from database " + newTrain.name, newTrain.destination, newTrain.firstTrainTime, newTrain.frequency);
	
//DONE:Alert user that the Train data successfully added
	alert("Train data has successfully been added");
	
//DONE: clear all text-boxes in the form. here we set the value. 
//if something is inside the paranthesis for .val(x), we set something, if it's blank ie. .val(), we are getting something
$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-time-input").val("");
$("#frequency-input").val("");
}); //this is where on click gets closed out
	
//DONE: create firebase event to add train data to the firebase database. 
//We're adding a function to run when something gets added to the database (ie. when we click submit button) 
//this will run when line 41 happens. this will also run when the page loads. (if there is stuff in the database, this will run)
//if the database is empty this won't run. this will be run once for every item. 
//childSnapshot is just a random name, I could make this anything, so long as im consistent (ie. lines 64 & 67-70)
//shouldn't do moment stuff on click, becuase it wouldnt be dynamic. Anything you want to be dynamic, store what you need, and 
//recreate everything else we need
database.ref().on("child_added", function(childSnapshot, prevChildKey){
	console.log(childSnapshot.val());
//DONE: store everything into a variable (grab info from temp object)
    var trainName = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().firstTrainTime;
    var frequency = parseInt(childSnapshot.val().frequency);

//NOT WORKING: console log info stored in firebase database
	console.log("test " + trainName);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(frequency);

//TO DO: put the first train time in a better format using moment.js
	var convertedFirstTrainTime = 0;
	console.log(convertedFirstTrainTime);
//TO DO: calculate the next arrival
	var nextArrival = 0;
	console.log(nextArrival);
//TO DO: calculate the minutes away
	var minsAway = 0;
	console.log(minsAway);
//calculate next train time and mins remaining prior to the append so that it is included 
console.log("first Train Time " + firstTrainTime);
// First Time (pushed back 1 day to make sure it comes before current time)
 var firstTimeConverted = moment(firstTrainTime, "HH:mm").subtract(1, "days");
 console.log(firstTimeConverted);
// Current Time in military time
var currentTime = moment(currentTime);
console.log("CURRENT TIME: " + currentTime.format("HH:mm"));
// Difference between the times
  var diffTime = currentTime.diff(firstTimeConverted,"minutes");
 // 
  console.log("DIFFERENCE IN TIME: " + diffTime);
// Time apart (remainder)
  var tRemainder = diffTime % frequency;
  console.log("remainder " + tRemainder);
// Minutes Until Train
  var tMinutesTillTrain = frequency - tRemainder;
  console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);
// Next Train
  var nextTrain = moment().add(tMinutesTillTrain, "minutes");
  console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
//ERROR: Add a row in the html when user adds a train
	$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>"
	 + frequency + "</td><td>" + moment(nextTrain).format("HH:mm") + "</td><td>" + tMinutesTillTrain + "</td></tr>");
	}); //this closes out the child-added 
