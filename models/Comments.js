//require mongoose
var mongoose = require("mongoose");
//create a schema class
var Schema = mongoose.Schema;

//create the Article schema

var ArticleSchema = new Schema ({
	title: {
		type: String
	},

	body: {
		type: String
	}

});

//ids are referred to in the article model

//create the Article model with the ArticleSchema
var Comments = mongoose.model("Comments", NoteSchema);

//export the Article model
module.exports = Comments;