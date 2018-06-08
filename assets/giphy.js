var start = alert("");

var topics = ["lion", "tiger", "bear", "wolf", "snake", "mouse", "monkey"]
//6 topics//
var one = 0;
console.log(topics);

function makebuttons() {
    for (i = 0; i < topics.length; i++) {
        var button = $("<button>").html(topics[i]);
        button.addClass("buttonstyle");


        //grab = button.val($(this));

        button.on("click", function () {
            $("#huh").text("inch");
            //retrieve = button.val();

            buttonchoice = $(this).html();
            var APIKey = "MKx7Mjp2X4LMvUfknqdeT7tyc1WtMsO7";

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + buttonchoice + "&api_key=" + APIKey + "&limit=5";

            $.ajax({
                url: queryURL,
                method: "GET"
            })
                .then(function (response) {


                    console.log(queryURL);
                    console.log(response);

                    results = response.data;

                    for (var i = 0; i < results.length; i++) {
                        var gifDiv = $("<div>");
                        gifDiv.addClass("item");
                        var animalImage = $("<img>");
                        animalImage.attr("src", results[i].images.fixed_height.url);
                        gifDiv.append(animalImage);
                        $("#GifField").prepend(gifDiv);
                    };
                });


            console.log($(this).html())
        })


        $("#buttonfield").append(button);
    }
};

makebuttons();
