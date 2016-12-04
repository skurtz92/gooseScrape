$.getJSON("/articles", functoin(data) { //grab articles as a JSON
//For each one
for (var i=0; i <data.lenght; i++) {
	//display the apropos info on the page

	$("#articles").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
}
});

//whenever someone clicks a p tag

$(document).on("click", "p", function(){
	// empty the comments from the comments section

	$("#comments").empty();
	//save the id from the p tag

	var thisId = $(this).attr("data-id");

	//now make an ajax call for the Article

	$.ajax({
		method: "GET",
		url: "/articles/" + thisId
	})

	// with that done, add the comment info to the page

	.done(function(data) {
		console.log(data);
		//the title of the article
		$("#comments").append("<h2>" + data.title + "</h2>");
	 // An input to enter a new title
      $("#comments").append("<input id='titleinput' name='title' >");
      // A textarea to add a new comment body
      $("#comments").append("<textarea id='bodyinput' name='body'></textarea>");
      // A button to submit a new comment, with the id of the article saved to it
      $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Save Comments</button>");

      // If there's a comment in the article
      if (data.comments) {
        // Place the title of the comment in the title input
        $("#titleinput").val(data.comments.title);
        // Place the body of the comment in the body textarea
        $("#bodyinput").val(data.comments.body);
      }
    });
});

// when you click the savecomment button

$(document).on("click", "#savecomments", function() {
	// grab the id associated with the article from the submit button
	var thisId = $(this).attr("data-id");

	// run a POST request to change the comment, using wha't entered in the inputs 
})
	