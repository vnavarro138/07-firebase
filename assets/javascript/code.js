/* global moment firebase */

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAzc0gmR74H52D4rLOkvucKpolPn5tjric",
    authDomain: "test-project-15aba.firebaseapp.com",
    databaseURL: "https://test-project-15aba.firebaseio.com",
    projectId: "test-project-15aba",
    storageBucket: "test-project-15aba.appspot.com",
    messagingSenderId: "506747897296"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

// Initial Values
// var trainName = "";
// var destination = "";
// var firstTrain = "";
// var frequency = "";

// Whenever a user clicks the submit-bid
$("#submit-train").on("click", function() {
  // Get the input values
  var trainName = $("#trainName").val().trim();
  var destination = $("#destination").val().trim();
  var firstTrain = $("#firstTrain").val().trim();
  var frequency = $("#frequency").val().trim();

  // Log the train info
  console.log(trainName);
  console.log(destination);
  console.log(firstTrain);
  console.log(frequency);
});
//  // Save the new train in Firebase
//     database.ref().set({
//       TrainName: trainName,
//       Destination: destination,
//       TrainTime: firstTrain,
//       Frequency: frequency,
//     });
//      // Store the new train info as a local variable 
//     trainName = TrainName;
//     destination = Destination;
//     firstTrain = TrainTime;
//     frequency = Frequency;

//     // Change the HTML to reflect the new high price and bidder
//     $("#trainName1").text(trainName);
//     $("#destination1").text(destination);
//     $("#frequency1").text(frequency);
//     $("#firstTrain1").text(firstTrain);
// });