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
                        animalImage.attr("data-still",results[i].images.fixed_height_still.url)
                        var p = $("<p>").text("Rating: " + results[i].rating);
                        animalImage.attr("data-animate", results[i].images.fixed_height.url);
                        animalImage.attr('data-state', "animate")
                        animalImage.attr("src", results[i].images.fixed_height.url);
                        gifDiv.append(animalImage);
                        gifDiv.append(p);
                        $("#GifField").prepend(gifDiv);

                       
                             $(animalImage).on("click", function() {

                                    var state = $(this).attr('data-state');
                                    

                                    if (state === "still") {
                                        $(this).attr("src", $(this).attr("data-animate"));
                                        $(this).attr("data-state", "animate");
                                      } else {
                                        $(this).attr("src", $(this).attr("data-still"));
                                        $(this).attr("data-state", "still");
                                      }
                                    });
                                
                    };
                });
            console.log($(this).html())
        })
        $("#buttonfield").append(button);
    }

    
};



makebuttons();

$("#submitbutton").on("click", function (event) {
    event.preventDefault();
    $(this).push(topics);
    console.log(topics);
});





                        //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                             
                       
                          
                        
                   

                    

           
