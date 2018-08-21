var ref = firebase.database().ref();

ref.once("value").then(function (snapshot) {
    var snapVal = snapshot.val();
    var urlList = ["1", "2", "3"]

    for (let item in snapVal) {
        var snapURL = snapVal[item].imgURL;
        var snapRating = snapVal[item].currentRating;
        var snapClass = snapVal[item].classes;
        var snapComment = snapVal[item].comment;
        var snapTimesRated = snapVal[item].timesRated;

        console.log(snapTimesRated);
        urlList.push(snapURL);

        console.log(snapURL);

        var newImage = $("<img>");
        newImage.attr("src", snapURL);
        newImage.attr("class", "generated-image");
        if (snapClass === "content beaches") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".beaches-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        } else if (snapClass === "content animals") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".animal-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        } else if (snapClass === "content buildings") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".buildings-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        } else if (snapClass === "content flowers") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".flowers-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        } else if (snapClass === "content places") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".places-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        } else if (snapClass === "content space") {
            var ratings = $("<div>").attr("class", "ratings");
            var comments = $("<div>").attr("class", "comments");
            var rateCount = $("<div>").attr("class", "rateCount");
            rateCount.append("Times Rated: " + snapTimesRated);
            ratings.append("Average Rating: " + snapRating);
            comments.append("Comments: " + snapComment);
            $(".space-rated").append(newImage).append(ratings).append(rateCount).append(comments);
        }


        var images = $("#picture-dump").find("img").map(function () { return this.src; }).get();

    };
    console.log(images);
    console.log("This is URL List: " + urlList);




});

