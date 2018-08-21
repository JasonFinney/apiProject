var config = {
    apiKey: "AIzaSyDN2yW-6RIO6gyvGsbF6soBGfdEDwKL78g",
    authDomain: "rate-it-5f6dd.firebaseapp.com",
    databaseURL: "https://rate-it-5f6dd.firebaseio.com",
    projectId: "rate-it-5f6dd",
    storageBucket: "rate-it-5f6dd.appspot.com",
    messagingSenderId: "662008280706"
};
firebase.initializeApp(config);

var database = firebase.database();
var timesRated = 1;
var commentArray;
//Random number generator
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

//Animal gifs and images
var animalArray = [];
var queryCatURL = "https://api.giphy.com/v1/gifs/search?q=cats&api_key=gLeB5PHXzjgIpt57b5y35Y0ukNAkv14k";
$.ajax({
    url: queryCatURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 5; i++) {
        animalArray.push(response.data[i].images.original.url);
    };
    for (i = 5; i < 10; i++) {
        animalArray.push(response.data[i].images.original_still.url);
    };
});
var queryDogUrl = "https://api.giphy.com/v1/gifs/search?q=dogs&api_key=gLeB5PHXzjgIpt57b5y35Y0ukNAkv14k";
$.ajax({
    url: queryDogUrl,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 5; i++) {
        animalArray.push(response.data[i].images.original.url);
    };
    for (i = 5; i < 10; i++) {
        animalArray.push(response.data[i].images.original_still.url);
    };
});

// This is the the Giphy API to generate pictures for the animals category
$(document).on("click", "#animals", function () {
    $(".content").remove();
    var currentAnimal = animalArray[getRandomInt(19)];
    localStorage.setItem("currentItem", currentAnimal);
    var giph = $("<img>");
    giph.attr("src", currentAnimal);
    giph.attr("alt", "Giphy Gif");
    giph.attr("class", "content animals");
    $("#category-1").append(giph);
    $(".currentImage").append(giph);
});
// End GiphyAPI

// Beaches images
var beachesArray = [];
var queryBeachesURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=beaches";
$.ajax({
    url: queryBeachesURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 19; i++) {
        beachesArray.push(response.hits[i].largeImageURL);
    };
});

// This is the Pixabay API
$(document).on("click", "#beaches", function () {
    $(".content").remove();
    var currentBeach = beachesArray[getRandomInt(19)];
    localStorage.setItem("currentItem", currentBeach);
    var beach = $("<img>");
    beach.attr("src", currentBeach);
    beach.attr("alt", "Pretty, Pretty Beach!");
    beach.attr("class", "content beaches");
    $("#category-2").append(beach);
    $(".currentImage").append(beach);
});

//Buildings Images
var buildingsArray = [];
var queryBuildingsURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=buildings";
$.ajax({
    url: queryBuildingsURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 19; i++) {
        buildingsArray.push(response.hits[i].largeImageURL);
    }
})

$(document).on("click", "#buildings", function () {
    $(".content").remove();
    var currentBuilding = buildingsArray[getRandomInt(19)];
    localStorage.setItem("currentItem", currentBuilding);
    var building = $("<img>");
    building.attr("src", currentBuilding);
    building.attr("alt", "Tall Building");
    building.attr("class", "content buildings");
    $("#category-3").append(building);
    $(".currentImage").append(building);
});

//Flowers images
var flowersArray = [];
var queryFlowersURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=flowers";
$.ajax({
    url: queryFlowersURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 19; i++) {
        flowersArray.push(response.hits[i].largeImageURL);
    };
});

$(document).on("click", "#flowers", function () {
    $(".content").remove();
    var currentFlowers = flowersArray[getRandomInt(19)];
    localStorage.setItem("currentItem", currentFlowers);
    var flower = $("<img>");
    flower.attr("src", currentFlowers);
    flower.attr("alt", "Colorful Flower");
    flower.attr("class", "content flowers");
    $("#category-4").append(flower);
    $(".currentImage").append(flower);
});

//Places images
var placesArray = [];
var queryPlacesURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=places";
$.ajax({
    url: queryPlacesURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 19; i++) {
        placesArray.push(response.hits[i].largeImageURL);
    };
});

$(document).on("click", "#places", function () {
    $(".content").remove();
    var currentPlaces = placesArray[getRandomInt(19)];
    localStorage.setItem("currentItem", currentPlaces);
    var places = $("<img>");
    places.attr("src", currentPlaces);
    places.attr("alt", "What a nice place!");
    places.attr("class", "content places");
    $("#category-5").append(places);
    $(".currentImage").append(places);
});

//Space images
var spaceArray = [];
var querySpaceURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=space";
$.ajax({
    url: querySpaceURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 1; i++) {
        spaceArray.push(response.hits[i].largeImageURL);
    };
});

$(document).on("click", "#space", function () {
    $(".content").remove();
    var currentSpace = spaceArray[getRandomInt(1)];
    localStorage.setItem("currentItem", currentSpace);
    var space = $("<img>");
    space.attr("src", currentSpace);
    space.attr("alt", "Spaced Out!");
    space.attr("class", "content space");
    $("#category-6").append(space);
    $(".currentImage").append(space);
});

$('.topics').on('click', function () {
    $('#image-display').removeClass('hidden');
    $('#main-display').addClass('hidden');
});

$('.btn-secondary').on('click', function () {
    currentRating = $(this).val();
    $('#main-display').addClass('hidden');
    if (currentRating > 2) {
        var audio = $("#like")[0];
        audio.play();
    } else {
        var audio = $("#dislike")[0];
        audio.play();
    }

    if (currentRating == 5) {
        $('.displayReview').append('<img src="assets/images/5stars.png" />');
    } else if (currentRating == 4) {
        $('.displayReview').append('<img src="assets/images/4stars.png" />');
    } else if (currentRating == 3) {
        $('.displayReview').append('<img src="assets/images/3stars.png" />');
    } else if (currentRating == 2) {
        $('.displayReview').append('<img src="assets/images/2stars.png" />');
    } else {
        $('.displayReview').append('<img src="assets/images/1star.png" />');
    };

    $('.currentReview').append("<strong>" + currentRating + " stars!</strong><br>");
    setTimeout(function () {
        $('#rating-display').removeClass('hidden');
        $('#image-display').addClass('hidden');
    }, 2000);
    var imgURL = $(".content").attr("src");
    console.log(imgURL);
    var ref = firebase.database().ref();
    ref.orderByChild("imgURL").equalTo(imgURL).once("value", function (snapshot) {
        commentArray = [];
        if (snapshot.val()) {
            console.log("exists!")
            Number(timesRated);
            timesRated++;


            // we had this image already so update it with new rating average and increment the timesRated
        } else {
            console.log("Doesn't exist!")
            var ratingAve;
            timesRated = 1;

            // this is a new image, create a new record for it
        };
    });
});
// will fix above
$('.changeReview').on('click', function () {
    currentRating = '';
    $('#rating-display').addClass('hidden');
    $('#image-display').removeClass('hidden');
    $(".currentReview").empty();
    $(".displayReview > img").remove();
});

$(".backToHome").on("click", function () {
    event.preventDefault();
    var imgURL = $(".content").attr("src");
    var comment = $("#review-input").val().trim();
    var classes = $(".content").attr("class");

    database.ref().push({
        imgURL,
        currentRating,
        comment,
        classes,
        timesRated
    });
    commentArray.push(comment);
    $("#rating-display").addClass("hidden");
    $("#main-display").removeClass("hidden");
    $(".currentImage").empty();
    $(".currentReview").empty();
    $(".displayReview > img").remove();
});
