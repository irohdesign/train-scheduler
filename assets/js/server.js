// dependencies


// Initialize Firebase
// var config = {
// apiKey: "AIzaSyDlQGqneV91nf2hPoMh68A2xCjb2JFgqw4",
// authDomain: "train-schedule-app-454e1.firebaseapp.com",
// databaseURL: "https://train-schedule-app-454e1.firebaseio.com",
// projectId: "train-schedule-app-454e1",
// storageBucket: "train-schedule-app-454e1.appspot.com",
// messagingSenderId: "854438419641"
// };
// firebase.initializeApp(config);




// test data for table format
// var newTrain = "Anaconda Express";
// var destination = "Rhode Island";
// var frequency = 24;
// var nextArrival = "05:28 PM";
// var minutesAway = 15;



// trainRow.append(nameData, destData, freqData, nextData, awayData);


// table format
// var trains = [
//     {
//         "name" : ""
//     }
// ];

$.each(trains, function (index, value) {
    var newRow = $("<tr>");
    newRow.html(`<td>${newTrain}</td><td>${destination}</td><td>${frequency}</td><td>${nextArrival}</td><td>${minutesAway}</td>`);

    $(".trains").append(newRow);
})

