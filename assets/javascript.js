



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
$(document).on("click", "#category-1", function () {
    console.log(animalArray);
    $(".animal-content").remove();
    console.log(animalArray[getRandomInt(19)]);
    var giph = $("<img>");
    giph.attr("src", animalArray[getRandomInt(19)]);
    giph.attr("alt", "Giphy Gif");
    giph.attr("class", "animal-content");
    $("#category-1").append(giph);
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

    }
})

// This is the Pixabay API
$(document).on("click", "#category-2", function () {
    $(".beach-content").remove();
    var beach = $("<img>");
    beach.attr("src", beachesArray[getRandomInt(19)]);
    beach.attr("alt", "Pretty, Pretty Beach!");
    beach.attr("class", "beach-content");
    $("#category-2").append(beach);
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

$(document).on("click", "#category-3", function () {
    $(".building-content").remove();
    var building = $("<img>");
    building.attr("src", buildingsArray[getRandomInt(19)]);
    building.attr("alt", "Tall Building");
    building.attr("class", "building-content");
    $("#category-3").append(building);
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
    }
})

$(document).on("click", "#category-4", function () {
    $(".flowers-content").remove();
    var flower = $("<img>");
    flower.attr("src", flowersArray[getRandomInt(19)]);
    flower.attr("alt", "Colorful Flower");
    flower.attr("class", "flowers-content");
    $("#category-4").append(flower);
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
    }
})

$(document).on("click", "#category-5", function () {
    $(".places-content").remove();
    var places = $("<img>");
    places.attr("src", placesArray[getRandomInt(19)]);
    places.attr("alt", "What a nice place!");
    places.attr("class", "places-content");
    $("#category-5").append(places);
});

//Space images
var spaceArray = [];
var querySpaceURL = "https://pixabay.com/api/?key=9844470-f932d947d803c027b1f4634e4&q=space";
$.ajax({
    url: querySpaceURL,
    method: "GET"
}).then(function (response) {
    for (i = 0; i < 19; i++) {
        spaceArray.push(response.hits[i].largeImageURL);
    }
});

$(document).on("click", "#category-6", function () {
    $(".space-content").remove();
    var space = $("<img>");
    space.attr("src", spaceArray[getRandomInt(19)]);
    space.attr("alt", "What a nice place!");
    space.attr("class", "space-content");
    $("#category-6").append(space);
});

$('.topics').on('click', function () {
    $('#image-display').removeClass('hidden');
    $('#main-display').addClass('hidden');
})

