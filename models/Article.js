//require mongoose
var mongoose = require ("mongoose");

//create Schema class
var Schema = mongoose.Schema;

//create article schema 
var ArticleSchema = new Schema({
	//title is a required string
	title: {
		type: String,
		required: true
	},
	//link is a required string

	link: {
		type: String,
		required: true
	},
	//this saves on comment's ObjectId, ref refers to the Comments model
	comments: {
		type: Schema.Types.ObjectId,
		ref: "Comments"
	}
});

//create teh Article model witht he ArticleSchema

var Article = mongoose.model("Article", ArticleSchema);

//Export the model
module.exports=Article;