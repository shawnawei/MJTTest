var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//subject schema
var subjectSchema = new Schema({

	ID: Number,
	Sex: String,
	Handedness: String,
	Diagnosis: String,
	Projects: [{
		"Project ID": String,
		"SubjectIDinProject": String,
		"Scan Sessions": [{
				"Session ID": String,
				"Participant age": Number,
				"MEG Scans":[{ "Scan Name": String, "Scan Date": Date }],
				"MRI Scans":[{"Scan Name": String, "Scan Date": Date }],
				"Test Results": {"IQ Score": Number, "ADHD Scale": Number}
		}]
	}]
});

var Subject = module.exports = mongoose.model('subjectLists', subjectSchema, 'subjectLists');

//get subject
module.exports.getSubjects = function(callback, limit){
	Subject.find(callback).limit(limit).pretty();
}