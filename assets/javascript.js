




function dogsLoad() {
    var queryURL = "https://dog.ceo/api/breeds/image/random";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var dogImg = $("<img>");
            dogImg.attr("src", response.message);
            dogImg.attr("alt", "Dogs API");
            console.log(dogImg);
            $("#catagory-1").append(dogImg);
        });
};

dogsLoad()