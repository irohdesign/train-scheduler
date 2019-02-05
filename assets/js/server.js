// dependencies


// Initialize Firebase
var config = {
apiKey: "AIzaSyDlQGqneV91nf2hPoMh68A2xCjb2JFgqw4",
authDomain: "train-schedule-app-454e1.firebaseapp.com",
databaseURL: "https://train-schedule-app-454e1.firebaseio.com",
projectId: "train-schedule-app-454e1",
storageBucket: "train-schedule-app-454e1.appspot.com",
messagingSenderId: "854438419641"
};
firebase.initializeApp(config);

var database = firebase.database();
var ref = firebase.database().ref();


// test data for table format
// var newTrain = "Anaconda Express";
// var destination = "Rhode Island";
// var frequency = 24;
// var nextArrival = "05:28 PM";
// var minutesAway = 15;



// add trains button
$("#submit").on("click", function(snapshot) {
    event.preventDefault();

    var newTrain = $("#train-name").val();
    var newDest = $("#destination").val();
    var newFirst = $("#first-train").val();
    var freq = $("#frequency").val();

    // console.log(newTrain);

    var trainObj = {
        "newTrain" : newTrain,
        "newDest" : newDest,
        "newFirst" : newFirst,
        "frequency" : freq
    }

    console.log(trainObj);

    database.ref().push(trainObj);
    console.log("added info");

    // clear inputs
    $("#train-name").val("");
    $("#destination").val("");
    $("#first-train").val("");
    $("#frequency").val("");

    // print out train schedule
    // console.log(snapshot.val());
    

})

ref.on("value", function(snapshot) {
    var trains = snapshot.val();

    // $.each(trains, function (index, value) {
    //     console.log(index + ":" + $(this).val(value));
    // })

    for (var key in trains) {
        console.log(trains[key].frequency);
    }
});