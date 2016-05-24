var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var shortid = require('short-mongo-id');

var subjectShortIDSchema = new Schema({
	ID: {type: String, 'default': shortid((Schema.Types.ObjectId).valueOf()), ref: 'Subject', unique: true}
});

var SubjectIDs = module.exports = mongoose.model('SubjectIDList', subjectSchema, 'subjectLists');

//get all subjects
module.exports.getSubjectIDList = function(callback, limit){
	SubjectIDs.find(callback).limit(limit);
}