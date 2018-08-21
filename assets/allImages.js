var ref = firebase.database().ref();

ref.once("value").then(function (snapshot) {
    var snapVal = snapshot.val();
    var urlList = ["1", "2", "3"]

    for (let item in snapVal) {
        var snapURL = snapVal[item].imgURL;
        var snapRating = snapVal[item].currentRating;

        urlList.push(snapURL);

        console.log(snapURL);

        var newImage = $("<img>");
        newImage.attr("src", snapURL);
        newImage.attr("class", "generated-image");
        $("#picture-dump").append(newImage).append("Average Rating: " + snapRating);

        var images = $("#picture-dump").find("img").map(function () { return this.src; }).get();

    };
    console.log(images);
    console.log("This is URL List: " + urlList);




});

